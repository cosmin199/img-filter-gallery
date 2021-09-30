import { useEffect, useState } from "react"
import { SRLWrapper } from "simple-react-lightbox"
import TagButton from "./TagButton"
import images from "../data"
import "./Gallery.css"

const options = {
  //   settings: {
  //     overlayColor: "green",
  //   },
  //   buttons: {
  //     backgroundColor: "blue",
  //     iconColor: "#fff",
  //   },
}

function Gallery() {
  const [tag, setTag] = useState("all")
  const [filteredImages, setFilteredImages] = useState([])

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag))
  }, [tag])

  return (
    <div className="App">
      <div className="tags">
        <TagButton
          name="all"
          handleSetTag={setTag}
          tagActive={tag === "all" ? true : false}
        />
        <TagButton
          name="nature"
          handleSetTag={setTag}
          tagActive={tag === "nature" ? true : false}
        />
        <TagButton
          name="city"
          handleSetTag={setTag}
          tagActive={tag === "city" ? true : false}
        />
        <TagButton
          name="office"
          handleSetTag={setTag}
          tagActive={tag === "office" ? true : false}
        />
      </div>

      <SRLWrapper options={options}>
        <div className="container">
          {filteredImages.map((image) => (
            <div key={image.id} className="image-card">
              <a href={`/img/${image.imageName}`}>
                <img className="image" src={`/img/${image.imageName}`} alt="" />
              </a>
            </div>
          ))}
        </div>
      </SRLWrapper>
    </div>
  )
}

export default Gallery
