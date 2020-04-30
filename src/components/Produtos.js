import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    gap: 0.5rem;
    padding: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

const BarraTopo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15.5rem;
    border: 1px orange dashed;
`


class Produtos extends React.Component {
    state = {
        produtos: [
            {
                link:"https://picsum.photos/240/240?random=1",
                alt: "Imagem produto 1",
                produto: "Produto1",
                preco: 56
            },
            {
                link:"https://picsum.photos/240/240?random=2",
                alt: "Imagem produto 2",
                produto: "Produto2",
                preco: 87
            },
            {
                link:"https://picsum.photos/240/240?random=3",
                alt: "Imagem produto 3",
                produto: "Produto3",
                preco: 99
            },
            {
                link:"https://picsum.photos/240/240?random=4",
                alt: "Imagem produto 4",
                produto: "Produto4",
                preco: 66
            },
            {
                link:"https://picsum.photos/240/240?random=5",
                alt: "Imagem produto 5",
                produto: "Produto5",
                preco: 72
            },
            {
                link:"https://picsum.photos/240/240?random=6",
                alt: "Imagem produto 6",
                produto: "Produto6",
                preco: 129
            },
            {
                link:"https://picsum.photos/240/240?random=7",
                alt: "Imagem produto 7",
                produto: "Produto7",
                preco: 48
            },
            {
                link:"https://picsum.photos/240/240?random=8",
                alt: "Imagem produto 8",
                produto: "Produto8",
                preco: 288
            }
        ]
    }
    render() {

        const listaProdutos = this.state.produtos.map((produtoIndividual) => {
                return (
                    <Card>
                        <img src={produtoIndividual.link} alt={produtoIndividual.alt} />
                        <p>{produtoIndividual.produto}</p>
                        <p>R$ {produtoIndividual.preco}</p>
                        <button>Adicionar ao Carrinho</button>
                    </Card>
                )
        })

        return (
            <div>
                <BarraTopo>
                    <p>Quantidade de produtos: 8</p>
                    <select>
                        <option value={"crescente"}>Preço: Crescente</option>
                        <option value={"decrescente"}>Preço: Decrescente</option>
                    </select>
                </BarraTopo>
                <Container>
                    {listaProdutos}
                </Container>
            </div>
        )
    }

}

export default Produtos;