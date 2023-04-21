import s from "./Navigation.module.css";

const Navigation = () => (
  <nav className={s.nav}>
    <ul className={s.nav__list}>
      <li className={s.nav__item}>
        <a href="./" className={s.nav__link}>
          Home
        </a>
      </li>
      <li className={s.nav__item}>
        <a href="./" className={s.nav__link}>
          Our Services
        </a>
      </li>
      <li className={s.nav__item}>
        <a href="./" className={s.nav__link}>
          Case Studies
        </a>
      </li>
      <li className={s.nav__item}>
        <a href="./" className={s.nav__link}>
          Blog
        </a>
      </li>
      <li className={s.nav__item}>
        <a href="./" className={s.nav__link}>
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
