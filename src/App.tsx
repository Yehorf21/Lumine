import React, { useEffect, useState } from 'react';

import './Lumine.scss';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { WhyUs } from './components/Why-us';
import { Reviews } from './components/Reviews';
import { ContactUs } from './components/Contact-us';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';

/* 

  Things to do:

    - Fix the contact-us image
    - Connect to git

*/

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');

    if (!isMenuOpen && html) {
      html.style.overflow = 'visible';
    }

    if (isMenuOpen && html) {
      html.style.overflow = 'hidden';
    }
  }, [isMenuOpen]);

  return (
    <div className="Lumine">
      <header>
        <Header onOpen={setIsMenuOpen} />
      </header>

      {isMenuOpen && (
        <aside>
          <Menu onClose={setIsMenuOpen} />
        </aside>
      )}

      <main>
        <Product />

        <WhyUs />

        <Reviews />

        <ContactUs />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
