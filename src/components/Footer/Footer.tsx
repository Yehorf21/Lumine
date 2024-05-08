import { footerIconLinks } from '../../helpers/context';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left-group">
        <h3 className="footer__title">Address</h3>

        <a href="https://www.googlemaps.com" className="footer__link">
          123 Lumine Street, London, UK
        </a>
      </div>

      <div className="footer__center">
        <div className="footer__icons">
          {footerIconLinks.map((iconLink, i) => (
            <a
              key={i}
              href={'https://' + iconLink}
              className={`footer__icon footer__icon--${i + 1}`}
            />
          ))}
        </div>

        <h2 className="footer__logo">LUMINE</h2>
      </div>

      <div className="footer__right-group">
        <h3 className="footer__title footer__title--2">Email</h3>

        <a
          href="mailto:contact@lumine.co.uk"
          className="footer__link footer__link--2"
        >
          contact@
          <br />
          lumine.co.uk
        </a>
      </div>
    </div>
  );
};
