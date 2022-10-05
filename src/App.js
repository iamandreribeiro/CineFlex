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
    const [nome, setNome] = useState("");
    const [CPF, setCPF] = useState([]);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<MovieScreen setIdFilme={setIdFilme}
                    setNomeFilme={setNomeFilme} />} />

                <Route path={`/sessoes/` + idFilme}
                    element={<SectionScreen idFilme={idFilme} setIdSessao={setIdSessao}
                        setDataFilme={setDataFilme} setHoraFilme={setHoraFilme} />} />

                <Route path={`/assentos/` + idSessao} element={<SeatsScreen idSessao={idSessao}
                    selecionados={selecionados} setSelecionados={setSelecionados}
                    setNome={setNome} nome={nome} setCPF={setCPF} CPF={CPF}/>} />

                <Route path={"/reservado"} element={<ReservedScreen selecionados={selecionados}
                    nomeFilme={nomeFilme} dataFilme={dataFilme} horaFilme={horaFilme}
                    nome={nome} CPF={CPF} setSelecionados={setSelecionados}/>} />
            </Routes>
        </BrowserRouter>
    )
};