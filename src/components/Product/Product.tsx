import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

export const Product = () => {
  useGSAP(() => {
    gsap.to('#product-img', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#product-img',
        scrub: 1,
        start: 'top 100%',
        end: 'top 50%'
      }
    });
  }, []);

  return (
    <section className="product" id="about-us">
      <div className="product__image" id="product-img" />

      <div className="product__description">
        <div className="product__titles">
          <h2 className="product__title">Elegantly Refined</h2>

          <h2 className="product__title">Timeless Grace</h2>
        </div>

        <div className="product__paragraph">
          Exuding grace and poise, our watch boasts an elegant, timeless design
          that captures attention effortlessly. With its gentle grey hue and
          delicate golden accents, it epitomizes sophistication and style,
          becoming a symbol of understated luxury and refined taste.
        </div>
      </div>
    </section>
  );
};
