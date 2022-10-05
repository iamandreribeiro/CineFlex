import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

export default function SectionScreen(props) {
    const [sessoes, setSessoes] = useState([]);

    const URL = `https://mock-api.driven.com.br/api/v4/cineflex/movies/` + props.idFilme + `/showtimes`;

    useEffect(() => {
        const promise = axios.get(URL);
        promise.then((s) => setSessoes(s.data.days));
    }, []);

    function pegaId(id) {
        props.setIdSessao(id);
    }

    return (
        <>
            <StyledTitle>
                <h1>Selecione o horário</h1>
            </StyledTitle>
            <StyledSectionScreen>
                {
                    sessoes.map((s) => {
                        return (
                            <StyledSectionContainer>
                                <h1>{s.weekday} - {s.date}</h1>
                                {s.showtimes.map((d) => {
                                    return (
                                        <Link to={`/assentos/`+d.id}>
                                            <StyledButton onClick={() => pegaId(d.id)}>
                                                {d.name}
                                            </StyledButton>
                                        </Link>
                                    )
                                })}
                            </StyledSectionContainer>
                        )
                    })
                }
            </StyledSectionScreen>
        </>
    )
};

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

const StyledSectionScreen = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledSectionContainer = styled.div`
    width: 100vw;
    h1 {
        font-Weight: 400;
        font-Size: 20px;
    }
`

const StyledButton = styled.button`
    background-color: #E8833A;  
    color: white;
    width: 83px;
    height: 43px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    :active {
        position: relative;
        top: 1px;
    }
`