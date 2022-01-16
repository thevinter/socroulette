import useSWR from "swr";

const fetcher = (...args) =>
  fetch(...args, {
    mode: "no-cors",
  }).then((res) => res.json());

export default function Datalabel({ icon, label, data, lStyle, dStyle }) {
  return (
    <div>
      <div
        style={{
          fontSize: "20px",
          display: "inline-flex",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: "5px",
        }}
      >
        {icon}
        <span style={lStyle}>{`${label}:`}&nbsp;</span>
        <span style={dStyle}>{data}</span>
      </div>
    </div>
  );
}
