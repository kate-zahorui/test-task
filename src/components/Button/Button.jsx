import s from "./Button.module.css";

const Button = ({ children }) => <div className={s.button}>{children}</div>;

export default Button;
