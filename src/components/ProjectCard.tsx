import { motion } from "framer-motion";
import type { Project } from "../data/portfolio";
import { EASE, Tilt } from "./fx";
import { ProjectArt } from "./Poster";

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const visibleStack = project.stack.slice(0, 5);
  const remainingCount = project.stack.length - visibleStack.length;

  return (
    <motion.article
      className="w-[86vw] shrink-0 snap-start sm:w-[62vw] lg:w-[46vw] xl:w-[42vw]"
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px -10% 0px 0px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: EASE }}
    >
      <Tilt max={5} className="group rounded-2xl">
        <div
          role="button"
          tabIndex={0}
          data-cursor="view"
          onClick={onOpen}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpen();
            }
          }}
          aria-label={`Open ${project.title}`}
          className="focus-ring relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10 transition duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] group-hover:ring-white/25 sm:aspect-[16/13] sm:min-h-[500px] lg:aspect-auto lg:h-[70vh] lg:min-h-[540px]"
        >
          {/* Background Artwork */}
          <motion.div
            layoutId={`art-${project.id}`}
            className="absolute inset-0 overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 transition-transform duration-[1.4s] ease-[var(--ease-cine)] group-hover:scale-[1.07]">
              <ProjectArt project={project} />
            </div>
          </motion.div>

          {/* Readability gradient for lower content */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/95 via-black/75 to-transparent"
          />

          {/* Unified Content Flex Container (Prevents any top/bottom collision) */}
          <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7 [transform:translateZ(40px)]">
            {/* Top Bar */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="font-display text-xl leading-none text-crimson-2">
                  V
                </span>
                <span className="text-[10px] font-bold tracking-[0.34em] text-bone/80">
                  ORIGINAL
                </span>
              </div>
              <span className="rounded border border-white/30 px-2 py-0.5 text-[10px] font-bold text-bone backdrop-blur-sm">
                {project.year}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="mt-auto pt-6">
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-mist">
                {project.genre}
              </p>
              <motion.h3
                layoutId={`title-${project.id}`}
                className="font-display text-[clamp(1.75rem,2.8vw,2.9rem)] leading-[0.92] tracking-wide text-bone line-clamp-3"
              >
                {project.title}
              </motion.h3>
              <p className="mt-2.5 max-w-md text-xs leading-relaxed text-bone/75 sm:text-sm line-clamp-2">
                {project.logline}
              </p>

              {/* Tech Stack Pills (clean 1-line layout with overflow badge) */}
              <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                {visibleStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-bone/90 ring-1 ring-white/10 backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
                {remainingCount > 0 && (
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-semibold text-mist">
                    +{remainingCount}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="flex min-h-10 items-center gap-2 rounded-md bg-bone px-5 text-sm font-bold text-ink transition group-hover:bg-white">
                  ▶ View Project
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    onClick={(e) => e.stopPropagation()}
                    className="flex min-h-10 items-center gap-2 rounded-md border border-white/25 bg-black/40 px-4 text-sm font-semibold text-bone backdrop-blur transition hover:border-bone"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
