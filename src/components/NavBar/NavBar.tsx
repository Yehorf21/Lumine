import { links } from '../../helpers/context';
import { convertToKebabCase } from '../../helpers/helpers';

interface Props {
  icon: 'menu' | 'close';
  menuOpenClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar: React.FC<Props> = ({ icon, menuOpenClose }) => {

  const menuAction = () => {
    icon === 'close' ? menuOpenClose(false) : menuOpenClose(true);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-bar__logo" />

      <ul className="nav-bar__links links">
        {links.map((link) => (
          <li className="nav-bar__item" key={link}>
            <a
              href={`#${convertToKebabCase(link)}`}
              className="nav-bar__link link"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div
        className={`nav-bar__icon nav-bar__icon--${icon}`}
        onClick={menuAction}
      />
    </nav>
  );
};
