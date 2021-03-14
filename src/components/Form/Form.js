import React, { Component } from 'react';
import style from './Form.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  nameInputId = uuidv4();
  phoneInputId = uuidv4();

  render() {
    return (
      <>
        <form className={style.Form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              id={this.nameInputId}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor={this.phoneInputId}>
            Phone:
            <input
              type="tel"
              name="number"
              value={this.state.number}
              id={this.phoneInputId}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={style.button}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
