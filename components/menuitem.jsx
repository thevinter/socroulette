export default function MenuItem({ label, setLabel }) {
  return (
    <p
      style={{ textAlign: 'right', fontSize: '30px', color: 'black', marginRight: '30px' }}
      onClick={() => setLabel(label)}
    >
      {label}
    </p>
  );
}
