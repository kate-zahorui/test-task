import s from "./Button.module.css";

const Button = ({ children, variant }) => (
  <button
    type="button"
    className={variant === "high" ? s.button__high : s.button__wide}
  >
    {children}
  </button>
);

export default Button;
