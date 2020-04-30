import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Product from "../components/Product";
import Button from "../components/Button";

export default function ProductsPage() {
  const prods = [
    {
      name: "sapato",
      price: 156.0,
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1_ehSbzihSKJjy0Fiq6AuiFXaM%2Fman-classic-wedding-shoes-mens-large-sizes-dress-shoes-casual-sapato-derby-shoes-men-business-shoes.jpg&f=1&nofb=1",
    },
    {
      name: "sapato",
      price: 156.0,
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1_ehSbzihSKJjy0Fiq6AuiFXaM%2Fman-classic-wedding-shoes-mens-large-sizes-dress-shoes-casual-sapato-derby-shoes-men-business-shoes.jpg&f=1&nofb=1",
    },
    {
      name: "sapato",
      price: 156.0,
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1_ehSbzihSKJjy0Fiq6AuiFXaM%2Fman-classic-wedding-shoes-mens-large-sizes-dress-shoes-casual-sapato-derby-shoes-men-business-shoes.jpg&f=1&nofb=1",
    },
  ];

  return (
    <div className="container">
      <div className="products-page">
        <div className="title">
          <h1>Meus anúncios</h1>
          {prods.length > 0 && (
            <Button icon={faPlus} color="success" type="rounded" />
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
            <Button label="Adicionar" color="success" type="center" />
          </div>
        )}
      </div>
    </div>
  );
}
