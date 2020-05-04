import React, { useState, useEffect } from "react";
import { faPlus, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import Product from "../components/Product";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Success from "../components/Success";

export default function ProductsPage() {
  const [modalIntegration, setModalIntegration] = useState(false);
  const [integrationSuccess, setIntegrationSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [platformValue, setPlatformValue] = useState("");
  useEffect(() => {
    document.title = searchValue;
  }, [searchValue]);
  const platforms = ["mercado_livre"];

  function handleSyncWithPlatform() {
    alert(platformValue);

  }
  const prods = [
    {
      id: "MLB1511340551",
      title: "Produto De Teste - Não Ofertar",
      platform: "mercado_livre",
      price: 15,
      base_price: 15,
      picture:
        "http://mlb-s2-p.mlstatic.com/896714-MLB41611013048_052020-O.jpg",
    },
  ];
  return (
    <>
      <Header type='productsPage' search={searchValue} callback={(e) => { setSearchValue(e); }} />

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
                  prod.title.toUpperCase().includes(searchValue.toUpperCase()) &&
                  <Product prod={prod} key={prod.id} />
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
                  <select name="marketplace" id="marketplace" value={platformValue} onChange={e => { setPlatformValue(e.target.value); }} className="platform">
                    {platforms.map(platform => <option key={platform} value={platform}>{platform.replace("_", " ")}</option>)}
                  </select>
                </div>
                <Success message="Tudo certo!" isSuccess={integrationSuccess} />
              </div>
              <Button
                type="large"
                icon={faExternalLinkAlt}
                onClick={() => {
                  setIntegrationSuccess(true);
                  handleSyncWithPlatform();
                }}
              >
                Conceder acesso
              </Button>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
