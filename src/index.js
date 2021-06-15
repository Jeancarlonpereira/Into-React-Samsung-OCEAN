import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function CardItens(props) {
  return (
    <div className="card_itens">
      <h2>{props.nome}</h2>
      <img src={props.imagem} alt="thor" width="300" height="300" />
    </div>
  );
}

function ListItens() {
  return (
    <>
      <div className="list_itens">
        <CardItens
          nome="Thor"
          imagem="https://static.wikia.nocookie.net/marveldatabase/images/5/55/Thor_Odinson_%28Earth-616%29_from_Empyre_Vol_1_1_001.jpg"
        />
        <CardItens
          nome="Iron Man"
          imagem="https://static.wikia.nocookie.net/marveldatabase/images/0/0a/Iron_Man_Vol_6_1_Brooks_Variant_Textless.jpg"
        />
        <CardItens
          nome="Spider man"
          imagem="https://i.pinimg.com/originals/31/81/6e/31816ec134a62eafbcba4783f35d3002.jpg"
        ></CardItens>
      </div>
    </>
  );
}

function App() {
  return <ListItens />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
