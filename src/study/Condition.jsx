import React from "react";
import Box from "../components/Box";
import Button from "../components/Button";
import Title from "../components/Title";

const colorBox = {
  red: (
    <Box width={100} height={100} color="red">
      1
    </Box>
  ),
  blue: (
    <Box width={100} height={100} color="blue">
      2
    </Box>
  ),
  green: (
    <Box width={100} height={100} color="green">
      3
    </Box>
  ),
};

export default function Condition() {
  const [color, setColor] = React.useState("red");
  return (
    <>
      <Title text="Condition Study" />
      <div
        style={{
          display: "flex",
          gap: 10,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {colorBox[color]}
        {/* 삼항연산자 조건
        {color === "red" ? (
          <Box width={100} height={100} color="red">
            1
          </Box>
        ) : (
          <Box width={100} height={100} color="blue">
            2
          </Box>
        )} */}
        {/* 개별로 조건을 줄 경우
        {color === "red" && (
          <Box width={100} height={100} color="red">
            1
          </Box>
        )}
        {color === "blue" && (
          <Box width={100} height={100} color="blue">
            2
          </Box>
        )}
        {color === "green" && (
          <Box width={100} height={100} color="green">
            3
          </Box>
        )} */}
      </div>
      <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
        <Button color="red" onClick={() => setColor("red")}>
          active red
        </Button>
        <Button color="blue" onClick={() => setColor("blue")}>
          active blue
        </Button>
        <Button color="green" onClick={() => setColor("green")}>
          active green
        </Button>
      </div>
    </>
  );
}
