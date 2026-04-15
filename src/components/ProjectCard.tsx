import { motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "../data/projects";

type Props = {
  project: Project;
  index: number;
};

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-video bg-slate-100 dark:bg-slate-800 border border-dashed border-slate-300 dark:border-slate-600 rounded-lg flex flex-col items-center justify-center gap-2">
      <svg className="w-8 h-8 text-slate-400 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-xs text-slate-400 dark:text-slate-500 font-mono text-center px-4">{label}</p>
    </div>
  );
}

function ImageCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full h-72 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900">
        <img src={images[current].src} alt={images[current].alt} className="w-full h-full object-contain" />
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors">‹</button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors">›</button>
        <span className="absolute bottom-2 right-3 text-xs text-white/80 font-mono bg-black/40 px-2 py-0.5 rounded">
          {images[current].alt.split("—")[1]?.trim()}
        </span>
      </div>
      <div className="flex justify-center gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-cyan-500 dark:bg-cyan-400" : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"}`}
          />
        ))}
      </div>
    </div>
  );
}

function TextContent({ project, wide }: { project: Project; wide?: boolean }) {
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="text-xs font-mono text-slate-400 dark:text-slate-500">{project.period}</span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{project.title}</h3>
      <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-4">{project.role}</p>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

      <div className={`grid gap-4 ${wide ? "md:grid-cols-2" : ""}`}>
        <div className="bg-amber-50 dark:bg-slate-900 border border-amber-100 dark:border-slate-800 rounded-lg p-4">
          <p className="text-xs font-mono text-amber-600 dark:text-amber-400 mb-1 uppercase tracking-wider">Challenge</p>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{project.challenge}</p>
        </div>
        <div className="bg-cyan-50 dark:bg-slate-900 border border-cyan-100 dark:border-slate-800 rounded-lg p-4">
          <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-1 uppercase tracking-wider">Solution</p>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{project.solution}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.stack.map((tech) => (
          <span key={tech} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md border border-slate-200 dark:border-slate-700">
            {tech}
          </span>
        ))}
      </div>
    </>
  );
}

const ease = "easeOut" as const;

export default function ProjectCard({ project, index }: Props) {
  const isEven = index % 2 === 0;

  if (project.noVisual) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className="py-16 border-b border-slate-200 dark:border-slate-800 last:border-0"
      >
        <TextContent project={project} wide />
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease }}
      className="grid md:grid-cols-2 gap-8 items-start py-16 border-b border-slate-200 dark:border-slate-800 last:border-0"
    >
      <motion.div
        className={isEven ? "md:order-1" : "md:order-2"}
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
      >
        {project.images ? (
          <ImageCarousel images={project.images} />
        ) : project.image ? (
          <img src={project.image.src} alt={project.image.alt}
            className="w-full aspect-video object-cover rounded-lg border border-slate-200 dark:border-slate-700" />
        ) : (
          <ImagePlaceholder label={project.diagramLabel ?? "구조도"} />
        )}
      </motion.div>

      <motion.div
        className={isEven ? "md:order-2" : "md:order-1"}
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.25, ease }}
      >
        <TextContent project={project} />
      </motion.div>
    </motion.article>
  );
}
