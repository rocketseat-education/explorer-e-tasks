import { Plus } from "@phosphor-icons/react";

import { Button } from "../Button";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>Tarefas</h1>
      <Button icon={Plus} title="Nova tarefa" />
    </Container>
  );
}