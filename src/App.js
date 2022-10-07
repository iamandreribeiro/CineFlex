import Header from "./Header";
import MovieScreen from "./MovieScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SectionScreen from "./SectionScreen";
import SeatsScreen from "./SeatsScreen";
import ReservedScreen from "./ReservedScreen";
import GlobalStyle from "./assets/css/GlobalStyles";

export default function App() {
    const [idFilme, setIdFilme] = useState("");
    const [idSessao, setIdSessao] = useState("");
    const [nomeFilme, setNomeFilme] = useState("");
    const [dataFilme, setDataFilme] = useState("");
    const [horaFilme, setHoraFilme] = useState("");
    const [selecionados, setSelecionados] = useState([]);
    const [assentos, setAssentos] = useState([]);
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
                        <MovieScreen setIdFilme={setIdFilme} setNomeFilme={setNomeFilme} />
                    }
                />

                <Route
                    key="2"
                    path={`/sessoes/` + idFilme}
                    element={
                        <SectionScreen
                            key="2"
                            idFilme={idFilme}
                            setIdSessao={setIdSessao}
                            setDataFilme={setDataFilme}
                            setHoraFilme={setHoraFilme}
                        />
                    }
                />

                <Route
                    key="3"
                    path={`/assentos/` + idSessao}
                    element={
                        <SeatsScreen
                            idSessao={idSessao}
                            selecionados={selecionados}
                            setSelecionados={setSelecionados}
                            setNome={setNome}
                            nome={nome}
                            setCPF={setCPF}
                            CPF={CPF}
                            assentos={assentos}
                            setAssentos={setAssentos}
                        />
                    }
                />

                <Route
                    key="4"
                    path={"/reservado"}
                    element={
                        <ReservedScreen
                            selecionados={selecionados}
                            nomeFilme={nomeFilme}
                            dataFilme={dataFilme}
                            horaFilme={horaFilme}
                            nome={nome}
                            CPF={CPF}
                            setSelecionados={setSelecionados}
                            assentos={assentos}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
};