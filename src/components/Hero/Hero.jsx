import { Button } from "../";
import s from "./Hero.module.css";
import img from "../../assets/images/hero.png";
import svg from "../../assets/images/icons.svg";

const Hero = () => (
  <section className={s.hero}>
    <h1 className={s.hero__title}>
      Skyrocket Your Hotel Bookings with Our Proven Marketing SYSTEMS - Get 50+
      Direct Bookings in 90 Days!
    </h1>
    <div className={s.hero__btn}>
      <Button variant="high">Unlock my booking boost now</Button>
    </div>
    <img src={img} alt="hotel" width="1200" />
    <svg className={s.icon__line} width="159" height="19">
      <use href={`${svg}#icon-line`}></use>
    </svg>
    <svg className={s.icon__plane} width="62" height="73">
      <use href={`${svg}#icon-plane`}></use>
    </svg>
    <svg className={s.icon__flag} width="50" height="52">
      <use href={`${svg}#icon-flag`}></use>
    </svg>
  </section>
);

export default Hero;
