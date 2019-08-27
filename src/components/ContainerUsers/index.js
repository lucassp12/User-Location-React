import React from "react";
import { Container, UserContainer, InformationUser, NotFound } from "./styles";

const ContainerUsers = ({ users, remove }) => (
  <Container>
    {users.length === 0 && <NotFound>Click in map for add...</NotFound>}

    {users.map(user => (
      <UserContainer key={user.id}>
        <img src={user.avatar} alt="avatar" />
        <InformationUser>
          <strong>{user.name}</strong>
          <span>{user.name}</span>
        </InformationUser>
        <button onClick={() => remove(user)} />
      </UserContainer>
    ))}
  </Container>
);

export default ContainerUsers;
