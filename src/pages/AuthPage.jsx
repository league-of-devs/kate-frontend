import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { faSign } from "@fortawesome/free-solid-svg-icons";

import Button from "../components/Button";
import Modal from "../components/Modal";

export default function AuthPage() {
  const history = useHistory();
  const [RegisterMode, setRegisterMode] = useState(false);
  const [modalError, setModalError] = useState(false);
  return (
    <Modal isOpen={true} title={RegisterMode ? "Cadastro" : "Login"}>
      {RegisterMode && (
        <div className="input-field">
          <span>Nome</span>
          <input className="auth" type="text" />
        </div>
      )}
      <div className="input-field">
        <span>E-mail</span>
        <input className="auth" type="text" />
      </div>

      <div className="input-field">
        <span>Senha</span>
        <input className="auth" type="password" />
      </div>
      <div className="flex between ycenter">
        <Button onClick={()=>{history.push('/')}}>Acessar</Button>
        <span
          className="link"
          onClick={() => {
            setRegisterMode(!RegisterMode);
          }}
        >
          {RegisterMode ? "Fazer Login" : "Fazer Cadastro"}
        </span>
      </div>
    </Modal>
  );
}
