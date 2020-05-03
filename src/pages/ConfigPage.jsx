import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../components/Button";
import Modal from "../components/Modal";
import Switch from "react-switch";
import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function ConfigPage(props) {
  const history = useHistory();
  const [modalSuccess, setModalSuccess] = useState(false);
  const [switchWhatsapp, setSwitchWhatsapp] = useState(false);
  const [switchAutomaticAnswers, setSwitchAutomaticAnswers] = useState(false);
  function backPage() {
    history.push("/");
  }
  return (
    <div className="container main colored">
      <div className="container">
        <div className="page config-page">
          <div className="title">
            <h1>Configurações</h1>
            <Button
              icon={faArrowLeft}
              type="stroked iconLeft"
              color="primary"
              onClick={backPage}
            >
              Voltar
            </Button>
          </div>
          <section className="config--section">
            <h1>Kate</h1>
            <div className="input-field">
              <span>Responder às perguntas automaticamente</span>
              <Switch
                checked={switchAutomaticAnswers}
                onChange={() => {
                  setSwitchAutomaticAnswers(!switchAutomaticAnswers);
                }}
                onColor="#4591D7"
                onHandleColor="#0C29D0"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                height={20}
                width={48}
                className="react-switch"
              />
            </div>
          </section>
          <section className="config--section">
            <h1>Notificações</h1>
            <div className="input-field">
              <span>Mensagens por WhatsApp</span>
              <Switch
                checked={switchWhatsapp}
                onChange={() => {
                  setSwitchWhatsapp(!switchWhatsapp);
                }}
                onColor="#4591D7"
                onHandleColor="#0C29D0"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                height={20}
                width={48}
                className="react-switch"
              />
            </div>
            <div className="input-field">
              <span>Número de telefone</span>
              <input type="text" placeholder="(99) 99999-9999" />
            </div>
            <div className="input-field">
              <span>Tempo mínimo de atraso para notificação</span>
              <input type="number" placeholder="Tempo em minutos..." min="0" />
            </div>
          </section>
          <section className="config--section">
            <h1>Integrações</h1>
            <div className="input-field">
              <span>Realizadas</span>
              <p>
                Mercado Livre
                <Button icon={faTimes} color="danger" />
              </p>
            </div>
            <div className="input-field">
              <span>Disponíveis</span>
              <p>Nenhuma</p>
            </div>
          </section>
          <div className="flex">
            <Button> Salvar </Button>
          </div>
          <section className="config--section">
            <h1>Para desenvolvedores</h1>
            <div className="input-field">
              <span>Access Token</span>
              <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX-XXXX" />
            </div>
            <div className="input-field">
              <span>Secret Token</span>
              <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX-XXXX" />
            </div>
          </section>

          <Modal
            isOpen={modalSuccess}
            success
            message="Alteração feita com sucesso!"
            onClose={() => {
              setModalSuccess(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}
