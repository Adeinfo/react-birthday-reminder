import React from "react";

function Birthday({ props }) {
  console.log(props);
  return (
    <div>
      {props.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className="bContainer" key={id}>
            <img src={image} alt="" />
            <div>
              <h3>{name}</h3>
              <p>{`${age} years`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Birthday;
