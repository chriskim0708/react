export default function Button({ children, onClick, color, fill = false }) {
  return (
    <button
      style={{
        backgroundColor: fill ? color : "#fff",
        border: fill ? "none" : `1px solid ${color}`,
        padding: "7px 15px",
        color: fill ? "#fff" : color,
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "bold",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
