export interface Project {
  id: string
  number: string

  title: string
  period: string
  role: string

  category: string
  headline: string
  description: string

  images?: string[]

  works: string[]
  achievements: string[]

  metric?: string
  metricLabel?: string

  technologies: string[]
}

export const projects: Project[] = [
  {
    id: 'viven',
    number: '01',

    title: 'Viven 메타버스 VR 크로스 플랫폼',
    period: '2026.03 — 2026.04',
    role: 'Frontend Developer',

    category: 'REACT · AI · REAL-TIME',

    headline:
      '기획부터 개발 서버 배포까지 서비스 전 과정을 직접 수행하다.',

    description:
      '기획자·디자이너 없이 화면 설계부터 프론트엔드 및 관리자 콘솔 개발까지 전 과정을 담당한 메타버스 VR 크로스 플랫폼입니다.',

    // 가지고 있는 이미지만 추가
    // images: [
    //   '/projects/viven/admin.png',
    //   '/projects/viven/video.png',
    //   '/projects/viven/screenshare.png',
    // ],

    works: [
      '기획자·디자이너 없이 화면 설계부터 프론트엔드 및 관리자 콘솔 개발까지 전 과정 담당',
      '방·서버·상점·콘텐츠 CRUD 및 콘텐츠 심사 프로세스를 포함한 관리자 기능 설계·구현',
      'LiveKit SDK를 활용한 화상통화 및 스크린 공유 기능 구현',
      'Supabase와 NestJS를 활용해 데이터 및 백엔드 영역까지 개발 범위 확장',
      'Claude Code 등 AI 도구를 기획·설계·코드 작성·문서화·테스트 과정에 활용',
    ],

    achievements: [
      '기획 및 화면 설계부터 개발 서버 배포까지 2개월 내 완료',
      '최대 30명 동시 접속 가능한 실시간 협업 환경 구현',
    ],

    metric: '30',
    metricLabel: 'Concurrent Users',

    technologies: [
      'React',
      'TypeScript',
      'LiveKit SDK',
      'Supabase',
      'NestJS',
      'Claude Code',
    ],
  },

  {
    id: 'kdis',
    number: '02',

    title: 'KDIS 전자출결 및 결재 관리 시스템',
    period: '2025.07 — 2026.01',
    role: 'PL · Frontend Developer',

    category: 'PL · PRODUCT · WORKFLOW',

    headline:
      '요구사항 구현을 넘어 실제 업무 프로세스 자체를 개선하다.',

    description:
      '관리자·교수·학생 등 사용자별 전자출결과 결재 업무를 지원하는 시스템으로, PL과 프론트엔드 개발을 함께 담당했습니다.',

    images: [
      '/projects/kdis/pc.png',
      '/projects/kdis/kiosk.png',
    ],

    works: [
      'PL로서 요구사항 정의·화면 기획·일정 관리·고객사 미팅·개발·오픈 대응까지 프로젝트 전 과정 주도',
      '사용자 역할별 접근 권한과 업무 흐름을 고려한 화면 및 데이터 구조 설계',
      '기존 메일·대면 방식으로 처리되던 학생 요청 업무를 시스템 내 결재 프로세스로 구현',
      '시나리오 기반 테스트 시트를 설계하고 3차 단계별 검증을 통해 기능 및 예외 상황 점검',
      '결재 취소 과정의 복잡한 예외 처리와 반복 개발 가능성을 분석하고 업무 프로세스를 단순화하는 개선안 설계·제안',
      '기획 문서·최종 보고서·시스템 매뉴얼 등 프로젝트 문서 작성 과정에 AI 도구 활용',
    ],

    achievements: [
      '학생 요청 업무를 시스템 내 결재 기능으로 일원화해 관리자·조교 업무 효율 개선',
      '결재 취소 프로세스 개선으로 해당 기능 예상 개발 공수를 기존 대비 약 1/3 수준으로 절감',
      '요구사항 정의부터 개발·검증·오픈까지 7개월간 프로젝트 전 과정 수행',
    ],

    metric: '≈ 1/3',
    metricLabel: 'Development Effort',

    technologies: [
      'Vue.js',
      'TypeScript',
      'Spring',
      'Figma',
    ],
  },

  {
    id: 'gwacheon',
    number: '03',

    title: '과천 데이터센터 통합 모니터링 시스템 (DCIM)',
    period: '2024.06 — 2025.05',
    role: 'Frontend Developer',

    category: 'DCIM · MONITORING · OPERATION',

    headline:
      '복잡한 데이터센터 설비와 운영 정보를 하나의 시스템에서 관리하다.',

    description:
      'UPS·비상발전기·부스덕트·PDU 등 수십 종의 설비와 고객사·랙·상면·계약정보를 통합 관리하는 데이터센터 모니터링 시스템입니다.',

    // images: [
    //   '/projects/gwacheon/dashboard.png',
    //   '/projects/gwacheon/admin.png',
    // ],

    works: [
      '수십 종 설비를 통합 관제하는 실시간 모니터링 대시보드 및 관리자 시스템 개발',
      '정상·경고·위험 상태를 빠르게 파악할 수 있도록 설비별 상태 표현과 시각화 UI 체계 설계',
      '고객사·랙·상면·계약정보 등 운영 데이터를 관리하는 관리자 화면 및 다단계 연관 폼 개발',
      'Pinia 기반 상태 관리 구조를 설계해 복잡한 화면 간 데이터 의존성과 수정 흐름 단순화',
      '라이브러리 미지원 요구사항을 구현하기 위해 내부 구조를 분석하고 커스텀 렌더링 모듈 구현',
      'PostgreSQL 데이터 구조를 분석하고 엑셀 기반 대량 데이터 등록용 쿼리 서식 설계',
    ],

    achievements: [
      '실시간 모니터링 대시보드 및 관리자 시스템을 포함한 총 24개 화면 구축',
      '1년간 시스템 개발과 운영 유지보수를 수행하며 지속적인 요구사항 변경 및 운영 이슈 대응',
      '운영 편의성과 납품 품질을 인정받아 후속 프로젝트 수주로 연결',
    ],

    metric: '24',
    metricLabel: 'Screens Built',

    technologies: [
      'Vue.js',
      'TypeScript',
      'Pinia',
      'ECharts',
      'Wijmo Grid',
      'PostgreSQL',
    ],
  },

  {
    id: 'gaksejong',
    number: '04',

    title: 'N사 각세종 데이터센터 통합 모니터링 시스템',
    period: '2023.05 — 2024.04',
    role: 'Frontend Developer',

    category: 'PERFORMANCE · ARCHITECTURE · DCIM',

    headline:
      '대용량 실시간 데이터의 렌더링 한계를 개선하다.',

    description:
      '태그 10만 개 이상, 설비 10종, 24개 화면 규모의 실시간 데이터 모니터링 시스템입니다.',

    // 예시: 여러 장이면 가로 스크롤
    images: [
      '/projects/gaksejong/dashboard.png',
      
    ],

    works: [
      '태그 10만 개 이상, 설비 10종, 24개 화면 규모의 실시간 데이터 모니터링 시스템 프론트엔드 개발',
      '대용량 데이터 조회 시 발생하는 ECharts 렌더링 성능 문제를 분석하고 Canvas 기반 uPlot으로 전환',
      'uPlot 내부 구조를 분석해 기존 차트와 동일한 인터페이스로 사용할 수 있는 공통 차트 모듈 구현',
      '화면별 중복 API 호출로 서버 부하가 누적되는 문제를 분석하고 JSON 기반 화면 정의 구조 설계',
      'JSON 정의에서 필요한 태그를 자동 추출해 단일 API로 조회하도록 데이터 처리 구조 개선',
      'Pinia 기반 상태 관리 구조를 적용해 실시간 데이터와 차트 상태 관리',
    ],

    achievements: [
      '대용량 차트 렌더링 범위를 기존 1만 건 수준에서 10만 건 이상으로 개선',
      '화면별 중복 API 호출을 단일 호출 구조로 개선해 불필요한 데이터 요청 감소',
      '신규 화면 추가 시 JSON 정의만으로 기존 구조를 재사용할 수 있도록 개발 방식 표준화',
      '공통 차트 모듈 도입으로 신규 화면 적용 및 유지보수 부담 감소',
    ],

    metric: '10K → 100K+',
    metricLabel: 'Renderable Data Points',

    technologies: [
      'Vue.js',
      'TypeScript',
      'Pinia',
      'uPlot',
      'ECharts',
      'Wijmo Grid',
    ],
  },

  {
    id: 'component-library',
    number: '05',

    title: '사내 공통 컴포넌트 라이브러리 구축',
    period: '2022.11 — 2023.02',
    role: 'Frontend Developer · Lead',

    category: 'DESIGN SYSTEM · REUSABILITY',

    headline:
      '반복 개발을 줄이고 프로젝트 간 개발 방식을 표준화하다.',

    description:
      '7인 개발팀에서 프로젝트마다 반복되던 UI와 저장·조회 로직을 공통화하기 위해 구축한 사내 컴포넌트 라이브러리입니다.',

    works: [
      '프로젝트별 코드 스타일 및 구현 방식 불일치 문제를 개선하기 위해 공통 컴포넌트 라이브러리 설계 주도',
      'Ant Design을 래핑한 공통 UI 구조를 설계해 프로젝트 간 일관성 확보',
      '차트·테이블·폼 등 반복적으로 사용되는 UI 및 기능을 공통 컴포넌트로 개발',
      'API 엔드포인트·초기 데이터·폼 정의만 설정하면 저장·조회 로직을 공통 처리할 수 있는 구조 설계',
    ],

    achievements: [
      '프로젝트마다 반복적으로 구현하던 공통 UI 및 저장·조회 로직을 재사용 가능한 구조로 표준화',
      '반복 개발 부담을 줄여 화면별 비즈니스 로직 개발에 집중할 수 있는 환경 구축',
      '공통 컴포넌트 재사용을 통해 신규 화면 개발 및 유지보수 효율 개선',
    ],

    technologies: [
      'Vue.js',
      'TypeScript',
      'Ant Design',
    ],
  },

  {
    id: 'conster',
    number: '06',

    title: 'Conster - IoT 기반 설비 데이터 수집 모니터링 플랫폼',
    period: '2022.10 — 2025.01',
    role: 'Frontend Developer',

    category: 'MIGRATION · PERFORMANCE · IOT',

    headline:
      '장기 운영 서비스의 기술 전환과 성능 개선을 경험하다.',

    description:
      'IoT 설비 데이터를 수집·조회·관리하는 모니터링 플랫폼으로 약 2년 3개월간 개발과 운영에 참여했습니다.',

    // images: [
    //   '/projects/conster/main.png',
    // ],

    works: [
      'IoT 설비 데이터를 수집·조회·관리하는 모니터링 플랫폼의 프론트엔드 개발 및 장기 운영 참여',
      'Vue.js 2 기반 초기 시스템부터 Vue.js 3 및 React로의 순차적인 마이그레이션 수행',
      '프레임워크 전환 과정에서 기존 기능을 유지하며 컴포넌트 구조와 상태 관리 방식 개선',
      '히스토리안 3단계 depth 중첩 수정 화면에서 변경 사항을 관리하고 최종 저장 시 일괄 처리하는 상태 관리 구조 설계',
      'rollup-plugin-visualizer로 번들 구조를 분석하고 용량이 큰 라이브러리를 경량 라이브러리로 교체',
      'Vite manualChunks를 적용해 라이브러리별 청크를 분리하고 캐시 활용 및 초기 로딩 구조 개선',
    ],

    achievements: [
      '약 2년 3개월간 플랫폼 개발 및 운영에 참여하며 장기적인 기능 개선과 유지보수 경험 확보',
      'Vue.js 2 → Vue.js 3 → React 마이그레이션을 수행하며 기존 서비스의 단계적인 기술 전환 경험',
      '번들 최적화 및 청크 분리를 통해 캐시 효율과 초기 로딩 성능 개선',
    ],

    metric: '2 → 3 → React',
    metricLabel: 'Framework Migration',

    technologies: [
      'Vue.js 2',
      'Vue.js 3',
      'React',
      'TypeScript',
      'Pinia',
      'Vite',
    ],
  },
]