import CountUp from '../components/CountUp'
import { motion } from 'motion/react'
import TechOrbit from '../components/TechOrbit'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner hero-layout">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            FRONTEND DEVELOPER · 3Y 7M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            복잡한 시스템을
            <br />
            단순한 구조로
            <br />
            만듭니다.
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >
            React · Vue · TypeScript를 기반으로
            <br />
            성능, 구조, 운영의 문제를 해결해왔습니다.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#projects"
              className="button button-primary"
            >
              Explore Work ↓
            </a>

            <a
              href="#about"
              className="button button-secondary"
            >
              About Me
            </a>
          </motion.div>
        </div>

        <TechOrbit />

        
      </div>
    </section>
  )
}

export default Hero