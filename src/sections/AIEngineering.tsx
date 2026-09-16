import { motion } from 'motion/react'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'

const workflow = [
  {
    number: '01',
    title: 'Planning',
    description: '요구사항 정리 및 기능 설계',
  },
  {
    number: '02',
    title: 'Architecture',
    description: '구조 검토 및 구현 방향 탐색',
  },
  {
    number: '03',
    title: 'Development',
    description: '코드 작성 및 반복 작업 효율화',
  },
  {
    number: '04',
    title: 'Testing',
    description: '테스트 시나리오 및 예외 케이스 검토',
  },
  {
    number: '05',
    title: 'Documentation',
    description: '기획·시스템 문서 작성 지원',
  },
]

const AIEngineering = () => {
  return (
    <section className="section ai-section">
      <SectionTitle
        number="05"
        title="AI & Engineering"
        description="AI를 단순 코드 생성이 아닌 개발 프로세스의 생산성을 높이는 도구로 활용합니다."
      />

      <Reveal>
        <div className="ai-panel">
          <div className="ai-panel-copy">
            <span className="ai-label">
              AI-ASSISTED DEVELOPMENT
            </span>

            <h3>
              From prompt
              <br />
              to production.
            </h3>

            <p>
              Claude Code 등 AI 도구를 기획, 설계 검토,
              개발, 테스트, 문서화 과정에 활용하고 있습니다.
              결과를 그대로 사용하는 것이 아니라 실제 시스템
              구조와 요구사항에 맞는지 검증하며 개발 과정에
              적용합니다.
            </p>
          </div>

          <div className="ai-workflow">
            {workflow.map((item, index) => (
              <motion.div
                className="ai-workflow-item"
                key={item.title}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
              >
                <span>{item.number}</span>

                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default AIEngineering