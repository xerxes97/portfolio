export const Cube = ({ size, letter, delay = 0 }: { size: number; letter?: string; delay?: number }) => {
  if (letter === "" || !letter) return (
    <div
      style={{ width: size, height: size }}
    >
    </div>
  );
  return (
    <div
      className="relative cursor-pointer"
      style={{
        animation: "cube-reveal 0.3s ease-out both",
        animationDelay: `${delay}ms`,
      }}
    >
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
