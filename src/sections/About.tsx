import SectionTitle from '../components/SectionTitle'

const About = () => {
  return (
    <section id="about" className="section about-section">
      <SectionTitle
        number="01"
        title="About"
        description="화면 구현을 넘어 시스템의 구조와 운영을 고민합니다."
      />

      <div className="about-grid">
        <article className="about-card">
          <span>01</span>
          <h3>Build for Operation</h3>
          <p>
            개발 이후 실제 운영과 유지보수까지 고려해
            변화에 대응하기 쉬운 구조를 설계합니다.
          </p>
        </article>

        <article className="about-card">
          <span>02</span>
          <h3>Solve the Structure</h3>
          <p>
            반복되는 문제를 단순히 수정하기보다
            상태와 데이터 흐름에서 원인을 찾고 구조적으로 개선합니다.
          </p>
        </article>

        <article className="about-card">
          <span>03</span>
          <h3>Expand the Boundary</h3>
          <p>
            Frontend를 중심으로 필요한 경우 Backend, Database,
            AI까지 문제 해결 범위를 확장합니다.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About