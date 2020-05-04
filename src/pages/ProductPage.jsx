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
import AnsweredInfo from "../components/AnsweredInfo";
import UnansweredInfo from "../components/UnansweredInfo";

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

  const api = {
    "id": "MLB1511340551",
    "title": "Produto De Teste - Não Ofertar",
    "payment": {
      "price": 15,
      "base_price": 15,
      "currency": "BRL",
      "accepts_mercadopago": true
    },
    "pictures": [
      {
        "id": "896714-MLB41611013048_052020",
        "url": "http://mlb-s2-p.mlstatic.com/896714-MLB41611013048_052020-O.jpg",
        "secure_url": "https://mlb-s2-p.mlstatic.com/896714-MLB41611013048_052020-O.jpg",
        "size": "500x248",
        "max_size": "660x328",
        "quality": ""
      }
    ],
    "attributes": {
      "Dimensões": "500mm",
      "Altura": "13 mm",
      "Marca": "Marca de Testeb",
      "Condição do item": "Novo",
      "Modelo": "modelobbg"
    },
    "available_quantity": 1,
    "user_kindness_level": 1,
    "suggestions": [],
    "description": "Item de Teste\nAtributo1: Teste\nAtributo2= Teste 3\n(Atributo5) Cor dfirente\nCor da Peça (Amarelo Testbca)\n(aafa): bbbbbaab\nTamanho: 500mm\nMarca: Intel Core I7\n b",
    "questions": [
      {
        "answered_by": 0,
        "question": "qUAL A COR?",
        "answer": null,
        "pattern": null,
        "created_at": "2020-05-03T23:14:30.000Z",
        "answered_at": null,
        "id": 66,
        "kindness": 0,
        "kindness_info": {
          "greetings": false,
          "bye": false
        },
        "delay": -1588547670,
        "answered": false,
        "equals_questions": 0,
        "suggestion": {
          "source": "7100734270",
          "name": "cor",
          "value": null,
          "id": 4
        }
      },
      {
        "answered_by": "kate",
        "question": "qUAL A MARCA?",
        "answer": "Boa tarde, fugindo do conoravírus, né? O produto em questão apresenta o(a) marca igual a Marca de Testeb",
        "pattern": null,
        "created_at": "2020-05-03T23:55:47.000Z",
        "answered_at": "2020-05-03T23:55:48.000Z",
        "id": 67,
        "kindness": 1,
        "kindness_info": {
          "greetings": false,
          "bye": false
        },
        "delay": 1,
        "answered": true,
        "equals_questions": 0
      },
      {
        "answered_by": "kate",
        "question": "Qual o modelo do produto?",
        "answer": "Boa tarde, fugindo do conoravírus, né? O produto em questão apresenta o(a) modelo igual a modelobbg",
        "pattern": null,
        "created_at": "2020-05-04T00:02:00.000Z",
        "answered_at": "2020-05-04T00:02:01.000Z",
        "id": 68,
        "kindness": 1,
        "kindness_info": {
          "greetings": false,
          "bye": false
        },
        "delay": 1,
        "answered": true,
        "equals_questions": 0
      },
      {
        "answered_by": "kate",
        "question": "Qual o modelo do produto?",
        "answer": "Boa tarde, o produto em questão apresenta o(a) modelo igual a modelobbg",
        "pattern": null,
        "created_at": "2020-05-04T00:03:00.000Z",
        "answered_at": "2020-05-04T00:03:01.000Z",
        "id": 69,
        "kindness": 1,
        "kindness_info": {
          "greetings": false,
          "bye": false
        },
        "delay": 1,
        "answered": true,
        "equals_questions": 0
      },
      {
        "answered_by": "kate",
        "question": "Qual o modelo?",
        "answer": "Boa tarde, tudo bem com você? O produto em questão apresenta o(a) modelo igual a modelobbg",
        "pattern": "marca",
        "created_at": "2020-05-04T00:03:47.000Z",
        "answered_at": "2020-05-04T00:03:48.000Z",
        "id": 70,
        "kindness": 1,
        "kindness_info": {
          "greetings": false,
          "bye": false
        },
        "delay": 1,
        "answered": true,
        "equals_questions": 1
      },
      {
        "answered_by": "kate",
        "question": "Qual a marca?",
        "answer": "Boa tarde, o produto em questão apresenta o(a) marca igual a Marca de Testeb",
        "pattern": "marca",
        "created_at": "2020-05-04T00:06:09.000Z",
        "answered_at": "2020-05-04T00:06:12.000Z",
        "id": 71,
        "kindness": 1,
        "kindness_info": {
          "greetings": false,
          "bye": false
        },
        "delay": 3,
        "answered": true,
        "equals_questions": 1
      }
    ],
    "attribute_suggestions": []
  }
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
              <img src={api.pictures[0].url} alt="IMAGEM_PRODUTO" />
            </div>
            <div className="banner--subtitle">
              <p>{api.title}</p>
              <p>
                {new Intl.NumberFormat("pt-Br", {
                  style: "currency",
                  currency: "BRL",
                }).format(api.payment.price)}
              </p>
            </div>
          </div>
          <section>
            <h1>Problemas Encontrados</h1>
            <div className="asks">
              <Card ask={{name:"Teste"}}>
                {/* <h1>Teste</h1> */}
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
                <span className="info">Em 01/05/2020 às 15:53</span>
              </Card>
              <div className="kate">
                <div className="info">
                  <h1>Nenhum padrão identificado</h1>
                </div>
                <div className="action">
                  <div className="flex">
                    <Button>Responder</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="asks">
              <Card>
                <h1>Qual a cor do produto?</h1>
                  <span className="info">Em 29/04/2020 às 12:24</span>
              </Card>
              <div className="kate">
                <div className="info">
                  <h1>Kate pode responder essa!</h1>
                  <p>Segundo o anúncio, a cor é vermelha</p>
                </div>
                <div className="action">
                  <div className="flex">
                    <Button color="success" type="">
                      Deixa com a Kate
                    </Button>
                    <Button>Responder</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="asks">
            {api.questions.map(question => !question.answered &&  <>
              <Card ask={{name:question.question, date: question.created_at}}/>
              <UnansweredInfo let/>
              </>)}
            </div>
          </section>
          <section>
            <h1>Perguntas respondidas</h1>
            {api.questions.map(
              (question) =>
                question.answered && (
                  <>
                    <div className="asks">
                      <Card
                        ask={{
                          name: question.question,
                          date: question.created_at,
                        }}
                      />
                      <AnsweredInfo
                        type="question"
                        info={[question.pattern, question.equals_questions]}
                      />
                    </div>
                    <div className="asks answered">
                      <Card
                        ask={{
                          name: question.answer,
                          clientName: question.answered_by,
                          date: question.answered_at,
                        }}
                      />
                      <AnsweredInfo
                        type="answer"
                        info={["120", question.kindness, question.answered_by]}
                      />
                    </div>
                  </>
                )
            )}
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
