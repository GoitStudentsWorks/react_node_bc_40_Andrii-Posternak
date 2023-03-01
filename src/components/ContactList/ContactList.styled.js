import styled from 'styled-components';

export const ContainerList = styled.div`
  box-sizing: border-box;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 600px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const List = styled.ul`
  list-style-type: numeric;
`;

export const ContactItem = styled.li`
  margin-bottom: 10px;
`;

export const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 16px;
  background-color: #eb4b5b;
  border-radius: 10px;
  width: 80px;
  padding: 5px;
  margin-left: 20px;
  cursor: pointer;
  border: none;

  :hover {
    background-color: #c73241;
  }
`;
