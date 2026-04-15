import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Vue.js 2/3", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    label: "Data Visualization",
    skills: ["uPlot", "ECharts", "Wijmo Grid"],
  },
  {
    label: "Tools & Others",
    skills: ["Node-RED", "PostgreSQL", "Python", "Git"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const tagVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="font-mono text-cyan-600 dark:text-cyan-400 text-sm mb-2 tracking-widest uppercase">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">기술 스택</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                {group.label}
              </p>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariant}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-700 dark:text-slate-300 cursor-default shadow-sm dark:shadow-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
