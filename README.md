# 📄 Documentação do Componente Card

Este documento fornece uma visão geral do componente **Card**, um componente React utilizado para exibir informações sobre um produto – neste caso, um perfume.

## 🏗️ Estrutura do Projeto
O componente **Card** é composto por um arquivo JavaScript chamado **Card.js** e um arquivo CSS para estilização chamado **Card.css**. Além disso, ele importa uma imagem do produto a partir do diretório **img**.

## 📦 Descrição do Componente
O componente **Card** é uma função que retorna um JSX representando um cartão de produto. Ele inclui uma imagem do produto, um título, uma descrição, informações de preço e um botão para adicionar o produto ao carrinho.

### Importações
```javascript
import ImgProdut from './img/image-product-desktop.jpg' // 🖼️ Imagem do produto
import './Card.css' // 🎨 Estilos para o componente


### Estrutura do Componente
Abaixo está o JSX básico para o componente **Card**:

```javascript
function Card() {
    return (
        <>
            <div className="card">
                <div className="card_main">
                    <div className='card_main_img'>
                        <div>
                            <img src={ImgProdut} alt="Perfume" />
                        </div>
                    </div>
                    <div className='cardMainDescription'>
                        <p className='card_title_primary'>PERFUME</p>
                        <p className='card_title_second'>Gabrielle Essence Eau De Parfum</p>
                        <p className='card_title_third'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                        <div className='card_price'>
                            <span className='price_primary'>$149.99</span> {/* Preço com desconto */}
                            <span className='price_second'>$169.99</span> {/* Preço original */}
                        </div>
                        <div className="button">
                            <button>Add to Cart</button> {/* 🛒 Botão para adicionar ao carrinho */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
```

## 📝 Elementos do Componente

- **🗂️ Div Principal (card):** Contém todo o conteúdo do cartão.
  
- **🖼️ Div da Imagem (card_main_img):** Responsável por exibir a imagem do produto.
  - A imagem é carregada utilizando a tag `<img>` com a fonte definida pela importação `ImgProdut`.

- **📜 Div da Descrição (cardMainDescription):** Contém as informações do produto.
  - **🏷️ Título Primário:** Indica que o item é um perfume.
  - **💬 Título Secundário:** Nome do perfume.
  - **📖 Descrição:** Uma breve descrição do perfume.

- **💲 Div de Preço (card_price):** Exibe o preço do produto.
  - **🔖 Preço Primário:** Preço com desconto.
  - **🔖 Preço Secundário:** Preço original.

- **🛒 Botão:** Um botão que permite ao usuário adicionar o produto ao carrinho.

## 🎨 Estilização
A estilização do componente é feita no arquivo **Card.css**, que deve conter as regras de estilo para as classes utilizadas no JSX. As classes incluem **card**, **card_main**, **card_main_img**, **cardMainDescription**, **card_title_primary**, **card_title_second**, **card_title_third**, **card_price**, **price_primary**, **price_second**, e **button**.

## 🚀 Exportação do Componente
O componente **Card** é exportado como padrão para que possa ser utilizado em outras partes da aplicação:

```javascript
export default Card;
```

## 🏁 Conclusão
O componente **Card** é uma parte essencial da interface de usuário, permitindo que os usuários visualizem informações sobre um perfume de forma clara e atraente. A estrutura modular e a utilização de CSS para estilização facilitam a manutenção e a personalização do componente.
