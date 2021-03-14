import React from 'react';
import style from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contact = ({ name, number, onDeliteContact }) => {
  return (
    <>
      {name}: {number}
      <button type="button" className={style.btn} onClick={onDeliteContact}>
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeliteContact: PropTypes.func.isRequired,
};

export default Contact;
