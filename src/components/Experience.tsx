import { motion } from "framer-motion";

const career = [
  {
    company: "(주)트웬티온스",
    items: [
      { period: "2022.10 — 2026.04", role: "프론트엔드 개발자", type: "정직원" },
      { period: "2021.02 — 2022.09", role: "프론트엔드 개발자", type: "프리랜서" },
      { period: "2020.09 — 2021.02", role: "프론트엔드 개발자", type: "인턴" },
    ],
  },
];

const education = [
  { period: "2018.03 — 2022.08", school: "경희대학교", major: "컴퓨터공학과 졸업" },
];

const typeColor: Record<string, string> = {
  정직원: "bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
  프리랜서: "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  인턴: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600",
};

const ease = "easeOut" as const;

const timelineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const timelineItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const dotVariant = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { duration: 0.3 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <p className="font-mono text-cyan-600 dark:text-cyan-400 text-sm mb-2 tracking-widest uppercase">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">경력 및 학력</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 경력 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Career</p>
            {career.map((c) => (
              <div key={c.company}>
                <p className="text-slate-900 dark:text-white font-semibold mb-4">{c.company}</p>
                <motion.div
                  className="relative border-l border-slate-200 dark:border-slate-700 pl-5 space-y-5"
                  variants={timelineContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {c.items.map((item) => (
                    <motion.div key={item.period} variants={timelineItem} className="relative">
                      <motion.span
                        variants={dotVariant}
                        className="absolute -left-5 -translate-x-1/2 top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-500/60 border-2 border-cyan-500"
                      />
                      <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-1">{item.period}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-slate-700 dark:text-slate-200 text-sm">{item.role}</p>
                        <span className={`text-xs px-2 py-0.5 border rounded-full ${typeColor[item.type]}`}>
                          {item.type}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* 학력 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Education</p>
            <motion.div
              className="relative border-l border-slate-200 dark:border-slate-700 pl-5 space-y-5"
              variants={timelineContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {education.map((e) => (
                <motion.div key={e.period} variants={timelineItem} className="relative">
                  <motion.span
                    variants={dotVariant}
                    className="absolute -left-5 -translate-x-1/2 top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-500/60 border-2 border-cyan-500"
                  />
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-1">{e.period}</p>
                  <p className="text-slate-900 dark:text-slate-200 text-sm font-semibold">{e.school}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{e.major}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
