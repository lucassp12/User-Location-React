import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  border-radius: 3px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.6);
`;

export const Title = styled.strong`
  font-size: 15px;
  color: black;
  font-weight: bold;
  display: flex;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  color: #666;
  display: flex;
  padding: 5px;
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  width: 80px;
  border: 0;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;

  background: #1f9100;
  cursor: pointer;
`;

export const ButtonCancel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  width: 80px;
  border: 0;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;

  background: #dbd0d0;

  cursor: pointer;
`;
