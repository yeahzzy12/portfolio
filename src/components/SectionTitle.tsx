import Reveal from './Reveal'

interface SectionTitleProps {
  number: string
  title: string
  description?: string
}

const SectionTitle = ({
  number,
  title,
  description,
}: SectionTitleProps) => {
  return (
    <Reveal>
      <div className="section-title">
        <span>{number}</span>

        <div>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
      </div>
    </Reveal>
  )
}

export default SectionTitle