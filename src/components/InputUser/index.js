import React from "react";
import {
  Container,
  ContainerInput,
  Title,
  Input,
  ContainerButton,
  Button,
  ButtonCancel
} from "./styles";

const InputUser = ({ input, value, add, cancel }) => (
  <Container>
    <ContainerInput>
      <form onSubmit={e => add(e)}>
        <Title>Adicionar novo usuário</Title>
        <Input
          placeholder="Usuárino no Github"
          value={value}
          onChange={e => input(e)}
        />
        <ContainerButton>
          <ButtonCancel onClick={() => cancel()}>Cancelar</ButtonCancel>
          <Button type="submit">Salvar</Button>
        </ContainerButton>
      </form>
    </ContainerInput>
  </Container>
);

export default InputUser;
