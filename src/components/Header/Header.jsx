import { Button, Container, Navigation } from "../";
import s from "./Header.module.css";

const Header = () => (
  <header className={s.header}>
    <Container>
      <div className={s.header__container}>
        <a href="./" className={s.logo__icon}>
          {}
        </a>
        <div className={s.header__navWrapper}>
          <Navigation />
          <Button variant="wide">Schedule a call</Button>
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
