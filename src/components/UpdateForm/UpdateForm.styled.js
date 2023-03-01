import styled from 'styled-components';

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #d8d4d4a1;
`;

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
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

export const ButtonContainer = styled.div`
  display: flex;
`;
