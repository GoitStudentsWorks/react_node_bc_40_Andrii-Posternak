import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 15px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;

  :focus {
    outline: none;
    box-shadow: 0px 0px 10px 3px rgba(44, 144, 232, 1);
  }
`;
