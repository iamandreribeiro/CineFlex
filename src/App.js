import GlobalStyle from "./assets/css/GlobalStyles";
import Header from "./Header";
import MovieScreen from "./MovieScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SectionScreen from "./SectionScreen";

export default function App() {
    const [idFilme, setIdFilme] = useState("");

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<MovieScreen setIdFilme={setIdFilme} />} />
                <Route path={`/sessoes/` + idFilme}
                    element={<SectionScreen idFilme={idFilme}/>} />
            </Routes>
        </BrowserRouter>
    )
};