import SectionTitle from '../components/SectionTitle'

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Vue.js 2/3', 'TypeScript', 'Pinia', 'Vite'],
  },
  {
    title: 'Visualization',
    skills: ['uPlot', 'ECharts', 'Wijmo Grid'],
  },
  {
    title: 'Backend & Data',
    skills: ['NestJS', 'Supabase', 'PostgreSQL'],
  },
  {
    title: 'Real-time',
    skills: ['LiveKit', 'WebRTC'],
  },
  {
    title: 'AI',
    skills: ['Claude Code', 'Planning', 'Testing', 'Documentation'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="section">
      <SectionTitle
        number="04"
        title="Skills"
        description="실무 프로젝트에서 사용하고 문제 해결에 적용한 기술입니다."
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div>
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills