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
              <Card >
                <h1>Teste</h1>
                <div>
                  <span className="info">
                    12 usuários perguntaram sobre isso nos últimos 90 dias.
                  </span>
                  <span className="info">
                    12 usuários perguntaram sobre isso nos últimos 90 dias.
                  </span>
                  <span className="info">
                    12 usuários perguntaram sobre isso nos últimos 90 dias.
                  </span>
                </div>
              </Card>
              <div className="kate">
                <div className="info">
                  <h1>A cor é "vermelho"?</h1>
                  <p>Baseado em suas respostas</p>
                </div>
                <div className="action">
                  <div className="flex">
                    <Button icon={faCheck} color="success" />
                    <Button icon={faTimes} color="danger" />
                  </div>
                </div>
              </div>
            </div>
            
          </section>
          <section>
            <h1>Perguntas não respondidas</h1>
            <div className="asks">
              <Card>
                <h1>Se eu bater com gelo eu posso danificar o produto?</h1>
                <div>
                  <span className="info">
                    Por Júlia
                  </span>
                  <span className="info">
                    Em 01/05/2020 às 15:53
                  </span>
                </div>
              </Card>
              <div className="kate">
                <div className="info">
                  <h1>Nenhum padrão identificado</h1>
                </div>
                <div className="action">
                  <div className="flex">
                    <Button >Responder</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="asks">
              <Card>
                <h1>Qual a cor do produto?</h1>
                <div>
                  <span className="info">
                    Por Jorge
                  </span>
                  <span className="info">
                    Em 29/04/2020 às 12:24
                  </span>
                </div>
              </Card>
              <div className="kate">
                <div className="info">
                  <h1>Kate pode responder essa!</h1>
                  <p>Segundo o anúncio, a cor é vermelha</p>
                </div>
                <div className="action">
                  <div className="flex">
                    <Button color="success" type="">Deixa com a Kate</Button>
                    <Button >Responder</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="asks">
              <Card>
                <h1>A tensão é 110V ou 220V?</h1>
                <div>
                  <span className="info">
                    Por Joelma
                  </span>
                  <span className="info">
                    Em 29/04/2020 às 09:15
                  </span>
                </div>
              </Card>
              <div className="kate">
                <div className="info">
                  <h1>Padrão identificado</h1>
                  <p>Essa pergunta é sobre tensão</p>
                </div>
                <div className="action">
                  <div className="flex">
                    <Button >Responder</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h1>Perguntas respondidas</h1>
                
            <div className="asks">
              <Card>
                <h1>Qual a marca do produto?</h1>
                <div>
                  <span className="info">
                    Por Joelma
                  </span>
                  <span className="info">
                    Em 29/04/2020 às 09:15
                  </span>
                </div>
              </Card>
              <div className="kate">
                <div className="info">
                  <h1>Pergunta</h1>
                  <p>Essa pergunta é sobre tensão</p>
                  <p>Essa pergunta é sobre tensão</p>
                  <p>Essa pergunta é sobre tensão</p>
                </div>
              </div>
            </div>
            <div className="asks answered">
              <Card>
                <h1>Olá, Antônio! A marca do produto em questão é Mondial. Atenciosamente, Alex.</h1>
                <div>
                  <span className="info">
                    Por Kate
                  </span>
                  <span className="info">
                    Em 27/04/2020 às 13:43
                  </span>
                </div>
              </Card>
              <div className="kate">
                <div className="info">
                  <h1>Resposta</h1>
                  <p>Essa pergunta é sobre tensão</p>
                  <p>Essa pergunta é sobre tensão</p>
                  <p>Essa pergunta é sobre tensão</p>
                </div>
              </div>
            </div>


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
