import React, { useEffect, useState } from "react";
import { fetchGallery } from "../api/drupal";
import "./Gallery.css";
import AGalleryPic from "./AGalleryPic";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await fetchGallery();

        if (!Array.isArray(data)) {
          console.error("Invalid gallery data format:", data);
          setGallery([]);
        } else {
          setGallery(data);
        }
      } catch (err) {
        console.error("Error fetching gallery:", err);
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, []);

  if (loading) {
    return <p className="loading-text">Loading gallery...</p>;
  }

  if (selectedImage) {
    return (
      <AGalleryPic
        image={selectedImage}
        onBack={() => setSelectedImage(null)}
      />
    );
  }

  return (
    <section className="gallery-wrapper">
    
      <div className="gallery-grid">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="gallery-card"
            onClick={() => setSelectedImage(item)}
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="gallery-image"
              />
            )}
            <h3 className="gallery-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
