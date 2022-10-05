import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios";
import { Link } from "react-router-dom";

export default function MovieScreen(props) {
    const [filmes, setFilmes] = useState([]);

    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";

    useEffect(() => {
        const promise = axios.get(URL);
        promise.then((f) => {
            setFilmes(f.data)
        });
    }, [URL]);

    function pegaDados(f) {
        props.setIdFilme(f.id);
        props.setNomeFilme(f.title);
    }

    return (
        <>
            <StyledTitle>
                <h1>Selecione o filme</h1>
            </StyledTitle>
            <StyledMovieScreen>
                {
                    filmes.map((f, i) => {
                        return (
                            <StyledMovieContainer>
                                <Link to={`/sessoes/`+f.id}>
                                    <img id={f.id} src={f.posterURL} key={i}
                                        onClick={() => pegaDados(f)}  alt="f.title"/>
                                </Link>
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
    padding-top: 50px;
    margin-top: 80px;
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