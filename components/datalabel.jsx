import useSWR from 'swr';

const fetcher = (...args) =>
  fetch(...args, {
    mode: 'no-cors',
  }).then((res) => res.json());

export default function Datalabel({ icon, label, data, lStyle, divStyle, cName, dStyle }) {
  console.log(divStyle);
  return (
    <div
      className={cName}
      style={{
        fontSize: '2vh',
        display: 'inline-flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        ...divStyle,
      }}
    >
      {icon}
      <span style={lStyle}>{`${label}:`}&nbsp;</span>
      <span style={dStyle}>{data}</span>
    </div>
  );
}
