import type { ReactNode } from "react";

export const SectionTitle = ({
  children,
  centered = false,
}: {
  children: ReactNode;
  centered?: boolean;
}) => {
  return (
    <h2
      className={`mb-12 text-4xl font-bold ${centered ? "text-center" : ""}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
