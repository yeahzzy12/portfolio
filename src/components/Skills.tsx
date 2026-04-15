import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Vue.js 2/3", "TypeScript", "JavaScript"],
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-cyan-400 text-sm mb-2 tracking-widest uppercase">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">기술 스택</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
