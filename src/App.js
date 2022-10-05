import GlobalStyle from "./assets/css/GlobalStyles";
import Header from "./Header";
import MovieScreen from "./MovieScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SectionScreen from "./SectionScreen";
import SeatsScreen from "./SeatsScreen";

export default function App() {
    const [idFilme, setIdFilme] = useState("");
    const [idSessao, setIdSessao] = useState("");
    const [selecionados, setSelecionados] = useState([]);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<MovieScreen setIdFilme={setIdFilme} />} />
                <Route path={`/sessoes/` + idFilme}
                    element={<SectionScreen idFilme={idFilme} setIdSessao={setIdSessao} />} />
                <Route path={`/assentos/` + idSessao}
                    element={<SeatsScreen idSessao={idSessao} selecionados={selecionados}
                    setSelecionados={setSelecionados}/>} />
            </Routes>
        </BrowserRouter>
    )
};