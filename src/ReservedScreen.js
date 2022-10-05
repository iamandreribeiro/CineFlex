import { Link } from "react-router-dom"
import styled from "styled-components"

export default function ReservedScreen(props) {

    return (
        <StyledContainer>
            <StyledTitle>
                <h1>Pedido feito com sucesso!</h1>
            </StyledTitle>
            <StyledBookingContainer>
                <h2>Filme e sessão</h2>
                <h1>{props.nomeFilme}</h1>
                <h1>{props.dataFilme} {props.horaFilme}</h1>
                <h2>Ingressos</h2>
                {
                    props.selecionados.map((s) => {
                        return (
                            <h1>
                                Assento {s}
                            </h1>
                        )
                    })
                }
                <h2>Comprador</h2>
                <h1>Nome: {props.nome}</h1>
                <h1>CPF: {props.CPF}</h1>
            </StyledBookingContainer>
            <StyledButton onClick={() => props.setSelecionados([])}>
                <StyledLink to="/">
                    <h1>Voltar para home</h1>
                </StyledLink>
            </StyledButton>
        </StyledContainer>
    )
};

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledTitle = styled.div`
    height: 100px;
    width: 100vw;
    text-align: center;
    padding-top: 50px;
    margin-top: 80px;
    h1 {
        color: #247A6B;
        font-size: 24px;
        font-weight: 700px;
    }
`

const StyledBookingContainer = styled.div`
    width: 100vw;   
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-left: 20px;
    h2 {
        font-size: 24px;
        font-weight: 700px;
        margin-top: 20px;
    }
    h1 {
        font-size: 22px;
        margin-top: 5px;
    }
`

const StyledButton = styled.button`
    background-color: #E8833A;  
    color: white;
    width: 50vw;
    height: 43px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    margin: 30px 0;    
    :active {
        position: relative;
        top: 1px;
    }
    h1 {
        font-size: 18px;
    }
`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`;