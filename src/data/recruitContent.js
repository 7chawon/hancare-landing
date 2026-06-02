/* 설계사 채용 콘텐츠 데이터
 * - 각 글(article)은 고유 slug 로 /recruit/:slug 상세 페이지에 매핑됩니다.
 * - shortsId: YouTube 쇼츠/영상 ID (예: 'dQw4w9WgXcQ'). 비워두면 영상 자리 placeholder 표시.
 * - image: /src/image/ 에 저장할 파일명 (현재는 placeholder 로 표시)
 */

export const TAB_LABELS = {
  about: '파트너스 알아보기',
  guide: '지원 & 교육',
  review: '합격 후기',
}

export const TAB_ORDER = ['about', 'guide', 'review']

export const ARTICLES = [
  {
    slug: 'income-cases',
    tab: 'about',
    title: '파트너스 수익 사례 모음.zip',
    summary:
      '한케어 파트너스가 가장 많이 받는 질문, "정말 벌 수 있나요?" 실제 활동 중인 설계사들의 수익 구조와 사례를 한눈에 모았습니다.',
    image: 'recruit-about-1.png',
    bg: 'from-violet-200 to-violet-100',
    shortsId: '',
    body: [
      '한케어 파트너스로 활동하면 어느 정도 수입을 기대할 수 있을까요? 가장 많이 받는 질문이자, 가장 솔직하게 답해드리고 싶은 주제입니다.',
      '파트너스의 수익은 기본 활동 지원금과 상담·계약에 따른 성과 보상으로 구성됩니다. 노력한 만큼 정직하게 보상받는 구조라, 활동 기간이 쌓일수록 안정적인 수입으로 이어집니다.',
      '아래 쇼츠 영상에서 실제 파트너스들의 수익 사례와 구조를 확인해 보세요.',
    ],
  },
  {
    slug: 'partner-job',
    tab: 'about',
    title: '파트너스는 이런 일을 해요',
    summary:
      '고객의 보장을 분석하고 맞춤 설계를 제안하는 금융 전문가. 한케어 파트너스의 하루 일과를 소개합니다.',
    image: 'recruit-about-2.png',
    bg: 'from-brand-100 to-lime-soft',
    shortsId: '',
    body: [
      '파트너스는 단순히 보험을 권유하는 일이 아닙니다. 고객의 현재 보장을 진단하고, 부족하거나 중복된 부분을 찾아 가장 합리적인 설계를 제안하는 금융 파트너입니다.',
      '상담 예약, 보장 분석, 맞춤 설계 제안, 가입 후 사후관리까지. 한 분 한 분의 평생 금융을 함께하는 보람 있는 일입니다.',
    ],
  },
  {
    slug: 'education',
    tab: 'guide',
    title: '신입도 전문가로, 체계적인 교육',
    summary:
      '보험·금융 지식이 없어도 괜찮아요. 입사 후 단계별 온보딩 교육과 1:1 멘토링으로 전문가로 성장합니다.',
    image: 'recruit-guide-1.png',
    bg: 'from-sky-200 to-sky-100',
    shortsId: '',
    body: [
      '"전공자가 아니어도 될까요?" 걱정하지 마세요. 한케어는 신입도 전문가로 성장할 수 있도록 체계적인 교육 과정을 제공합니다.',
      '기초 금융 지식부터 실전 상담 스킬까지 단계별 커리큘럼으로 배우고, 선배 파트너스의 1:1 멘토링으로 빠르게 현장에 적응합니다.',
    ],
  },
  {
    slug: 'process',
    tab: 'guide',
    title: '지원부터 활동까지, 단 4단계',
    summary:
      '입사 지원 → 상담 면접 → 교육 수료 → 활동 시작. 복잡한 절차 없이 새로운 커리어를 시작하세요.',
    image: 'recruit-guide-2.png',
    bg: 'from-brand-100 to-emerald-50',
    shortsId: '',
    body: [
      '한케어 파트너스 지원은 간단합니다. ① 입사 지원 → ② 편안한 분위기의 1:1 상담 면접 → ③ 온보딩 교육 수료 → ④ 전문 설계사로 활동 시작.',
      '학력·경력에 관계없이 도전할 수 있으며, 지원 후 담당자가 직접 연락드려 절차를 친절하게 안내해 드립니다.',
    ],
  },
  {
    slug: 'partner-story',
    tab: 'review',
    title: '먼저 시작한 파트너스의 이야기',
    summary:
      '"육아와 병행하면서도 안정적인 수입을 얻고 있어요." 실제 한케어 파트너스들의 생생한 후기를 확인하세요.',
    image: 'recruit-review-1.png',
    bg: 'from-amber-200 to-amber-100',
    shortsId: '',
    body: [
      '"내 시간을 스스로 설계할 수 있다는 게 가장 큰 장점이에요." 육아와 일을 병행하는 파트너스부터, 제2의 커리어로 시작한 분까지.',
      '서로 다른 출발점에서 시작했지만, 한케어에서 안정적으로 자리잡은 파트너스들의 진짜 이야기를 들어보세요.',
    ],
  },
  {
    slug: 'why-hancare',
    tab: 'review',
    title: '한케어를 선택한 이유',
    summary:
      '업계 최고 수준의 수수료와 든든한 영업 지원. 파트너스들이 한케어에 정착한 이유를 들어보세요.',
    image: 'recruit-review-2.png',
    bg: 'from-rose-200 to-rose-100',
    shortsId: '',
    body: [
      '여러 회사를 비교한 끝에 한케어를 선택한 파트너스들. 그 이유는 정직한 보상 구조와 끝까지 함께하는 지원 시스템이었습니다.',
      'DB·마케팅·전산 지원부터 체계적인 교육까지, 파트너스가 영업에만 집중할 수 있는 환경을 제공합니다.',
    ],
  },
]

export function getArticle(slug) {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getByTab(tab) {
  return ARTICLES.filter((a) => a.tab === tab)
}

// 현재 글을 제외한 나머지(같은 탭 우선)에서 관련 글 추천
export function getRelated(slug, count = 4) {
  const cur = getArticle(slug)
  if (!cur) return ARTICLES.slice(0, count)
  const sameTab = ARTICLES.filter((a) => a.slug !== slug && a.tab === cur.tab)
  const others = ARTICLES.filter((a) => a.slug !== slug && a.tab !== cur.tab)
  return [...sameTab, ...others].slice(0, count)
}
