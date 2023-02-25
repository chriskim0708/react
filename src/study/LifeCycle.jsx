import { useState, useEffect } from "react";
/**
 * lifecycle
 * mounted
 * updated
 * destroy
 */

const LifeCycle = () => {
  const [view, setView] = useState(false);

  useEffect(() => {
    console.log("LifeCycle mounted");
  }, []);

  useEffect(() => {
    console.log("LifeCycle updated");
  }, [view]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#fff",
            color: "#000",
          }}
          onClick={() => setView((state) => !state)}
        >
          tooggle children
        </button>
      </div>
      <div
        style={{
          width: 500,
          height: 500,
          display: "flex",
          backgroundColor: "#dadada",
          borderRadius: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {view && <Children />}
      </div>
    </div>
  );
};

const Children = () => {
  useEffect(() => {
    console.log("Children mounted");
    return () => {
      console.log("Children destroy");
    };
  }, []);

  return (
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: "#fff",
        borderRadius: "30px",
      }}
    />
  );
};

export default LifeCycle;
