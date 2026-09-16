import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

const ProjectDetail = () => {
  const { projectId } = useParams()

  const project = projects.find(
    (project) => project.id === projectId,
  )

  if (!project) {
    return (
      <main className="project-detail">
        <h1>Project not found.</h1>
        <Link to="/">Back Home</Link>
      </main>
    )
  }

  return (
    <main className="project-detail">
      <Link to="/" className="back-link">
        ← Back
      </Link>

      <p>{project.category}</p>

      <h1>{project.title}</h1>

      <h2>{project.headline}</h2>

      <p>{project.description}</p>

      {project.metric && (
        <div className="detail-metric">
          <strong>{project.metric}</strong>
          <span>{project.metricLabel}</span>
        </div>
      )}
    </main>
  )
}

export default ProjectDetail