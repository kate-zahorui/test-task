import { Button } from "../";
import s from "./Hero.module.css";
import img from "../../assets/images/hero.png";

const Hero = () => (
  <section className={s.hero}>
    <h1>
      Skyrocket Your Hotel Bookings with Our Proven Marketing SYSTEMS - Get 50+
      Direct Bookings in 90 Days!
    </h1>
    <Button>Unlock my booking boost now</Button>
    <img src={img} alt="hotel" width="1200" />
  </section>
);

export default Hero;
