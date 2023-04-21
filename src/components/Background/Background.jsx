import s from "./Background.module.css";

const Background = ({ children }) => (
  <div className={s.background}>{children}</div>
);

export default Background;
