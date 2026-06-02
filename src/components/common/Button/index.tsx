import type { ReactNode } from "react";

type Variant = "primary" | "outline";

export const Button = ({
  children,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) => {
  const styles: Record<Variant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-slate-300 dark:border-slate-600 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800",
  };

  return (
    <button
      className={`rounded-lg px-6 py-3 font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
