import React from 'react';

import { NavBar } from '../NavBar';
import { links } from '../../helpers/context';
import { convertToKebabCase } from '../../helpers/helpers';

interface Props {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu: React.FC<Props> = ({ onClose }) => {
  return (
    <>

      <div className="menu">
        <NavBar icon="close" menuOpenClose={onClose}  />

        <ul className="menu__links links">
          {links.map((link) => (
            <li className="menu__item">
              <a
                href={`#${convertToKebabCase(link)}`}
                className="menu__link link"
                onClick={() => onClose(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
