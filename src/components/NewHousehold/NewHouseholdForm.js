import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledForm = styled.div`
  ul {
    max-width: 800px;
    margin: 0 auto;
  }
  li {
    display: flex;
    flex-wrap: wrap;
    alignitems: center;
    justifycontent: space-between;
    marginbottom: 20px;
  }
  label {
    flex: 1 0 120px;
    max-width: 220px;
  }
  input {
    flex: 1 0 220px;
    padding: 15px;
    border-radius: 5px;
    border: 2px solid gray;
    :focus: {
      outline: 'none';
    }
  }

  button {
    margin-left: auto;
    padding: 8px 16px;
    border: none;
    background: #333;
    color: #f2f2f2;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    border-radius: 2px;
  }
`;

class NewHouseholdForm extends Component {
  state = { name: '', client: false, address: '', monthly_rate: '' };

  onChange = e => {
    const { target } = e;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { handleSubmit } = this.props;
    const { name, address, monthly_rate: monthlyRate, client } = this.state;
    return (
      <StyledForm>
        <form data-testid="household-form" onSubmit={() => handleSubmit(this.state)}>
          <ul>
            <li>
              <label htmlFor="name">Family Name</label>
              <input name="name" onChange={this.onChange} type="text" id="name" value={name} />
            </li>
            <li>
              <label htmlFor="address">Address</label>
              <input name="address" type="text" value={address} onChange={this.onChange} />
            </li>
            <li>
              <label htmlFor="monthly_rate">Potential Monthly Rate</label>
              <input name="monthly_rate" type="text" value={monthlyRate} onChange={this.onChange} />
            </li>
            <li>
              <label htmlFor="client">Client?</label>
              <input name="client" type="checkbox" checked={client} onChange={this.onChange} />
            </li>
            <li>
              <button type="submit">Create Lead</button>
            </li>
          </ul>
        </form>
      </StyledForm>
    );
  }
}

NewHouseholdForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default NewHouseholdForm;