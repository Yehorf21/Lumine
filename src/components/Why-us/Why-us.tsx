import { whyUsCards } from '../../helpers/context';

export const WhyUs = () => {
  const generateCardClass = (name: string, index: number) => {
    return `why-us-card__${name} why-us-card__${name}--${index + 1}`;
  };

  return (
    <section className="why-us" id="why-us">
      <h2 className="why-us__title">Why Us?</h2>

      <div className="why-us__cards">
        {whyUsCards.map((card, i) => (
          <article className="why-us-card" key={i}>
            <div className={generateCardClass('description', i)}>
              <h3 className={generateCardClass('title', i)}>{card.title}</h3>

              <p className={generateCardClass('text', i)}>{card.text}</p>
            </div>

            <div className={generateCardClass('image', i)} />
          </article>
        ))}
      </div>
    </section>
  );
};
