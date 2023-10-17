import React from "react";

const Task = ({ filteredData, textColor }) => {
  return (
    <>
      {filteredData.map((item) => (
        <div key={item.id}>
          <h1 style={{ color: textColor }}>{item.title}</h1>
          {item.img ? (
            <img src={item.img} alt="content-img" />
          ) : (
            <p style={{ color: textColor }}>no image</p>
          )}

          <p style={{ columnCount: "2", columnGap: "20px", color: textColor }}>
            {item.description}
          </p>
          <div>
            <h4 style={{ color: textColor }}>NOTE</h4>
            <p style={{ fontStyle: "italic", color: "red" }}>{item.extras}</p>
          </div>

          <div>
            <h3 style={{ color: textColor }}>Challenges</h3>
            <ul>
              {item.challenges.split(", ").map((text) => (
                <li style={{ color: textColor }}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Task;
