import { reviews } from '../../helpers/context';

export const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <h2 className="reviews__title">Loved Worldwide</h2>

      <div className="reviews__reviews">
        {reviews.map((review, i) => (
          <article className={`review review--${i + 1}`} key={i}>
            <p className="review__comment">{review}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
