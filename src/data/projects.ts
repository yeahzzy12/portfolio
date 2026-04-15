export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: number;
  title: string;
  period: string;
  role: string;
  stack: string[];
  description: string;
  challenge: string;
  solution: string;
  // 이미지가 없는 경우 diagramLabel로 구조도 placeholder 표시
  image?: ProjectImage;
  diagramLabel?: string;
  solo?: boolean;
  pl?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Conster — IoT 기반 설비 데이터 수집 모니터링 플랫폼",
    period: "2020 — 2025",
    role: "프론트엔드 개발",
    stack: ["Vue.js 2", "Vue.js 3", "React", "TypeScript"],
    description:
      "사내 IoT 기반 솔루션으로, 설비·알람·히스토리안·태그 데이터를 수집해 데이터 모니터링 시스템에 제공하는 기반 서비스의 프론트엔드를 담당. Vue.js 2 초기 개발부터 Vue.js 3 마이그레이션, React 마이그레이션까지 순차적으로 진행.",
    challenge:
      "히스토리안 → 테이블 → 필드로 이어지는 3단계 depth 수정 화면이 중첩으로 열리는 구조에서, 상단 헤더의 저장 버튼을 누를 때까지 모든 depth의 변경 내용을 유실 없이 유지해야 했습니다.",
    solution:
      "중첩된 수정 화면 간 상태를 일관성 있게 관리하고, 최종 저장 시점에 전체 변경 사항을 한 번에 처리하는 상태 관리 구조를 설계해 해결했습니다.",
    diagramLabel: "중첩 수정 화면 상태 관리 구조도",
  },
  {
    id: 2,
    title: "사내 공통 컴포넌트 라이브러리 구축",
    period: "2022.11 — 2023.02",
    role: "프론트엔드 개발 주도",
    stack: ["Vue.js", "TypeScript"],
    description:
      "7명의 개발자가 동시에 작업하는 환경에서 코드 스타일 불일치와 중복 구현 문제를 해결하기 위해 사내 전체 프로젝트에 적용되는 공통 컴포넌트 라이브러리를 설계·구축.",
    challenge:
      "5개 화면이 '그룹' 개념을 공유하지만, 각 화면마다 보여지는 형식과 데이터가 달랐습니다. UI 라이브러리(antd) 교체 가능성도 고려해야 했습니다.",
    solution:
      "API 엔드포인트, 초기 콘텐츠(initContent), 폼(form) 세 가지만 정의하면 그룹 저장과 조회가 자동 처리되도록 추상화. antd를 래핑 구조로 설계해 라이브러리 교체 시 내부 구현만 변경하면 되도록 교체 용이성을 확보했습니다.",
    diagramLabel: "공통 컴포넌트 추상화 구조도",
  },
  {
    id: 3,
    title: "N사 각세종 데이터센터 통합 모니터링 시스템",
    period: "2023.05 — 2024.05",
    role: "프론트엔드 개발 (단독)",
    stack: ["Vue.js", "TypeScript", "uPlot", "ECharts", "Wijmo Grid"],
    description:
      "각세종 데이터센터의 전력, 공조, 보안 설비를 통합 관제하는 실시간 모니터링 대시보드. 24개 화면에 걸쳐 100,000개 이상의 태그 데이터를 관리하는 대규모 프로젝트를 프론트엔드 전체 단독 담당.",
    challenge:
      "100,000개 이상의 데이터 포인트를 끊김 없이 실시간 렌더링해야 했고, 각 화면이 동일한 태그 데이터를 개별적으로 API 호출하면서 서버 부하가 누적되는 문제가 있었습니다.",
    solution:
      "WebGL 기반 uPlot을 도입해 대용량 데이터 렌더링 성능을 확보. 화면별 구성 정보를 JSON으로 정의하는 규격을 설계해 필요한 태그를 자동 추출하고 중복 없이 단일 호출하는 공통 모듈을 구현했습니다.",
    solo: true,
    // 여기에 실제 이미지를 추가하세요
    // image: { src: "/images/project3.png", alt: "각세종 데이터센터 모니터링 화면" },
    diagramLabel: "images/project3.png 파일을 public/images/ 폴더에 추가해주세요",
  },
  {
    id: 4,
    title: "과천 데이터센터 통합 모니터링 시스템 (DCIM)",
    period: "2024.06 — 2025.06",
    role: "프론트엔드 개발 (단독)",
    stack: ["Vue.js", "TypeScript", "ECharts", "Wijmo Grid"],
    description:
      "과천 데이터센터의 전력, 환경, 보안 설비를 실시간으로 관제하는 DCIM 시스템 프론트엔드를 단독으로 구축. UPS, 비상발전기, 부스덕트, PDU 등 수십 종의 설비 상태를 하나의 대시보드에 통합.",
    challenge:
      "발주사가 차트 라이브러리 기본 기능에 없는 커스텀 렌더링을 요구했고, 설비 정보 대량 등록 시 UI에서 하나씩 입력하는 방식이 비효율적이었습니다.",
    solution:
      "라이브러리 내부 구조를 직접 분석해 커스텀 렌더링을 구현하고 재사용 가능하도록 모듈화. PostgreSQL 데이터 구조를 직접 분석해 엑셀 기반 대량 등록 쿼리 서식을 설계했습니다.",
    solo: true,
    diagramLabel: "정상·경고·위험 색상 체계 및 레이아웃 구조도",
  },
  {
    id: 5,
    title: "KDIS 전자출결 및 결재 관리 시스템",
    period: "2025.07 — 2026.01",
    role: "PL + 프론트엔드 개발",
    stack: ["React", "TypeScript", "Spring"],
    description:
      "학생, 조교, 교수, 관리자가 사용하는 전자출결 및 결재 관리 시스템 개발을 PL로 주도. 프론트엔드 2명, 백엔드 2명, 총 6인 팀 리드. 요구사항 정의부터 일정 관리, 오픈 대응까지 전 과정 담당.",
    challenge:
      "개발 중반, 이미 승인된 휴·보강 결재 취소 요청이 들어왔습니다. 결재 데이터가 출결 정보와 연결된 구조로 단순 취소 처리 시 데이터 정합성 문제가 발생하고, 구조를 바꾸려면 상당한 공수가 필요한 상황이었습니다.",
    solution:
      "요청의 배경을 먼저 파악해 근본 원인이 '같은 날짜 결재 중복 제출 불가' 제약임을 확인. 결재 취소 대신 출결 정보에서 직접 상태를 변경하는 대안을 제안·구현해, 개발 공수를 예상 대비 1/3로 줄이며 일정 내 납기를 완료했습니다.",
    pl: true,
    // 여기에 실제 이미지를 추가하세요
    // image: { src: "/images/project5.png", alt: "KDIS 전자출결 시스템 화면" },
    diagramLabel: "images/project5.png 파일을 public/images/ 폴더에 추가해주세요",
  },
];
