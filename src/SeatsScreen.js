import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"

const subTitles = [
    { title: "Selecionado", bgcolor: "#1AAE9E", border: "#0E7D71" },
    { title: "Disponível", bgcolor: "#C3CFD9", border: "#7B8B99" },
    { title: "Indisponível", bgcolor: "#FBE192", border: "#F7C52B" }
];

let reservar = [];

export default function SeatsScreen(props) {
    const URL = `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/` + props.idSessao + `/seats`;

    const [assentos, setAssentos] = useState([]);

    useEffect(() => {
        const promise = axios.get(URL);
        promise.then((s) => setAssentos(s.data.seats));
    }, []);

    function selecionaAssento(a) {
        if(a.isAvailable) reservar = [...props.selecionados, a.name];
        props.setSelecionados(reservar);
    }

    console.log(props.selecionados);

    return (
        <StyledContainer>
            <StyledTitle>
                <h1>Selecione o(s) assento(s)</h1>
            </StyledTitle>

            <StyledSeatsScreen>
                {
                    assentos.map((a) => {
                        return (
                            <StyledSeatButton onClick={() => selecionaAssento(a)}
                                color={a.isAvailable}>
                                {a.name}
                            </StyledSeatButton>
                        )
                    })
                }
            </StyledSeatsScreen>

            <StyledSubTitle>
                {
                    subTitles.map((s) => {
                        return (
                            <StyledIcon>
                                <StyledCircle bgcolor={s.bgcolor} border={s.border} />
                                <h1>{s.title}</h1>
                            </StyledIcon>
                        )
                    })
                }
            </StyledSubTitle>

            <StyledInputContainer>
                <h1>Nome do comprador:</h1>
                <StyledInput placeholder="Digite seu nome..." />
            </StyledInputContainer>

            <StyledInputContainer>
                <h1>CPF do comprador:</h1>
                <StyledInput placeholder="Digite seu CPF..." />
            </StyledInputContainer>

            <StyledButton>Reservar assentos</StyledButton>
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
        font-size: 24px;
        font-weight: 400px;
    }
`

const StyledSeatsScreen = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 10px;
`

const StyledSeatButton = styled.button`
    background-color: ${props => props.color ? "#C3CFD9" : "#FBE192"};
    border: 1px solid ${props => props.color ? "#808F9D" : "#F7C52B"};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 10px 10px 0;
    cursor: pointer;
    :active {
        position: relative;
        top: 1px;
    }
`

const StyledSubTitle = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 20px;
`

const StyledCircle = styled.div`
    background-color: ${props => props.bgcolor};
    border: 1px solid ${props => props.border};
    width: 25px;
    height: 25px;
    border-radius: 50%;
`

const StyledIcon = styled.div`
    width: calc(100vw/4);   
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledInput = styled.input`
    width: 90vw;
    height: 50px;
    border-radius: 3px;
`

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
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
`