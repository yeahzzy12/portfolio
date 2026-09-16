import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

interface CountUpProps {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  pad?: number
}

const CountUp = ({
  end,
  prefix = '',
  suffix = '',
  duration = 1400,
  pad = 0,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null)

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  })

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number | undefined
    let animationFrame: number

    const animate = (time: number) => {
      if (startTime === undefined) {
        startTime = time
      }

      const elapsed = time - startTime
      const progress = Math.min(elapsed / duration, 1)

      // 빠르게 시작하고 마지막에 부드럽게 감속
      const eased = 1 - Math.pow(1 - progress, 4)

      setCount(Math.round(end * eased))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  const formatted = String(count).padStart(pad, '0')

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

export default CountUp