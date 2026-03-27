const calcs = [
  { group: '💼 직장인', code: 'RW', sub: 'RW · 근로소득자', badgeClass: 'badge-rw', items: [
    { id: 'RW-001', name: '실수령액 계산기', desc: '연봉 입력 → 4대보험·소득세 공제 후 실제 받는 월급 계산' },
    { id: 'RW-005', name: '4대보험료 계산기', desc: '국민연금·건강보험·장기요양·고용보험 근로자·사업주 부담분' },
    { id: 'RW-010', name: '퇴직금 계산기', desc: '입사일·퇴사일·평균임금 기준 법정 퇴직금 자동 산출' },
  ]},
  { group: '🏪 사업자', code: 'RS', sub: 'RS·RI·RE · 일반·간이·면세', badgeClass: 'badge-rs', items: [
    { id: 'RS-001', name: '부가가치세 계산기', desc: '공급가액 ↔ 부가세 포함가 양방향 계산' },
    { id: 'RS-002', name: '사업소득세 간편 계산기', desc: '업종·매출 입력 후 종합소득세 예상액 간편 계산' },
    { id: 'RS-003', name: '단순경비율 계산기', desc: '업종코드별 단순경비율 적용 소득금액 자동 계산' },
    { id: 'RI-001', name: '부가세 계산기 (간이과세)', desc: '연매출 1.04억 이하 간이과세자 납부세액 계산' },
    { id: 'RI-002', name: '간이 vs 일반과세 비교', desc: '매출 규모별 유리한 과세 유형 자동 비교' },
  ]},
  { group: '📈 투자자', code: 'RF', sub: 'RF · 금융소득자', badgeClass: 'badge-rf', items: [
    { id: 'RF-001', name: '주식 수익률 계산기', desc: '매수·매도가·수수료 입력 → 수익금액·수익률 계산' },
    { id: 'RF-002', name: '주식 양도소득세 계산기', desc: '대주주·일반 기준 주식 양도차익 세금 계산' },
    { id: 'RF-003', name: '배당수익 계산기', desc: '배당금·세율별 세후 수령액 및 종합과세 판단' },
  ]},
  { group: '📋 종합소득', code: 'RC', sub: 'RC · N잡러·복수소득자', badgeClass: 'badge-rc', items: [
    { id: 'RC-001', name: '종합소득세 간편 계산기', desc: '연 소득·기본공제 인원 입력 → 예상 종합소득세 계산' },
    { id: 'RC-002', name: '프리랜서 세금 계산기 (3.3%)', desc: '수입액 입력 → 원천징수 3.3% 공제 후 실수령액 계산' },
    { id: 'RC-003', name: '원천징수세 계산기', desc: '소득 유형별 원천징수 세율 적용 세액 계산' },
  ]},
  { group: '🏠 부동산', code: 'RG', sub: 'RG · 양도·취득·보유', badgeClass: 'badge-rg', items: [
    { id: 'RG-001', name: '취득세 계산기', desc: '매매가·주택 보유수 입력 → 취득세·지방교육세·농특세 계산' },
    { id: 'RG-002', name: '부동산 양도세 간편 계산기', desc: '취득가·양도가·보유기간 입력 → 양도소득세 간편 산출' },
    { id: 'RG-006', name: '중개수수료 계산기', desc: '거래 유형·금액 입력 → 법정 최대 중개수수료 계산' },
  ]},
  { group: '🛡️ 연금·은퇴', code: 'RP', sub: 'RP · 연금소득자', badgeClass: 'badge-rp', items: [
    { id: 'RP-001', name: '국민연금 수령액 계산기', desc: '납입 기간·평균 소득월액 기준 예상 수령액 계산' },
    { id: 'RP-003', name: '연금저축 세액공제 계산기', desc: '납입액·소득 구간별 13.2% or 16.5% 세액공제 계산' },
    { id: 'RP-004', name: 'IRP 절세 계산기', desc: 'IRP 납입액 세액공제 및 운용 수익 세금 이연 효과 계산' },
  ]},
  { group: '🏢 법인', code: 'CL', sub: 'CL · 내국법인', badgeClass: 'badge-cl', items: [
    { id: 'CL-001', name: '법인세 간편 계산기', desc: '과세표준 입력 → 9%·19%·21%·24% 구간별 법인세 계산' },
    { id: 'CL-002', name: '법인 대표자 실수령액', desc: '대표자 급여 기준 4대보험·소득세 공제 후 실수령액 계산' },
    { id: 'CL-003', name: '창업비용 계산기', desc: '법인 설립 등기·인지세·등록면허세 등 초기 비용 계산' },
  ]},
  { group: '🌿 공통', code: 'GG', sub: 'GG · 대상 무관', badgeClass: 'badge-gg', items: [
    { id: 'GG-001', name: '대출 상환 계산기', desc: '원리금균등·원금균등 방식별 월 납입금·총 이자 계산' },
    { id: 'GG-006', name: '예·적금 이자 계산기', desc: '원금·금리·기간 입력 → 이자소득세 15.4% 공제 후 세후 이자' },
    { id: 'GG-009', name: '환율 계산기', desc: '원화 ↔ 외화 실시간 환율 기반 환산 계산' },
  ]},
]

const proCalcs = [
  { id: 'PRO-1-1-1', name: '종합소득세 신고유형 판단기', sub: '개인납세과 · 소득세과', desc: '소득 유형별 신고 방법 자동 판단' },
  { id: 'PRO-1-3-1', name: '연말정산 정밀 계산기', sub: '개인납세과 · 근로소득', desc: '공제 항목 전체 입력 → 환급·납부세액 정밀 산출' },
  { id: 'PRO-2-1-1', name: '양도소득세 정밀 계산기', sub: '재산세과 · 양도소득', desc: '장특공제·다주택 중과·비과세 요건 반영 정밀 산출' },
  { id: 'PRO-2-1-2', name: '1세대 1주택 비과세 판정기', sub: '재산세과 · 양도소득', desc: '보유·거주기간·일시적 2주택 등 비과세 요건 자동 판정' },
  { id: 'PRO-3-2-1', name: '개인 vs 법인 세금 비교', sub: '법인세과 · 절세 시뮬레이터', desc: '매출·비용 기준 개인사업자와 법인 세부담 총액 비교' },
  { id: 'PRO-6-1', name: '연말정산 환급 최적화', sub: '절세 종합 시뮬레이터', desc: '공제 항목별 추가 납입 시 환급액 역산 · 최적 전략 제안' },
]

const catTabs = [
  { label: '전체', count: 42 }, { label: '직장인', count: 3 }, { label: '사업자', count: 5 },
  { label: '투자자', count: 3 }, { label: '종합소득', count: 3 }, { label: '부동산', count: 3 },
  { label: '연금·은퇴', count: 3 }, { label: '법인', count: 3 }, { label: '공통', count: 3 }, { label: 'PRO', count: 15 },
]

export default function Home() {
  return (
    <>
      <header className="gnb">
        <div className="logo">바로<span className="logo-eq">=</span>셈</div>
        <nav className="gnb-nav">
          <a href="#">계산기</a>
          <a href="#">PRO</a>
          <a href="#">세금 캘린더</a>
          <a href="#">고객센터</a>
        </nav>
        <div className="gnb-actions">
          <button className="btn-login">로그인</button>
          <button className="btn-start">무료 시작</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-badge">2025년 세법 기준 · 매일 업데이트</div>
        <h1>세금, 이제<br /><span>바로 계산</span>하세요</h1>
        <p className="hero-sub">복잡한 세금 계산도 쉽고 빠르게 · 42가지 계산기 무료 제공</p>
        <div className="search-wrap">
          <input type="text" placeholder="계산기 검색 (예: 실수령액, 취득세, 프리랜서)" />
          <button className="search-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EDE8D4" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </div>
        <div className="hero-tags">
          {['실수령액','취득세','프리랜서 3.3%','부가가치세','퇴직금','대출 상환','양도소득세','연말정산'].map(t => (
            <span key={t} className="hero-tag">{t}</span>
          ))}
        </div>
      </section>

      <div className="cat-bar">
        <div className="cat-inner">
          {catTabs.map((t, i) => (
            <div key={t.label} className={`cat-tab${i === 0 ? ' on' : ''}`}>
              {t.label} <span className="cat-count">{t.count}</span>
            </div>
          ))}
        </div>
      </div>

      <main className="main">
        {calcs.map(group => (
          <section key={group.code} className="sec">
            <div className="sec-head">
              <span className="sec-title">{group.group}</span>
              <span className="sec-sub">{group.sub}</span>
              <span className="sec-more">더 보기 →</span>
            </div>
            <div className="cards">
              {group.items.map(c => (
                <a key={c.id} href={`/calc/${c.id.toLowerCase()}`} className="card">
                  <div className="card-top">
                    <span className={`card-badge ${group.badgeClass}`}>{c.id}</span>
                    <span className="card-arrow">→</span>
                  </div>
                  <div className="card-name">{c.name}</div>
                  <div className="card-desc">{c.desc}</div>
                </a>
              ))}
            </div>
          </section>
        ))}

        <div className="divider" />

        <section className="sec">
          <div className="sec-head">
            <span className="sec-title">⚖️ PRO 전문 계산기</span>
            <span className="sec-sub">세무서 부서 구조 기반 · 정밀 계산</span>
            <span className="sec-more">전체 보기 →</span>
          </div>
          <div className="cards">
            {proCalcs.map(c => (
              <a key={c.id} href={`/pro/${c.id.toLowerCase()}`} className="card pro-card">
                <div className="card-top">
                  <span className="card-badge badge-pro">{c.id}</span>
                  <span className="card-arrow">→</span>
                </div>
                <div className="card-name">{c.name}</div>
                <div className="card-id">{c.sub}</div>
                <div className="card-desc">{c.desc}</div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="footer-logo">바로<span className="footer-eq">=</span>셈</div>
          <div className="footer-info">© 2025 바로셈 · barosem.co.kr · 계산 결과는 참고용이며 법적 효력이 없어요</div>
        </div>
        <div className="footer-links">
          <a href="#">이용약관</a>
          <a href="#">개인정보처리방침</a>
          <a href="#">문의하기</a>
        </div>
      </footer>
    </>
  )
}
