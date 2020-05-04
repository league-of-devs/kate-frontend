import React, { useState,useEffect } from "react";
import { faPlus, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import Product from "../components/Product";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Success from "../components/Success";


import api from "../services/api";
import { useSelector } from "react-redux";

export default function ProductsPage() {
  const [modalIntegration, setModalIntegration] = useState(false);
  const [integrationSuccess, setIntegrationSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [platformValue, setPlatformValue] = useState("mercado_livre");
  const [platforms, setPlatforms] = useState([]);
  const [products, setProducts] = useState([]);

  const syncs = useSelector(state => state.Syncs);

  useEffect(() => {
    api.get("/kate/platforms")
      .then(response => {
        if (!response.data.error) {
          setPlatforms(response.data);
        }
      })
      .catch(() => alert("Erro ao fazer requisição dos marketplaces"));

    api.get("/user/products")
      .then(response => {
        if (!response.data.error) {
          setProducts(response.data);
        }
      })
      .catch(() => alert("Erro ao fazer requisição dos produtos"));
  }, []);

  function handleSyncWithPlatform() {
    api.post("/user/sync_with_platform", { platform: platformValue })
      .then(response => {
        if (response.data.link) {
          window.open(response.data.link, "_blank");
        }
      })
      .catch(() => alert("Erro ao tentar adicionar integração"));
  }

  return (
    <>
      <Header type='productsPage' search={searchValue} callback={(e) => { setSearchValue(e); }} />

      <div className="container main colored">
        <div className="container">
          <div className="page products-page">
            <div className="title">
              <h1>Meus anúncios</h1>
              {syncs.length > 0 && (
                <Button
                  icon={faPlus}
                  color="success"
                  onClick={() => {
                    setModalIntegration(true);
                  }}
                />
              )}
            </div>
            {products.length > 0 && (
              <div className="products">
                {products.map((prod) => (
                  prod.title.toUpperCase().includes(searchValue.toUpperCase()) &&
                  <Product prod={prod} key={prod.id} />
                ))}
              </div>
            )}

            {syncs.length === 0 && (
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
                    {platforms.filter(x => !syncs.includes(x)).map(platform => <option key={platform} value={platform}>{platform.replace("_", " ")}</option>)}
                    {platforms.filter(x => !syncs.includes(x)).length === 0 && (
                      <option selected disabled>Nenhuma integração disponível</option>
                    )}
                  </select>
                </div>
                <Success message="Tudo certo!" isSuccess={integrationSuccess} />
              </div>
              {platforms.filter(x => !syncs.includes(x)).length > 0 && (
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
              )}
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
