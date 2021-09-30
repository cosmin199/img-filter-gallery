import React, { useEffect, useState } from "react"
import TagButton from "./TagButton"
import images from "../data"

function Gallery() {
  const [tag, setTag] = useState("all")
  const [filteredImages, setFilteredImages] = useState([])

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag))
  }, [tag])

  return (
    <div className="gallery" handleSetTag={setTag}>
      <TagButton name="all" handleSetTag={setTag} />
      <TagButton name="city" handleSetTag={setTag} />
      <TagButton name="nature" handleSetTag={setTag} />
      <TagButton name="office" handleSetTag={setTag} />

      <div>
        {filteredImages.map((image) => (
          <div>{image.imageName}</div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
