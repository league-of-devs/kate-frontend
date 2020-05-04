import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { faSign } from "@fortawesome/free-solid-svg-icons";

import Button from "../components/Button";
import Modal from "../components/Modal";
import api from "../services/api";

export default function AuthPage() {
  const history = useHistory();
  const [RegisterMode, setRegisterMode] = useState(false);
  const [modalError, setModalError] = useState(false);

  const [formData, setFormData] = useState({ });

  const handleFormChange = (name, value) => {
    const data = formData;
    data[name] = value;
    setFormData(data);
  };

  const handleSubmit = () => {
    if (RegisterMode) {
      api.post("/user/register", formData)
        .then(response => {
          if (response.data.error)
            throw new Error(response.data.error);

          setRegisterMode(false);
        })
        .catch(error => {
          alert(error);
        });
    } else {
      api.post("/user/login", formData)
        .then(response => {
          if (response.data.error)
            throw new Error(response.data.error);

          history.push("/");
        })
        .catch(error => {
          alert(error);
        });
    }
  };

  return (
    <Modal isOpen={true} title={RegisterMode ? "Cadastro" : "Login"}>
      {RegisterMode && (
        <div className="input-field">
          <span>Nome</span>
          <input className="auth" type="text" onChange={(e) => handleFormChange("name", e.target.value)} />
        </div>
      )}
      <div className="input-field">
        <span>E-mail</span>
        <input className="auth" type="text" onChange={(e) => handleFormChange("email", e.target.value)} />
      </div>

      <div className="input-field">
        <span>Senha</span>
        <input className="auth" type="password" onChange={(e) => handleFormChange("password", e.target.value)} />
      </div>
      <div className="flex between ycenter">
        <Button onClick={handleSubmit}>Acessar</Button>
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
