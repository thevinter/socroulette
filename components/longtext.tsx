export default function Longtext({ label, data }) {
  return (
    <div style={{ wordWrap: "break-word" }} className="longtext">
      <h3>{label}</h3>
      <div
        style={{
          display: "inline",
          wordBreak: "break-all",
          wordWrap: "break-word",
        }}
      >
        {data}
      </div>
    </div>
  );
}
