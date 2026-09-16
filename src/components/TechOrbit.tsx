import { motion } from 'motion/react'

const technologies = [
  {
    name: 'React',
    className: 'tech-node node-react',
    delay: 0,
  },
  {
    name: 'TypeScript',
    className: 'tech-node node-typescript',
    delay: 0.3,
  },
  {
    name: 'AI',
    className: 'tech-node node-ai',
    delay: 0.6,
  },
  {
    name: 'NestJS',
    className: 'tech-node node-nest',
    delay: 0.9,
  },
  {
    name: 'uPlot',
    className: 'tech-node node-uplot',
    delay: 1.2,
  },
  {
    name: 'LiveKit',
    className: 'tech-node node-livekit',
    delay: 1.5,
  },
]

const TechOrbit = () => {
  return (
    <div className="tech-orbit">
      <div className="orbit-ring orbit-ring-one" />
      <div className="orbit-ring orbit-ring-two" />

      <motion.div
        className="tech-core"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span>SOLVE</span>
        <strong>PROBLEM</strong>
      </motion.div>

      {technologies.map((technology) => (
        <motion.div
          key={technology.name}
          className={technology.className}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: {
              delay: technology.delay,
              duration: 0.5,
            },
            scale: {
              delay: technology.delay,
              duration: 0.5,
            },
            y: {
              delay: technology.delay,
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {technology.name}
        </motion.div>
      ))}
    </div>
  )
}

export default TechOrbit