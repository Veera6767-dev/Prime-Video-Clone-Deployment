import React from "react";
import ContentTile from "./ContentTile";
import ContentTileData from "./ContentTileData";

// map function
function abc(data) {
  return <ContentTile key={data.id} poster={data.poster} />;
}

function ContentCarousel() {
  return (
    <div style={{ marginBottom: 48 }}>
      
      {/* Title */}
      <div
        style={{
          marginLeft: 72,
          marginRight: 72,
          paddingBottom: 16,
        }}
      >
        <h2>Movies List</h2>
      </div>

      {/* Carousel */}
      <div style={{ display: "flex", overflow: "hidden" }}>
        
        {/* Left Button */}
        <button
          onClick={() => {
            document.getElementById("container").scrollLeft -= 1400;
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          ◀
        </button>

        {/* Movie List */}
        <ul
          id="container"
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "scroll",
            scrollBehavior: "smooth",
            listStyle: "none",
            padding: "72px",
            margin: 0,
          }}
        >
          {ContentTileData.map(abc)}
        </ul>

        {/* Right Button */}
        <button
          onClick={() => {
            document.getElementById("container").scrollLeft += 1400;
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          ▶
        </button>

      </div>
    </div>
  );
}

export default ContentCarousel;s
