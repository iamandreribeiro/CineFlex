import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import Seats from "./Seats";

const subTitles = [
    { title: "Selecionado", bgcolor: "#1AAE9E", border: "#0E7D71", data: "seat-selected-subtitle"},
    { title: "Disponível", bgcolor: "#C3CFD9", border: "#7B8B99", data: "seat-available-subtitle"},
    { title: "Indisponível", bgcolor: "#FBE192", border: "#F7C52B", data: "seat-unavailable-subtitle"}
];

let assentosId = [];
let assentosNum = [];

export default function SeatsScreen(props) {
    const navigate = useNavigate();

    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/` +
        props.idSessao + `/seats`;

    const [assentos, setAssentos] = useState([]);

    useEffect(() => {
        const promise = axios.get(URL);

        promise.then((s) => {
            setAssentos(s.data.seats);
        });
    }, [URL]);

    function selecionaAssento(a) {
        if (a.isAvailable && !props.numAssentos.includes(a.name)) {
            assentosId = [...props.idAssentos, a.id];
            assentosNum = [...props.numAssentos, a.name];
        } else if (a.isAvailable && props.numAssentos.includes(a.name)){
            const filteredId = assentosId.filter((x) => x != a.id);
            const filteredNumber = assentosNum.filter((x) => x != a.name);
            props.setIdAssentos(filteredId);
            props.setNumAssentos(filteredNumber);
        } else alert("Esse assento não está disponível");

        props.setIdAssentos(assentosId);
        props.setNumAssentos(assentosNum);
    }

    function preencheReserva() {
        let reserva = {
            ids: props.idAssentos,
            name: props.nome,
            cpf: props.CPF
        };

        fazReserva(reserva);
    }

    function fazReserva(reserva) {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";

        const promise = axios.post(URL, reserva);

        promise.then(() => {
            navigate("/reservado");
        })
    }

    return (
        <StyledContainer>
            <StyledTitle>
                <h1>Selecione o(s) assento(s)</h1>
            </StyledTitle>

            <StyledSeatsScreen>
                {
                    assentos.map((a, i) => {
                        return <Seats idAssentos={props.idAssentos} i={i} name={a.name}
                            isAvailable={a.isAvailable} id={a.id}
                            selecionaAssento={() => { selecionaAssento(a) }} />
                    })
                }
            </StyledSeatsScreen>

            <StyledSubTitle>
                {subTitles.map((s, i) => {
                    return (
                        <StyledIcon key={i}>
                            <StyledCircle bgcolor={s.bgcolor} border={s.border} data-identifier={s.data}/>
                            <h1>{s.title}</h1>
                        </StyledIcon>
                    );
                })}
            </StyledSubTitle>

            <StyledInputContainer>
                <h1>Nome do comprador:</h1>
                <StyledInput
                    placeholder="Digite seu nome..."
                    onChange={(n) => props.setNome(n.target.value)}
                    data-identifier="buyer-name-input"
                />
            </StyledInputContainer>

            <StyledInputContainer>
                <h1>CPF do comprador:</h1>
                <StyledInput
                    placeholder="Digite seu CPF..."
                    onChange={(c) => props.setCPF(c.target.value)}
                    data-identifier="buyer-cpf-input"
                />
            </StyledInputContainer>

            <StyledButton onClick={() => preencheReserva()} data-identifier="reservation-btn">
                Reservar assentos
            </StyledButton>
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 128px;
`;

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
`;

const StyledSeatsScreen = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledSubTitle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const StyledCircle = styled.div`
  background-color: ${(props) => props.bgcolor};
  border: 1px solid ${(props) => props.border};
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const StyledIcon = styled.div`
  width: calc(100vw / 4);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 90vw;
  height: 50px;
  border-radius: 3px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const StyledButton = styled.button`
  background-color: #e8833a;
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
`;
