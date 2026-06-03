export const Cube = ({ size, letter }: { size: number; letter?: string }) => {
  console.log(letter);
  if (letter === "" || !letter) return (
    <div
      style={{ width: size, height: size }}
    >
      {letter ?? ""}
    </div>
  );
  return (
    <div
      className="cube flex items-center justify-center bg-rosa border border-white rounded-xl text-verde3"
      style={{ width: size, height: size }}
    >
      {letter ?? ""}
    </div>
  );
};

export default Cube;
