import type { ReactNode } from "react";

export const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <span className="rounded-full bg-muted px-3 py-1 text-sm">
      {children}
    </span>
  );
};

export default Badge;
