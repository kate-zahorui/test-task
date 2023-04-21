import { Button, Navigation } from "../";
import s from "./Header.module.css";

const Header = () => (
  <header className={s.header}>
    <a href="./" className={s.logo__icon}></a>
    <Navigation />
    <Button>Schedule a call</Button>
  </header>
);

export default Header;
