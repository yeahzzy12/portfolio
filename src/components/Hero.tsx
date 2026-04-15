import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-14">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-cyan-400 text-sm mb-4 tracking-widest uppercase">
            Frontend Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            데이터를 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              읽히게
            </span>{" "}
            만드는 <br />
            개발자
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            5년간 IoT 모니터링 대시보드와 내부 운영 시스템을 구축했습니다.
            <br />
            Vue.js · React · TypeScript로 복잡한 데이터를 명확한 인터페이스로 만듭니다.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors text-sm"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-lg transition-colors text-sm"
            >
              연락하기
            </a>
          </div>
        </motion.div>

        {/* 장식용 그리드 라인 */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
