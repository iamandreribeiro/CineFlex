import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"
import Sections from "./Sections";

export default function SectionScreen(props) {
    const [sessoes, setSessoes] = useState([]);

    const URL =
        `https://mock-api.driven.com.br/api/v8/cineflex/movies/` +
        props.idFilme +
        `/showtimes`;

    useEffect(() => {
        const promise = axios.get(URL);
        promise.then((s) => setSessoes(s.data.days));
    }, [URL]);

    function pegaData(date) {
        props.setDataFilme(date);
    }

    return (
        <StyledContainer>
            <StyledTitle>
                <h1>Selecione o horário</h1>
            </StyledTitle>

            {sessoes.map((s, i) => {
                return <Sections s={s} i={i} setIdSessao={props.setIdSessao} 
                    setHoraFilme={props.setHoraFilme} 
                    pegaData={() => {pegaData(s.date)}}/>
            })}

        </StyledContainer>
    );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
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
