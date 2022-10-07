import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import SectionScreen from "./components/SectionScreen";
import SeatsScreen from "./components/SeatsScreen";
import ReservedScreen from "./components/ReservedScreen";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./assets/css/GlobalStyles";

export default function App() {
    const [imgFilme, setImgFilme] = useState("");
    const [idFilme, setIdFilme] = useState("");
    const [idSessao, setIdSessao] = useState("");
    const [nomeFilme, setNomeFilme] = useState("");
    const [dataFilme, setDataFilme] = useState("");
    const [horaFilme, setHoraFilme] = useState("");
    const [idAssentos, setIdAssentos] = useState([]);
    const [numAssentos, setNumAssentos] = useState([]);
    const [nome, setNome] = useState("");
    const [CPF, setCPF] = useState([]);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route
                    key="1"
                    path="/"
                    element={
                        <MovieScreen
                            setIdFilme={setIdFilme}
                            setNomeFilme={setNomeFilme}
                            setImgFilme={setImgFilme}
                        />
                    }
                />

                <Route
                    key="2"
                    path={`/sessoes/` + idFilme}
                    element={
                        <>
                            <SectionScreen
                                key="2"
                                idFilme={idFilme}
                                setIdSessao={setIdSessao}
                                setDataFilme={setDataFilme}
                                setHoraFilme={setHoraFilme}
                            />

                            <Footer imgFilme={imgFilme} nomeFilme={nomeFilme} />
                        </>
                    }
                />

                <Route
                    key="3"
                    path={`/assentos/` + idSessao}
                    element={
                        <>
                            <SeatsScreen
                                idSessao={idSessao}
                                idAssentos={idAssentos}
                                setIdAssentos={setIdAssentos}
                                setNome={setNome}
                                nome={nome}
                                setCPF={setCPF}
                                CPF={CPF}
                                numAssentos={numAssentos}
                                setNumAssentos={setNumAssentos}
                            />

                            <Footer
                                imgFilme={imgFilme}
                                nomeFilme={nomeFilme}
                                horaFilme={horaFilme}
                                dataFilme={dataFilme}
                            />
                        </>
                    }
                />

                <Route
                    key="4"
                    path={"/reservado"}
                    element={
                        <ReservedScreen
                            idAssentos={idAssentos}
                            setIdAssentos={setIdAssentos}
                            numAssentos={numAssentos}
                            nomeFilme={nomeFilme}
                            dataFilme={dataFilme}
                            horaFilme={horaFilme}
                            nome={nome}
                            CPF={CPF}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
};