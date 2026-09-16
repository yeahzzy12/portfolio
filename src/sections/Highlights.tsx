import { motion } from 'motion/react'
import CountUp from '../components/CountUp'

const Highlights = () => {
  return (
    <section className="highlights">
      <motion.div
        className="highlights-inner"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="highlights-header">
          <span>CAREER HIGHLIGHTS</span>

          <p>
            숫자로 보는 주요 프로젝트 경험
          </p>
        </div>

        <div className="highlights-grid">
          <div className="highlight-item">
            <div className="highlight-number experience-number">
              <CountUp
                end={3}
                pad={2}
                suffix="Y"
                duration={1200}
              />

              <span className="highlight-separator">:</span>

              <CountUp
                end={7}
                pad={2}
                suffix="M"
                duration={1500}
              />
            </div>

            <span className="highlight-label">
              EXPERIENCE
            </span>

            <p>
              Frontend Development
            </p>
          </div>

          <div className="highlight-item">
            <div className="highlight-number">
              <CountUp
                end={100}
                suffix="K+"
                duration={1700}
              />
            </div>

            <span className="highlight-label">
              DATA POINTS
            </span>

            <p>
              Real-time Visualization
            </p>
          </div>

          <div className="highlight-item">
            <div className="highlight-number">
              <CountUp
                end={10}
                suffix="×"
                duration={1400}
              />
            </div>

            <span className="highlight-label">
              RENDERING SCALE
            </span>

            <p>
              Performance Improvement
            </p>
          </div>

          <div className="highlight-item">
            <div className="highlight-number">
              <CountUp
                end={24}
                duration={1500}
              />
            </div>

            <span className="highlight-label">
              SCREENS
            </span>

            <p>
              DCIM System
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Highlights