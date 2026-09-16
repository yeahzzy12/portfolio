interface ProjectGalleryProps {
  images?: string[]
  title: string
}

const ProjectGallery = ({
  images,
  title,
}: ProjectGalleryProps) => {
  if (!images?.length) {
    return null
  }

  const hasMultipleImages = images.length > 1

  return (
    <div className="project-gallery">
      <div
        className={`project-gallery-track ${
          hasMultipleImages
            ? 'multiple'
            : 'single'
        }`}
      >
        {images.map((image, index) => (
          <div
            className="project-gallery-item"
            key={`${image}-${index}`}
          >
            <img
              src={image}
              alt={`${title} 프로젝트 화면 ${index + 1}`}
              loading="lazy"
            />

            {hasMultipleImages && (
              <span className="gallery-index">
                {String(index + 1).padStart(2, '0')}
                {' / '}
                {String(images.length).padStart(2, '0')}
              </span>
            )}
          </div>
        ))}
      </div>

      {hasMultipleImages && (
        <div className="gallery-hint">
          <span>Scroll to explore</span>
          <span>→</span>
        </div>
      )}
    </div>
  )
}

export default ProjectGallery