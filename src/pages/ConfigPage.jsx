import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import Button from "../components/Button";
import Modal from "../components/Modal";
import Switch from "react-switch";
import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import api from "../services/api";

export default function ConfigPage() {
  const dispatch = useDispatch();


  const setUser = (User) => {
    dispatch({ type: "CHANGE_USER_DATA", User });
  };

  const setSyncs = (Syncs) => {
    dispatch({ type: "CHANGE_SYNCS_DATA", Syncs });
  };


  const history = useHistory();
  const [modalMessage, setModalMessage] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalDeleteSync, setModalDeleteSync] = useState(false);
  const [platforms, setPlatforms] = useState([]);
  const [deleteSync, setdeleteSync] = useState("");

  const user = useSelector((state) => state.User);
  const syncs = useSelector((state) => state.Syncs);

  const [switchAutomaticAnswers, setSwitchAutomaticAnswers] = useState(user.settings.kate_auto_send);
  const [switchWhatsapp, setSwitchWhatsapp] = useState(user.settings.whatsapp_notifications);
  const [userPhone, setUserPhone] = useState(user.phone);
  const [time, setTime] = useState(user.settings.whatsapp_notification_time);
  useEffect(()=>{
    api.get("/kate/platforms")
      .then(response => {
        if (!response.data.error) {
          setPlatforms(response.data);
        }
      })
      .catch(() => alert("Erro ao fazer requisição dos marketplaces"));
    api.get("/user/info")
      .then(response => {
        setUser(response.data);
        
        api.get("/user/syncs")
          .then(response => {
            if (!response.data.error) {
              setSyncs(response.data);
            }
          });
      })
      .catch(() => {
        if (document.location.pathname !== "/auth")
          document.location.replace("/auth");
      });
    

  },[]);

  function handleLogout(){
    api.post("/user/logout")
      .then(() => {
        localStorage.removeItem("token");
        history.push("/auth");
      });
  }
  async function handleRemoveSync(sync) {
    await api
      .delete("/user/remove_sync", { data: { platform: sync } })
      .then((res) => {
        if(res.data.status === "success"){
          setModalMessage("Integração removida com sucesso!");
          setModalSuccess(true);

          api.get("/user/info")
            .then(response => {
              setUser(response.data);
          
              api.get("/user/syncs")
                .then(response => {
                  if (!response.data.error) {
                    setSyncs(response.data);
                  }
                });
            })
            .catch(() => {
              if (document.location.pathname !== "/auth")
                document.location.replace("/auth");
            });
        }
        else{
          alert("Algo deu errado ao deletar integração");
            
        } 
      })
      .catch((err) => alert(err));
  }

  async function handleSave(){
    api.put("/user/edit_info",{
      "name": user.name,
      "email": user.email,
      "phone": userPhone,
      "settings": {
        "whatsapp_notifications":switchWhatsapp,
        "kate_auto_send": switchAutomaticAnswers,
        "whatsapp_notification_time": time
      }
    }).then(res => alert("success")).catch(err => alert("erro " + err));
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
              onClick={() => {
                history.goBack();
              }}
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
              <a className="wpp" target="_blank" href="https://api.whatsapp.com/send?phone=+14155238886&text=join%20president-upon"><span>Habilitar WhatsApp! </span> <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp icon</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> </a>
            </div>
            <div className="input-field">
              <span>Número de telefone</span>
              <input
                type="text"
                placeholder="(99) 99999-9999"
                value={userPhone}
                onChange={(e) => {
                  setUserPhone(e.target.val);
                }}
              />
            </div>
            <div className="input-field">
              <span>Tempo mínimo de atraso para notificação</span>
              <input
                type="number"
                placeholder="Tempo em minutos..."
                min="0"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
            </div>
          </section>
          <section className="config--section">
            <h1>Integrações</h1>
            <div className="input-field">
              <span>Realizadas</span>
              {syncs.map((sync) => (
                <p key={sync} className="sync">
                  {sync.replace("_", " ")}{" "}
                  <Button
                    icon={faTimes}
                    color="danger"
                    onClick={() => {
                      setModalDeleteSync(true);
                      setdeleteSync(sync);
                    }}
                  />
                </p>
              ))}
            </div>
            <div className="input-field">
              <span>Disponíveis</span>
              {platforms.filter(x => !syncs.includes(x)).map(sync => <p key={sync} className="sync" value={sync}>{sync.replace("_", " ")}</p>)}
              {platforms.filter(x => !syncs.includes(x)).length === 0 && (
                <p selected disabled>Nenhuma integração disponível</p>
              )}
            </div>
          </section>
          <div className="flex">
            <Button onClick={()=>handleSave()}> Salvar </Button>
          </div>
          <section className="config--section">
            <h1>Para desenvolvedores</h1>
            <div className="input-field">
              <span>Access Token</span>
              <input
                type="text"
                placeholder="XXXX-XXXX-XXXX-XXXX-XXXX"
                value={api.api_access_token}
                disabled
              />
            </div>
            <div className="input-field">
              <span>Secret Token</span>
              <input
                type="text"
                placeholder="XXXX-XXXX-XXXX-XXXX-XXXX"
                value={api.api_secret_token}
                disabled
              />
            </div>
          </section>
          <section className="">
            <h1>Sua sessão</h1>
            <div className="flex">
              <Button color="danger" onClick={()=>{handleLogout();}}>Encerrar sessão</Button>
            </div>
          </section>

          <Modal
            success
            isOpen={modalSuccess}
            message={modalMessage}
            onClick={() => {
              setModalSuccess(!modalSuccess);
            }}
          />
          <Modal title="Confirmar ação" close isOpen={modalDeleteSync} onClick={()=>{setModalSuccess(false);}}>
            <span>
              {" "}
              Deseja deletar a integração com{" "}
              <span className="sync"> {deleteSync.replace("_", " ")} </span> ?
            </span>
            <Button
              onClick={() => {
                handleRemoveSync(deleteSync);
                setModalDeleteSync(false);
              }}
            >
              {" "}
              Confirmar{" "}
            </Button>
          </Modal>
        </div>
      </div>
    </div>
  );
}
