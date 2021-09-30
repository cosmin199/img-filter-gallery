import React, { useEffect, useState } from "react"
import "./App.css"
import images from "./data"

function App() {
  const [tag, setTag] = useState("all")
  const [filteredImages, setFilteredImages] = useState([])

  useEffect(() => {
    tag == "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag))
  }, [tag])

  return (
    <div className="App">
      <div>
        {filteredImages.map((image) => (
          <div>{image.imageName}</div>
        ))}
      </div>
    </div>
  )
}

export default App
