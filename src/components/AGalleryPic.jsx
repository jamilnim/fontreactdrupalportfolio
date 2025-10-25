export default function AGalleryPic({ image, onBack }) {
    return (
      <div className="gallery-detail">
        <button onClick={onBack} className="back-btn">← Back to Gallery</button>
        {image.image && <img src={image.image} alt={image.title} />}
        <h2>{image.title}</h2>
        <p>{image.description}</p>
      </div>
    );
  }
  