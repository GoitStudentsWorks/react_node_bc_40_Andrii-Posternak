import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const ContainerList = styled.div`
  position: relative;
  box-sizing: border-box;
  font-size: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 60px 0 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) {
    width: 440px;
  }

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export const List = styled.ul`
  padding-left: 10px;
  overflow-y: scroll;
  min-height: 222px;
  height: calc(100vh - 523px);

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 2px;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1976d2;
    border-radius: 5px;

    &:hover {
      background-color: #1565c0;
    }
  }
`;

export const ContactItem = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 30px);
  height: 40px;
  border-radius: 4px;
  background-color: #1976d2;
  color: #ffffff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  padding: 0 10px;
  margin-bottom: 5px;

  &:hover {
    scale: 1.03;
    transition: 250ms;
  }
`;

export const NameWrap = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled(AccountCircleIcon)`
  margin-right: 5px;

  @media screen and (min-width: 480px) {
    margin-right: 10px;
  }
`;

export const UpdateBtn = styled(EditIcon)`
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    color: #30f52a;
    scale: 1.1;
  }

  @media screen and (min-width: 480px) {
    margin-right: 10px;
  }
`;

export const DeleteBtn = styled(DeleteForeverIcon)`
  cursor: pointer;

  &:hover {
    color: #eb4b5b;
    scale: 1.1;
  }
`;
