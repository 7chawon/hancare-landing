#!/usr/bin/env node
/**
 * 파일 수정(Edit/Write) 직후 PostToolUse 훅에서 호출.
 * hancare_ 전용 git 저장소만 대상으로 add → commit → push 한다.
 * - 변경이 없으면 조용히 종료(빈 커밋 방지)
 * - push는 원격(origin)이 설정돼 있을 때만, 실패해도 편집을 막지 않음(best-effort)
 */
const { execSync } = require('node:child_process')
const path = require('node:path')

// 이 스크립트 위치: <repo>/.claude/auto-commit.cjs → repo = 상위의 상위
const repo = path.resolve(__dirname, '..')
const run = (cmd, opts = {}) =>
  execSync(cmd, { cwd: repo, stdio: 'pipe', encoding: 'utf8', ...opts }).trim()

try {
  // 변경 스테이징
  run('git add -A')

  // 스테이징된 변경이 없으면 종료
  const staged = run('git diff --cached --name-only')
  if (!staged) process.exit(0)

  const stamp = new Date().toISOString().replace('T', ' ').slice(0, 19)
  const count = staged.split('\n').filter(Boolean).length
  const msg = `auto: update ${count} file(s) — ${stamp}`

  run(`git commit -m "${msg}" --no-verify`)
  console.log(`[auto-commit] ${msg}`)

  // 원격이 있으면 push (best-effort)
  let hasRemote = ''
  try {
    hasRemote = run('git remote')
  } catch {
    hasRemote = ''
  }
  if (hasRemote) {
    try {
      const branch = run('git rev-parse --abbrev-ref HEAD')
      run(`git push origin ${branch}`)
      console.log(`[auto-commit] pushed to origin/${branch}`)
    } catch (e) {
      console.log('[auto-commit] push skipped (remote not ready or offline)')
    }
  }
} catch (e) {
  // 훅이 편집 흐름을 막지 않도록 항상 정상 종료
  console.log('[auto-commit] skipped:', String(e.message || e).split('\n')[0])
  process.exit(0)
}
