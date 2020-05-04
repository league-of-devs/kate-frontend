import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
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
import api from "../services/api";

export default function ConfigPage({ match }) {
  const history = useHistory();
  const params = useParams();

  console.log(params);

  const [modalSuccess, setModalSuccess] = useState(false);
  function backPage() {
    history.push("/");
  }


  const [product, setProduct] = useState(false);

  useEffect(() => {

    if (params.product && params.platform) {
      api.get("/product/full_info", { params: { platform: params.platform, product: params.product } })
        .then(response => {
          if (!response.data.error) {
            setProduct(response.data);
          }
        })
        .catch(() => alert("Erro ao requisitar produto"));
    }

  }, []);

  if (!product) return null;

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
              <img src={product.pictures[0].url} alt="IMAGEM_PRODUTO" />
            </div>
            <div className="banner--subtitle">
              <p>{product.title}</p>
              <p>
                {new Intl.NumberFormat("pt-Br", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.payment.price)}
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
            {/* <div className="asks">
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
            </div> */}
            {product.questions && product.questions.map(question => !question.answered && <>
              <div className="asks">
                <Card ask={{name:question.question, date: question.created_at}}/>
                <UnansweredInfo title="Teste" let/>
              </div>
            </>)}
          </section>
          <section>
            <h1>Perguntas respondidas</h1>
            {product.questions && product.questions.map(
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
