import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <p className="font-mono text-cyan-600 dark:text-cyan-400 text-sm mb-2 tracking-widest uppercase">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">주요 프로젝트</h2>
        </motion.div>

        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
