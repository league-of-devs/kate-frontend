import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  faArrowLeft,
  faTimes,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../components/Button";
import Modal from "../components/Modal";
import Card from "../components/Card";

export default function ConfigPage() {
  const history = useHistory();
  const [modalSuccess, setModalSuccess] = useState(false);
  function backPage() {
    history.push("/");
  }
  const prod = {
    name: "Cafeteira Cafeteira Cafeteira Cafeteira Cafeteira Cafeteira ",
    imgUrl:
      "https://c.mlcdn.com.br/1500x1500/cafeteira-eletrica-lenoxx-master-inox30-xicaras-preta-217126900.jpg",
    price: 245,
  };

  return (
    <div className="container main colored">
      <div className="container">
        <div className="page product-page">
          <div className="title">
            <h1>Meu anúncio</h1>
            <Button
              icon={faArrowLeft}
              type="stroked iconLeft"
              color="primary"
              onClick={backPage}
            >
              Voltar
            </Button>
          </div>
          <div className="banner">
            <div className="banner--img">
              <img src={prod.imgUrl} alt="IMAGEM_PRODUTO" />
            </div>
            <div className="banner--subtitle">
              <p>{prod.name}</p>
              <p>
                {new Intl.NumberFormat("pt-Br", {
                  style: "currency",
                  currency: "BRL",
                }).format(prod.price)}
              </p>
            </div>
          </div>
          <section>
            <h1>Problemas Encontrados</h1>
            <div className="asks">
              <Card>
                <h1>Teste</h1>
                <div>
                <span className="info">12 usuários perguntaram sobre isso nos últimos 90 dias.</span>
                <span className="info">12 usuários perguntaram sobre isso nos últimos 90 dias.</span>
                <span className="info">12 usuários perguntaram sobre isso nos últimos 90 dias.</span>

                </div>
              </Card>
              <div className="kate">
                <h1>A cor é "vermelho"?</h1>
                <p>Baseado em suas respostas</p>
                <div className="icons">
                  <Button icon={faCheck} color="success" />
                  <Button icon={faTimes} color="danger" />
                </div>
              </div>
            </div>
          </section>
          <section>
            <h1>Perguntas não respondidas</h1>
          </section>
          <section>
            <h1>Perguntas respondidas</h1>
          </section>
        </div>
      </div>

      <Modal
        isOpen={modalSuccess}
        success
        message="Alteração feita com sucesso!"
        onClose={() => {
          setModalSuccess(false);
        }}
      />
    </div>
  );
}
