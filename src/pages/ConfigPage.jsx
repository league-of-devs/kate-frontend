import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../components/Button";
import Modal from "../components/Modal";
import Switch from "react-switch";
import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function ConfigPage(props) {
  const history = useHistory();
  const [modalSuccess, setModalSuccess] = useState(false);
  
  let api =
  {
    "name": "meunome meusobrenome",
    "email": "email@email.com",
    "phone": 0,
    "api_secret_token": "37fcc517360ad738ecb4f452392d1668b5cb80411f92da90d5242b231f9b",
    "api_access_token": "ba635a6ff9f58cb4860d410f1c8e68985800c2662ec84f78587c634035cc",
    "settings": {
      "whatsapp_notifications": true,
      "whatsapp_notification_time": 10,
      "kate_auto_send": true
    }
  }
  let user_syncs = ['mercado_livre']
  
  const [switchAutomaticAnswers, setSwitchAutomaticAnswers] = useState(api.settings.kate_auto_send);
  const [switchWhatsapp, setSwitchWhatsapp] = useState(api.settings.whatsapp_notifications);
  const [userPhone, setUserPhone] = useState(api.phone);
  const [time, setTime] = useState(api.settings.whatsapp_notification_time);

  function handleRemoveSync(sync){alert(sync)}
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
              onClick={()=>{history.goBack()}}
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
              <input type="text" placeholder="(99) 99999-9999" value={userPhone} onChange={e=>{setUserPhone(e.target.val)}}/>
            </div>
            <div className="input-field">
              <span>Tempo mínimo de atraso para notificação</span>
              <input type="number" placeholder="Tempo em minutos..." min="0" value={time} onChange={e=>{setTime(e.target.value)}}/>
            </div>
          </section>
          <section className="config--section">
            <h1>Integrações</h1>
            <div className="input-field">
              <span>Realizadas</span>
              {user_syncs.map(sync => <p className="sync">{sync.replace('_',' ')} <Button icon={faTimes} color="danger" onClick={()=> {handleRemoveSync(sync)}}/></p>)}
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
              <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX-XXXX" value={api.api_access_token} disabled/>
            </div>
            <div className="input-field">
              <span>Secret Token</span>
              <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX-XXXX" value={api.api_secret_token} disabled/>
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
