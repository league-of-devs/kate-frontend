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
  const [counter, setCounter] = useState(0);
  console.log(params);

  const [modalSuccess, setModalSuccess] = useState(false);
  function backPage() {
    history.push("/");
  }

  const [product, setProduct] = useState(false);

  useEffect(() => {
    if (params.product && params.platform) {
      api
        .get("/product/full_info", {
          params: { platform: params.platform, product: params.product },
        })
        .then((response) => {
          if (!response.data.error) {
            setProduct(response.data);
            setCounter(
              response.data.questions.filter((x) => x.answered === false).length
            );
            console.log(response.data);
          }
        })
        .catch(() => alert("Erro ao requisitar produto"));
    }
   
  }, []);

  function handleUpdateDescript(suggestion){
    console.log(suggestion.id);
    api.post("/user/suggestion/attribute",{"suggestion": suggestion.id, accept:true}).then(res => alert(res.data)).catch(err => alert(err));
    // document.location.reload();
  }
  function handleDeleteSuggetion(suggestion){
    console.log(suggestion.id);
    api.post("/user/suggestion/attribute",{"suggestion": suggestion.id, accept:false}).then(res => alert(res.data)).catch(err => alert(err));
    // document.location.reload();
  }
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
          {product.attribute_suggestions.length > 0 && (
            <section>
              <h1>Problemas Encontrados</h1>
              {product.attribute_suggestions.map((problems) => (
                <>
                  <div className="asks">
                    <Card
                      ask={{
                        name: `O atributo ${problems.name} do seu produto é ${problems.value} ?`,
                      }}
                    />
                    <div className="kate">
                      <div className="info">
                        <p>Baseado na descrição</p>
                      </div>
                      <div className="action">
                        <div className="flex">
                          <Button icon={faCheck} onClick={()=>handleUpdateDescript(problems)} color="success" />
                          <Button icon={faTimes} onClick={()=>handleDeleteSuggetion(problems)} color="danger" />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </section>
          )}
          {!!counter && (
            <section>
              <h1>Perguntas não respondidas</h1>
              {product.questions.map(
                (question) =>
                  !question.answered && (
                    <>
                      <div className="asks">
                        <Card
                          ask={{
                            name: question.question,
                            date: question.created_at,
                          }}
                        />
                        <UnansweredInfo title="Teste" let />
                      </div>
                    </>
                  )
              )}
            </section>
          )}

          <section>
            <h1>Perguntas respondidas</h1>
            {product.questions &&
              product.questions.map(
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
                          info={[
                            question.delay,
                            question.kindness,
                            question.answered_by,
                          ]}
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
