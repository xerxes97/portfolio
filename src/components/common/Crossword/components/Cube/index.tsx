export const Cube = ({ size, letter }: { size: number; letter?: string }) => {
  if (letter === "" || !letter) return (
    <div
      style={{ width: size, height: size }}
    >
      {letter ?? ""}
    </div>
  );
  return (
    <div className="relative cursor-pointer">
      <div
        className="absolute inset-0 rounded-xl shadow-xl/30"
        style={{ width: size, height: size }}
      >
      </div>
      <div
        className="cube flex items-center justify-center bg-rosa border border-white rounded-xl text-verde3"
        style={{ width: size, height: size }}
      >
        {letter ?? ""}
      </div>
    </div>
  );
};

export default Cube;
