import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios";

const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";

export default function MovieScreen() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const promise = axios.get(URL);
        promise.then((n) => setFilmes(n.data));
    }, [])

    return (
        <>
            <StyledTitle>
                <h1>Selecione o Filme</h1>
            </StyledTitle>
            <StyledMovieScreen>
                {
                    filmes.map((f) => {
                        return (
                            <StyledMovieContainer>
                                <img id={f.id} src={f.posterURL} />
                            </StyledMovieContainer>
                        )
                    })
                }
            </StyledMovieScreen>
        </>
    )
};

const StyledTitle = styled.div`
    height: 100px;
    width: 100vw;
    text-align: center;
    margin-top: 80px;
    padding-top: 50px;
    h1 {
        font-size: 24px;
        font-weight: 400px;
    }
`

const StyledMovieScreen = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`

const StyledMovieContainer = styled.div`
    background-color: white;
    width: 40%;
    height: 40%;
    padding: 8px;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.3);
    img {
        width: 100%;
        height: 100%;
    }
`