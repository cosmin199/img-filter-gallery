import React from "react"

function TagButton({ name, handleSetTag }) {
  return (
    <button onClick={() => handleSetTag(name)}>{name.toUpperCase()}</button>
  )
}

export default TagButton
