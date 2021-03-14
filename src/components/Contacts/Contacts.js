import React from 'react';
import style from './Contacts.module.css';
import PropTypes from 'prop-types';
import Contact from './Contact';

const Contacts = ({ list, onDeliteContact }) => {
  return (
    <div className={style.contactsContainer}>
      <ul className={style.contactsList}>
        {list.map(({ id, name, number }) => (
          <li key={id} className={style.contactItem}>
            <Contact
              name={name}
              number={number}
              onDeliteContact={() => onDeliteContact(id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  list: PropTypes.array.isRequired,
  onDeliteContact: PropTypes.func.isRequired,
};

export default Contacts;
