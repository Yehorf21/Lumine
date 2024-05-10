import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { reviews } from '../../helpers/context';
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(useGSAP,ScrollTrigger);

export const Reviews = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 639 });

  useGSAP(() => {
    const reviews = gsap.utils.toArray<Element>('.review__image');
    const y = isSmallScreen ? -120 : -190;

    reviews.forEach(review => {
      gsap.fromTo(review, {
        y: 0,
      }, {
        y,
        ease: "none",
        scrollTrigger: {
          trigger: review,
          scrub: 1,
          start: 'top bottom',
          end: 'top 10%',
        }
      });
    });

  }, []);

  return (
    <section className="reviews" id="reviews">
      <h2 className="reviews__title">Loved Worldwide</h2>

      <div className="reviews__reviews">
        {reviews.map((review, i) => (
          <article className={`review review--${i + 1}`} key={i}>
            <div className={`review__image review__image--${i + 1}`} />

            <p className="review__comment">{review}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
