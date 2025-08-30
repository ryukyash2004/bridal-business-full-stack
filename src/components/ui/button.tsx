import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({ children, variant = "default", ...props }: ButtonProps) {
  const base = "px-6 py-3 rounded-xl font-medium transition shadow-md";
  const styles =
    variant === "outline"
      ? "border border-pink-500 text-pink-500 hover:bg-pink-50"
      : "bg-pink-500 text-white hover:bg-pink-600";

  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  );
}
