import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  min-height: 600px;
  max-height: 600px;
  background: #fff;
  margin: 10px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;

  overflow-x: hidden;
  overflow-x: auto;

  cursor: default;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 15px 0;

  border-top: 1px solid #fae8e8;

  &:first-child {
    border: 0;
  }

  strong {
    font-size: 15px;
  }

  img {
    display: flex;
    width: 45px;
    height: 45px;
  }

  h1 {
    display: flex;
  }

  span {
    color: #666;
    margin-top: 3px;
    font-size: 12px;
  }

  button {
    background: url("https://image.flaticon.com/icons/svg/148/148766.svg");
    height: 15px;
    width: 15px;
    border: 0;
    cursor: pointer;
  }
`;

export const InformationUser = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NotFound = styled.span`
  color: #666;
  margin: 10px auto;
`;
