import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 520px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 3px #34a1eb;
  padding: 20px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Input = styled.input`
   {
    display: block;
    margin-top: 10px;
    padding: 5px;
  }

  :focus {
    outline: none;
    box-shadow: 0px 0px 10px 3px rgba(44, 144, 232, 1);
  }
`;
