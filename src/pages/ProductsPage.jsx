import React, { useState } from "react";
import { faPlus, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import Product from "../components/Product";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Success from "../components/Success";

export default function ProductsPage(props) {
  const [modalIntegration, setModalIntegration] = useState(false);
  const [integrationSuccess, setIntegrationSuccess] = useState(false);

  const prods = [
    {
      name: "Cafeteira Cafeteira Cafeteira Cafeteira Cafeteira Cafeteira ",
      imgUrl:
        "https://c.mlcdn.com.br/1500x1500/cafeteira-eletrica-lenoxx-master-inox30-xicaras-preta-217126900.jpg",
      price: 245,
    },
  ];

  return (
    <div className="container main colored">
      <div className="container">
        <div className="page products-page">
          <div className="title">
            <h1>Meus anúncios</h1>
            {prods.length > 0 && (
              <Button
                icon={faPlus}
                color="success"
                onClick={() => {
                  setModalIntegration(true);
                }}
              />
            )}
          </div>
          {prods.length > 0 && (
            <div className="products">
              {prods.map((prod) => (
                <Product prod={prod} />
              ))}
            </div>
          )}

          {prods.length === 0 && (
            <div className="noProducts">
              <h3>Você ainda não possui nenhuma integração</h3>
              <p>Mas pode adicionar uma agora :)</p>
              <Button
                color="success"
                type="center"
                onClick={() => {
                  setModalIntegration(true);
                }}
              >
                Adicionar
              </Button>
            </div>
          )}

          <Modal
            isOpen={modalIntegration}
            success={false}
            type={"integration"}
            title="Adicionar integração"
            close
            onClose={() => {
              setModalIntegration(false);
            }}
          >
            <div className="integration">
              <div className="input-field">
                <span> Marketplace </span>
                <select name="marketplace" id="marketplace">
                  <option value="Mercado Livre">Mercado Livre</option>
                  <option value="Amazon">Amazon</option>
                </select>
              </div>
              <Success message="Tudo certo!" isSuccess={integrationSuccess} />
            </div>
            <Button
              type="large"
              icon={faExternalLinkAlt}
              onClick={() => {
                setIntegrationSuccess(true);
              }}
            >
              Conceder acesso
            </Button>
          </Modal>
        </div>
      </div>
    </div>
  );
}
