import React from "react";

const Task = ({ filteredData }) => {
  return (
    <>
      {filteredData.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <img src={item.img} alt="content-img" />
          <p style={{ columnCount: "2", columnGap: "20px" }}>
            {item.description}
          </p>
          <div>
            <h4>NOTE</h4>
            <p style={{ fontStyle: "italic", color: "red" }}>{item.extras}</p>
          </div>

          <div>
            <h3>Challenges</h3>
            <p>
              {item.challenges.split(", ").map((text) => (
                <li>{text}</li>
              ))}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Task;
