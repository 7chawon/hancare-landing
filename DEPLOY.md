# 배포 가이드 — 한케어 금융파트너스

React + Vite 정적 사이트. 아래 순서대로 하면 **공개 URL**이 생성되고, 이후 push할 때마다 자동 재배포됩니다.

## 🔗 라이브 URL

- 배포 완료: https://hancare-landing-a9oh72l5u-hancare.vercel.app
- 대표(고정) 주소는 Vercel 프로젝트 **Settings → Domains** 에서 확인 (`*.vercel.app`)
- GitHub: https://github.com/7chawon/hancare-landing
- Vercel Team: `hancare` / Project: `hancare-landing`

## 자동 커밋 / 자동 push (이미 설정됨)

- `.claude/auto-commit.cjs` + `.claude/settings.json` 의 PostToolUse 훅으로,
  파일을 수정할 때마다 이 저장소에 자동 커밋 → origin push 됩니다.
- origin(GitHub 원격)이 연결되기 전까지는 커밋만 되고 push는 자동으로 생략됩니다.
- ⚠️ 새 훅은 Claude Code를 **재시작**해야 활성화됩니다.

## 1단계 — GitHub 저장소 연결 (최초 1회)

1. https://github.com/new 에서 새 저장소 생성 (예: `hancare-landing`, **빈 저장소**로)
2. 아래 명령으로 원격 연결 + 첫 push:

```powershell
cd "C:\Users\마케팅\Desktop\조승현\JSH\브랜딩\hancare_"
git remote add origin https://github.com/<본인계정>/hancare-landing.git
git push -u origin main
```

> 이후부터는 자동 커밋 훅이 알아서 `origin main`으로 push 합니다.

## 2단계 — Vercel 연결 (최초 1회, 클릭 몇 번)

**방법 A. 대시보드 (권장 · 자동 재배포)**
1. https://vercel.com 로그인 → **Add New → Project**
2. 위에서 만든 GitHub 저장소 **Import**
3. Framework: `Vite` 자동 인식 / Build: `npm run build` / Output: `dist` (그대로 두면 됨 — `vercel.json`에 정의됨)
4. **Deploy** 클릭 → `https://hancare-landing.vercel.app` 형태의 URL 생성
5. 이후 `git push` 마다 Vercel이 자동으로 재배포

**방법 B. CLI (즉시 1회 배포)**
```powershell
cd "C:\Users\마케팅\Desktop\조승현\JSH\브랜딩\hancare_"
npx vercel login      # 이메일/깃허브로 1회 로그인
npx vercel --prod     # 빌드 후 프로덕션 URL 출력
```

## 로컬 미리보기

```powershell
npm run dev      # http://localhost:5180
npm run build    # dist/ 생성
npm run preview  # 빌드 결과 미리보기
```
