import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import Button from "../components/Button";
import Modal from "../components/Modal";
import api from "../services/api";

export default function AuthPage() {
  const history = useHistory();
  const [RegisterMode, setRegisterMode] = useState(false);
  // const [modalError, setModalError] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector(state => state.User);

  const setUser = (User) => {
    dispatch({ type: "CHANGE_USER_DATA", User });
  };

  const [formData, setFormData] = useState({ });

  // VERIFY IF USER IS ALREADY LOGGED IN
  useEffect(() => {
    if (user) {
      api.get("/user/info")
        .then(response => {
          if (!response.data.error) {
            setUser(response.data);
            history.push("/");
          }
        })
        .catch(() => console.log("Sem login"));
    }
  }, []);

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

          localStorage.setItem("token", response.data.token);

          api.get("/user/info")
            .then(response => {
              setUser(response.data);
              history.push("/");
            });

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
        <Button onClick={handleSubmit} icon={faSignInAlt}>{RegisterMode ? "Cadastrar" : "Acessar"}</Button>
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
