/* eslint-disable react/prop-types */
export function TagContainer({ tags }) {
  return (
    <div className="flex">
      {tags.map((i) => (
        <div key={i}>{i}</div>
      ))}
    </div>
  );
}
