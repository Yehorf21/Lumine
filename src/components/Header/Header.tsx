import { NavBar } from '../NavBar';

interface Props {
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = ({ onOpen }) => {
  return (
    <section className="header">
      <NavBar icon="menu" menuOpenClose={onOpen} />

      <div className="header__card">
        <div className="header__image" />

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
