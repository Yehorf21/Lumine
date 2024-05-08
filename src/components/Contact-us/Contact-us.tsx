import { useState } from 'react';
import { inputFields } from '../../helpers/context';

const initialInputBody = {
  name: '',
  email: '',
  note: '',
};

type InputField = typeof inputFields[number];

export const ContactUs = () => {
  const [inputBody, setInputBody] = useState(initialInputBody);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: InputField,
  ) => {
    setInputBody((input) => ({ ...input, [type]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, note } = inputBody;

    if (name.trim() && email.trim() && note.trim()) {
      setInputBody(initialInputBody);
    }
  };

  return (
    <section className="contact-us" id="contact-us">
      <div className="contact-us__form-group">
        <div className="contact-us__text">
          <h2 className="contact-us__title">Contact Us</h2>
        </div>

        <form
          action="#"
          className="contact-us__form"
          onSubmit={handleFormSubmit}
        >
          {inputFields.map(field => (
            <input
              key={field}
              type={field === 'email' ? 'email' : 'text'}
              className={`contact-us__input contact-us__input--${field}`}
              placeholder={`Your ${field}...`}
              required
              onChange={(e) => handleInput(e, field)}
              value={inputBody[field as keyof typeof inputBody]}
            />
          ))}

          <button className="contact-us__button">SUBMIT</button>
        </form>
      </div>

      <div className="contact-us__image" />
    </section>
  );
};
