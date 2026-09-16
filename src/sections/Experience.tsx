import { motion } from 'motion/react'
import SectionTitle from '../components/SectionTitle'

const Experience = () => {
  return (
    <section
      id="experience"
      className="section experience-section"
    >
      <SectionTitle
      number="02"
        title="경력 및 학력"
        description="프론트엔드 개발자로서 쌓아온 경험입니다."
      />

      <div className="career-education-grid">

        {/* Career */}
        <div className="timeline-column">
          <span className="timeline-heading">
            CAREER
          </span>

          <div className="company">
            <h3>Twentyoz</h3>
            <span>(주)트웬티온스</span>
          </div>

          <motion.div
            className="timeline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-item">
              <div className="timeline-dot" />

              <span className="timeline-period">
                2022.10 — 2026.04
              </span>

              <strong>
                Frontend Developer
              </strong>

              <p>
                데이터센터 모니터링, IoT 플랫폼,
                전자출결·결재 및 실시간 협업 서비스 개발
              </p>

              <div className="timeline-tags">
                <span>3Y 7M</span>
                <span>Vue</span>
                <span>React</span>
                <span>TypeScript</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <div className="timeline-column">
          <span className="timeline-heading">
            EDUCATION
          </span>

          <motion.div
            className="timeline education-timeline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
          >
            <div className="timeline-item">
              <div className="timeline-dot" />

              <span className="timeline-period">
                2018.03 — 2022.08
              </span>

              <strong>
                경희대학교
              </strong>

              <p>
                컴퓨터공학과 졸업
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Experience