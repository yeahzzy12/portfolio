import SectionTitle from '../components/SectionTitle'
import ProjectGallery from '../components/ProjectGallery'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section
      id="projects"
      className="section projects-section"
    >
      <SectionTitle
        number="03"
        title="Projects"
        description="문제를 발견하고 구조적으로 해결한 프로젝트 경험입니다."
      />

      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={index * 0.05}
          >
            <article className="project-case">

              <div className="project-number">
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span>/</span>

                <span>
                  {String(projects.length).padStart(2, '0')}
                </span>
              </div>

              <header className="project-header">
                <div>
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <h4>{project.headline}</h4>
                </div>

                <div className="project-meta-info">
                  <div>
                    <span>PERIOD</span>
                    <strong>{project.period}</strong>
                  </div>

                  <div>
                    <span>ROLE</span>
                    <strong>{project.role}</strong>
                  </div>
                </div>
              </header>

              <ProjectGallery
                images={project.images}
                title={project.title}
              />

              <div className="project-body">
                <div className="project-overview">
                  <span className="project-small-title">
                    OVERVIEW
                  </span>

                  <p>{project.description}</p>

                  {project.metric && (
                    <div className="project-highlight">
                      <strong>
                        {project.metric}
                      </strong>

                      <span>
                        {project.metricLabel}
                      </span>
                    </div>
                  )}
                </div>

                <div className="project-details">
                  <div className="project-detail-group">
                    <span className="project-small-title">
                      WHAT I DID
                    </span>

                    <ul>
                      {project.works.map((work) => (
                        <li key={work}>{work}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-detail-group">
                    <span className="project-small-title">
                      IMPACT
                    </span>

                    <ul>
                      {project.achievements.map(
                        (achievement) => (
                          <li key={achievement}>
                            {achievement}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="project-tech">
                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ),
                )}
              </div>

            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects