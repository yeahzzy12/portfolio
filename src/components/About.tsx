import { motion } from "framer-motion";

const strengths = [
  {
    icon: "📊",
    title: "데이터 시각화",
    desc: "uPlot으로 10만 데이터 포인트 실시간 렌더링. 수치가 아닌 '즉각적인 상태 인지'를 목표로 설계합니다.",
  },
  {
    icon: "🧩",
    title: "재사용 가능한 구조 설계",
    desc: "공통 컴포넌트 라이브러리, JSON 기반 공통 모듈 등 이후 화면 추가에도 확장 가능한 구조를 먼저 생각합니다.",
  },
  {
    icon: "🔗",
    title: "백엔드를 넘나드는 협업",
    desc: "Node-RED, PostgreSQL, Python을 직접 다루며 API 설계 단계부터 프론트엔드 관점을 제시합니다.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-cyan-600 dark:text-cyan-400 text-sm mb-2 tracking-widest uppercase">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">
            내부 사용자의 업무 흐름을 <br className="hidden md:block" />
            깊이 이해하는 개발자입니다.
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {strengths.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 transition-colors cursor-default shadow-sm dark:shadow-none"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-slate-900 dark:text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
