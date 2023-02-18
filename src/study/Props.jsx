import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";

function Count(props) {
  return (
    <span
      style={{
        fontSize: "120px",
        fontWeight: "bold",
      }}
    >
      {props.i}
    </span>
  );
}

export const Props = () => {
  const [number, setNumber] = React.useState(0);
  function increase() {
    // setNumber(number + 1);
    setNumber((current) => current + 1);
  }
  return (
    <>
      <Title text="Count Study" color="#0f766e" />
      <div>
        <Count i={number} />
      </div>
      <div>
        <Button onClick={increase} color="#1e40af" fill>
          increase
        </Button>
      </div>
    </>
  );
};
