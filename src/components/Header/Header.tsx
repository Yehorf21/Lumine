import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { NavBar } from '../NavBar';


gsap.registerPlugin(useGSAP,ScrollTrigger);

interface Props {
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = ({ onOpen }) => {
  const mm = gsap.matchMedia();

  useGSAP(() => {
    mm.add("(min-width:1200px)", () => {
      gsap.to('#header-img', {
        x: -700,
        opacity: .7,
        scrollTrigger: {
          trigger: '#header-img',
          scrub: 2,
          start: 'bottom 50%',
        }
      });
    });
  }, []);

  return (
    <section className="header">
      <NavBar icon="menu" menuOpenClose={onOpen} />

      <div className="header__card">
        <div className="header__image" id="header-img" />

        <div className="header__description">
          <div className="header__text">
            <h2 className="header__title">Elegant like time itself</h2>

            <p className="header__paragraph">
              Discover timeless elegance with Lumine. From classic designs to
              modern innovations, our watches are crafted with precision and
              style to elevate every moment.
            </p>
          </div>

          <button className="header__button">Elevate your style</button>
        </div>
      </div>
    </section>
  );
};
