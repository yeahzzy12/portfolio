import { motion } from "framer-motion";
import type { Project } from "../data/projects";

type Props = {
  project: Project;
  index: number;
};

function ImagePlaceholder({ label }: { label: string }) {
  const isInstructions = label.includes("public/images");

  return (
    <div className="w-full aspect-video bg-slate-800 border border-dashed border-slate-600 rounded-lg flex flex-col items-center justify-center gap-2">
      {isInstructions ? (
        <>
          <svg
            className="w-8 h-8 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-xs text-slate-500 font-mono text-center px-4">{label}</p>
        </>
      ) : (
        <>
          <svg
            className="w-8 h-8 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
            />
          </svg>
          <p className="text-xs text-slate-500 text-center px-4">{label}</p>
        </>
      )}
    </div>
  );
}

export default function ProjectCard({ project, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-8 items-start py-16 border-b border-slate-800 last:border-0"
    >
      {/* 이미지/다이어그램 영역 — isEven이면 왼쪽, 아니면 오른쪽 */}
      <div className={isEven ? "md:order-1" : "md:order-2"}>
        {project.image ? (
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="w-full aspect-video object-cover rounded-lg border border-slate-700"
          />
        ) : (
          <ImagePlaceholder label={project.diagramLabel ?? "구조도"} />
        )}
      </div>

      {/* 텍스트 영역 */}
      <div className={isEven ? "md:order-2" : "md:order-1"}>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs font-mono text-slate-500">{project.period}</span>
          {project.solo && (
            <span className="text-xs px-2 py-0.5 bg-blue-950 text-blue-300 border border-blue-800 rounded-full">
              단독 개발
            </span>
          )}
          {project.pl && (
            <span className="text-xs px-2 py-0.5 bg-purple-950 text-purple-300 border border-purple-800 rounded-full">
              PL
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-sm text-cyan-400 mb-4">{project.role}</p>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <p className="text-xs font-mono text-amber-400 mb-1 uppercase tracking-wider">
              Challenge
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">{project.challenge}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <p className="text-xs font-mono text-cyan-400 mb-1 uppercase tracking-wider">
              Solution
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
