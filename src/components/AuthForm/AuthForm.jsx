import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Label } from 'components/ContactForm/ContactForm.styled';
import { Button } from 'components/Button/Button.styled';
import { TitleForm } from 'components/AuthForm/AuthForm.styled';

export const AuthForm = ({ authType, btnTitle, onSubmit }) => {
  const [form, setForm] = useState(
    authType === 'login'
      ? { email: '', password: '' }
      : { email: '', password: '', name: '' }
  );
  const { name, email, password } = form;

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(form);
    setForm({ email: '', password: '', name: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TitleForm>Please, {authType}</TitleForm>

      {authType === 'register' && (
        <Label>
          User name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </Label>
      )}
      <Label>
        E-mail
        <Input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          required
          pattern="^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$"
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">{btnTitle}</Button>
    </Form>
  );
};

AuthForm.propTypes = {
  authType: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
