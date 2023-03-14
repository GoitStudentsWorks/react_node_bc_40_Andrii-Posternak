import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export const Backdrop = styled.div`
  position: absolute;
  z-index: 1;
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
  transform: translate(-50%, -100%);
  background-color: #ffffff;
  gap: 10px;
  width: calc(100% - 40px);
  height: 200px;
  border: 1px solid #c8c6c6;
  border-radius: 5px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  padding: 10px;
  margin: 0 auto;

  @media screen and (min-width: 380px) {
    height: 100px;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 480px) {
    width: 420px;
  }

  @media screen and (min-width: 768px) {
    width: 560px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;

  @media screen and (min-width: 380px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  width: 20px;
  height: 20px;
`;

export const ConfirmBtn = styled(CheckCircleIcon)`
  fill: green !important;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    transition: 250ms;
  }
`;

export const CancelBtn = styled(CancelIcon)`
  fill: red !important;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    transition: 250ms;
  }
`;
