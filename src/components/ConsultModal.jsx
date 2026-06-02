import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ArrowUpRight } from './Decorations.jsx'

/* ------------------------------------------------------------------ *
 * 상담 신청 모달 — 전역 오픈 컨텍스트
 * 어디서든 useConsult().open() 으로 모달을 띄운다.
 * ------------------------------------------------------------------ */
const ConsultContext = createContext(null)
export function useConsult() {
  return useContext(ConsultContext)
}

export function ConsultProvider({ children }) {
  const [open, setOpen] = useState(false)
  const value = useMemo(() => ({ open: () => setOpen(true) }), [])
  return (
    <ConsultContext.Provider value={value}>
      {children}
      <ConsultModal open={open} onClose={() => setOpen(false)} />
    </ConsultContext.Provider>
  )
}

/* ------------------------------------------------------------------ *
 * 단계 정의
 * ------------------------------------------------------------------ */
const STEPS = [
  {
    key: 'field',
    title: '어떤 도움이\n필요하세요?',
    sub: '관심 있는 상담 분야를 선택해 주세요',
    // 일러스트: 상담 분야를 상징하는 3D 아이콘 묶음 (예: 방패+동전+나무)
    image: 'consult-field.png',
    options: [
      { value: '보험설계', label: '보험설계', desc: '맞춤 보장 분석' },
      { value: '자산관리', label: '자산관리', desc: '포트폴리오 설계', recommend: true },
      { value: '노후준비', label: '노후준비', desc: '은퇴·연금 설계' },
      { value: '세무컨설팅', label: '세무컨설팅', desc: '절세 전략' },
      { value: '종합상담', label: '종합 상담', desc: '전체적으로 점검' },
    ],
  },
  {
    key: 'method',
    title: '상담은 어떻게\n받으시겠어요?',
    sub: '편한 상담 방식을 골라 주세요',
    // 일러스트: 전화/방문/화상을 상징하는 3D 아이콘
    image: 'consult-method.png',
    options: [
      { value: '전화상담', label: '전화 상담', desc: '가장 빠르고 간편하게' },
      { value: '방문상담', label: '방문 상담', desc: '설계사가 직접 방문' },
      { value: '화상상담', label: '화상 상담', desc: '집에서 편하게 비대면' },
    ],
  },
  {
    key: 'time',
    title: '언제 상담받기\n편하세요?',
    sub: '희망하는 시간대를 선택해 주세요',
    // 일러스트: 시계/달력 느낌의 3D 아이콘
    image: 'consult-time.png',
    options: [
      { value: '평일 오전', label: '평일 오전', desc: '09:00 – 12:00' },
      { value: '평일 오후', label: '평일 오후', desc: '12:00 – 18:00' },
      { value: '평일 저녁', label: '평일 저녁', desc: '18:00 – 21:00' },
      { value: '주말', label: '주말', desc: '토·일 상담 가능' },
    ],
  },
]

const TOTAL = STEPS.length + 1 // 선택 3단계 + 정보입력 1단계

const BENEFITS = [
  '상담은 100% 무료예요',
  '전문 설계사가 직접 연락드려요',
  '부담 없는 비대면 상담도 가능해요',
]

/* 상담 신청 동의 항목 (개인정보보호법·신용정보법 기준 표준 양식)
 * ⚠️ 실제 운영 전 법무/컴플라이언스 검토 및 회사 정보(법인명·보유기간 등) 확정 필요 */
const CONSENTS = [
  {
    key: 'privacy',
    required: true,
    label: '개인정보 수집·이용 동의',
    body: `• 수집 항목: 성명, 연락처, 상담 희망 분야·방식·시간대
• 수집·이용 목적: 보험·금융 상담 신청 접수 및 상담 진행, 본인 확인 및 연락
• 보유·이용 기간: 상담 완료 후 지체 없이 파기 (관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관)
• 귀하는 동의를 거부할 권리가 있으며, 거부 시 상담 신청 접수가 제한될 수 있습니다.`,
  },
  {
    key: 'credit',
    required: true,
    label: '개인(신용)정보 수집·이용 동의',
    body: `「신용정보의 이용 및 보호에 관한 법률」에 따라 맞춤형 보장분석·자산설계 상담을 위해 동의를 받습니다.
• 수집 항목: 상담 과정에서 본인이 제공하는 보험 가입내역, 소득·자산 등 금융거래 관련 정보
• 이용 목적: 보장분석, 자산·노후 설계 등 맞춤형 상담 제공
• 보유·이용 기간: 상담 종료 후 즉시 파기
• 동의를 거부할 수 있으나, 거부 시 맞춤형 분석 상담이 제한될 수 있습니다.`,
  },
  {
    key: 'thirdParty',
    required: true,
    label: '개인정보 제3자 제공 동의',
    body: `• 제공받는 자: 삼성화재해상보험(주) 및 한케어 금융파트너스 소속 위촉 보험설계사
• 제공 목적: 보험·금융 상담 및 계약 체결·유지 관리
• 제공 항목: 성명, 연락처, 상담 신청 내용
• 보유·이용 기간: 제공 목적 달성 시까지 (관계 법령에 따른 보존기간 포함)
• 귀하는 동의를 거부할 권리가 있으며, 거부 시 상담 연계가 제한될 수 있습니다.`,
  },
  {
    key: 'marketing',
    required: false,
    label: '마케팅·홍보 활용 동의',
    body: `• 활용 목적: 신규 상품·서비스 안내, 이벤트·혜택 등 정보 제공
• 수신 방법: 전화, 문자(SMS/MMS), 이메일 등
• 보유·이용 기간: 동의 철회 시까지
• 선택 항목으로, 동의하지 않아도 상담 신청이 가능합니다.`,
  },
]

const REQUIRED_CONSENTS = CONSENTS.filter((c) => c.required).map((c) => c.key)
const emptyConsents = () => Object.fromEntries(CONSENTS.map((c) => [c.key, false]))

/* ------------------------------------------------------------------ *
 * 그림 자리 placeholder
 * ------------------------------------------------------------------ */
function ImageSlot({ name }) {
  return (
    <div className="mx-auto mb-5 flex h-28 w-full max-w-[200px] flex-col items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-brand-200 bg-brand-50/50 text-center">
      <span className="text-2xl">🖼️</span>
      <span className="px-2 text-[11px] font-semibold text-brand-700/70">
        이미지 자리
        <br />
        <code className="text-[10px]">/src/image/{name}</code>
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * 모달 본체
 * ------------------------------------------------------------------ */
function ConsultModal({ open, onClose }) {
  const [step, setStep] = useState(0) // 0~2: 선택 / 3: 정보입력
  const [answers, setAnswers] = useState({})
  const [form, setForm] = useState({ name: '', phone: '', memo: '', consents: emptyConsents() })
  const [done, setDone] = useState(false)

  // 열릴 때 초기화 + 바디 스크롤 잠금 + ESC 닫기
  useEffect(() => {
    if (!open) return
    setStep(0)
    setAnswers({})
    setForm({ name: '', phone: '', memo: '', agree: false })
    setDone(false)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  const isForm = step === STEPS.length
  const progress = done ? 100 : Math.round(((step + 1) / TOTAL) * 100)

  const select = (key, value) => {
    setAnswers((a) => ({ ...a, [key]: value }))
    // 선택 후 다음 단계로 자동 전환 (게이지 차오름)
    window.setTimeout(() => setStep((s) => s + 1), 220)
  }

  const goBack = () => setStep((s) => Math.max(0, s - 1))

  const formValid =
    form.name.trim() &&
    form.phone.trim() &&
    REQUIRED_CONSENTS.every((k) => form.consents[k])

  const submit = (e) => {
    e.preventDefault()
    if (!formValid) return
    // 실제 전송 연동 자리 (현재는 완료 화면 표시)
    setDone(true)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/45 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-md flex-col overflow-hidden rounded-t-[28px] bg-white shadow-2xl sm:rounded-[28px]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* 진행 게이지바 */}
        <div className="h-1.5 w-full bg-brand-50">
          <div
            className="h-full rounded-r-full bg-gradient-to-r from-brand to-lime-point transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* 상단 바: 뒤로 / 단계표시 / 닫기 */}
        <div className="flex items-center justify-between px-5 pt-4">
          {step > 0 && !done ? (
            <button
              type="button"
              onClick={goBack}
              aria-label="이전"
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 6 9 12l6 6" />
              </svg>
            </button>
          ) : (
            <span className="h-9 w-9" />
          )}

          {!done && (
            <span className="text-xs font-semibold text-slate-400">
              {step + 1} / {TOTAL}
            </span>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        {/* 본문 (스크롤 영역) */}
        <div className="flex-1 overflow-y-auto px-5 pb-2 pt-2">
          {done ? (
            <DoneView answers={answers} form={form} />
          ) : isForm ? (
            <FormView form={form} setForm={setForm} answers={answers} onSubmit={submit} />
          ) : (
            <SelectView
              stepData={STEPS[step]}
              selected={answers[STEPS[step].key]}
              onSelect={(v) => select(STEPS[step].key, v)}
              showBenefits={step === 0}
            />
          )}
        </div>

        {/* 하단 고정 버튼 영역 */}
        <div className="border-t border-slate-100 px-5 pb-5 pt-4">
          {done ? (
            <button type="button" onClick={onClose} className="cta-green">
              확인
            </button>
          ) : isForm ? (
            <button
              type="submit"
              form="consult-form"
              disabled={!formValid}
              className="cta-green disabled:cursor-not-allowed disabled:opacity-40"
            >
              무료 상담 신청하기
              <ArrowUpRight size={18} />
            </button>
          ) : (
            <p className="text-center text-xs text-slate-400">
              항목을 선택하면 다음 단계로 넘어가요
            </p>
          )}

          <div className="mt-3 flex justify-between text-[11px] text-slate-400">
            <span>이용약관 및 개인정보처리방침</span>
            <span>상담 문의 1881-8559</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * 선택 단계 뷰
 * ------------------------------------------------------------------ */
function SelectView({ stepData, selected, onSelect, showBenefits }) {
  return (
    <div>
      <ImageSlot name={stepData.image} />

      <h2 className="whitespace-pre-line text-center text-2xl font-extrabold leading-tight tracking-tight">
        {stepData.title}
      </h2>
      <p className="mt-2 text-center text-sm text-slate-500">{stepData.sub}</p>

      <div className="mt-6 space-y-3">
        {stepData.options.map((opt) => {
          const active = selected === opt.value
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onSelect(opt.value)}
              className={`relative flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left transition ${
                active
                  ? 'border-brand bg-brand-50'
                  : 'border-slate-200 bg-white hover:border-brand-200'
              }`}
            >
              {opt.recommend && (
                <span className="absolute -top-2.5 left-4 rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold text-white shadow-glow">
                  추천 🎉
                </span>
              )}
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
                  active ? 'border-brand bg-brand' : 'border-slate-300 bg-white'
                }`}
              >
                {active && <span className="h-2 w-2 rounded-full bg-white" />}
              </span>
              <span className="flex-1">
                <span className="block text-base font-bold text-slate-900">{opt.label}</span>
                <span className="block text-xs text-slate-500">{opt.desc}</span>
              </span>
            </button>
          )
        })}
      </div>

      {showBenefits && (
        <ul className="mt-6 space-y-2.5">
          {BENEFITS.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <CheckCircle />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * 정보 입력 단계 뷰
 * ------------------------------------------------------------------ */
function FormView({ form, setForm, answers, onSubmit }) {
  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  return (
    <div>
      <h2 className="text-center text-2xl font-extrabold leading-tight tracking-tight">
        신청 정보를
        <br />
        입력해 주세요
      </h2>
      <p className="mt-2 text-center text-sm text-slate-500">
        입력해 주신 연락처로 설계사가 연락드려요
      </p>

      {/* 선택 요약 */}
      <div className="mt-5 flex flex-wrap justify-center gap-1.5">
        {Object.entries(answers).map(([, v]) => (
          <span key={v} className="chip">
            {v}
          </span>
        ))}
      </div>

      <form id="consult-form" onSubmit={onSubmit} className="mt-6 space-y-4">
        <Field label="이름" required>
          <input
            type="text"
            value={form.name}
            onChange={set('name')}
            placeholder="홍길동"
            className="form-input"
          />
        </Field>

        <Field label="연락처" required>
          <input
            type="tel"
            value={form.phone}
            onChange={set('phone')}
            placeholder="010-0000-0000"
            inputMode="numeric"
            className="form-input"
          />
        </Field>

        <Field label="추가로 남기실 메모 (선택)">
          <textarea
            value={form.memo}
            onChange={set('memo')}
            rows={3}
            placeholder="궁금한 점이나 상담받고 싶은 내용을 적어주세요"
            className="form-input resize-none"
          />
        </Field>

        <label className="flex cursor-pointer items-start gap-2.5 rounded-2xl bg-brand-50/60 p-3.5">
          <input
            type="checkbox"
            checked={form.agree}
            onChange={set('agree')}
            className="mt-0.5 h-5 w-5 shrink-0 accent-brand"
          />
          <span className="text-xs leading-relaxed text-slate-600">
            <b className="text-slate-800">[필수]</b> 개인정보 수집·이용에 동의합니다. 수집한 정보는
            상담 목적으로만 사용되며 상담 완료 후 파기됩니다.
          </span>
        </label>
      </form>
    </div>
  )
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="ml-0.5 text-brand">*</span>}
      </span>
      {children}
    </label>
  )
}

/* ------------------------------------------------------------------ *
 * 완료 화면
 * ------------------------------------------------------------------ */
function DoneView({ answers, form }) {
  return (
    <div className="py-6 text-center">
      {/* 완료 일러스트 자리 */}
      <ImageSlot name="consult-done.png" />
      <h2 className="text-2xl font-extrabold tracking-tight">
        신청이 <span className="text-brand">완료</span>되었어요!
      </h2>
      <p className="mt-2 text-sm text-slate-500">
        <b className="text-slate-800">{form.name}</b>님, 빠른 시일 내에
        <br />
        <b className="text-brand-700">{form.phone}</b> 로 연락드릴게요.
      </p>
      <div className="mx-auto mt-5 max-w-xs space-y-2 rounded-2xl bg-brand-50/60 p-4 text-left text-sm">
        {Object.entries(answers).map(([, v]) => (
          <div key={v} className="flex items-center gap-2 text-slate-700">
            <CheckCircle />
            <span className="font-semibold">{v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CheckCircle() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
}
