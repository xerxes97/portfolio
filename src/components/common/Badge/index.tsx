import type { ReactNode } from "react";

export const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <span className="inline-flex items-center rounded-4xl cursor-default text-gray-700 px-2 py-1 text-xs font-medium inset-ring inset-ring-gray-400/20">
      {children}
    </span>
  );
};

export default Badge;
