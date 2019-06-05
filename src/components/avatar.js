import React from "react"

const Avatar = ({ img }) => {
  return (
    <div
      style={{
        width: 125,
        height: 125,
        display: "flex",
        position: "relative",
        overflow: "hidden",
        fontSize: "1.25rem",
        alignItems: "center",
        flexShrink: 0,
        userSelect: "none",
        borderRadius: "50%",
        justifyContent: "center",
      }}
    >
      <img
        src={img}
        alt="avatar"
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          objectFit: "cover",
          margin: 0,
        }}
      />
    </div>
  )
}

export default Avatar
