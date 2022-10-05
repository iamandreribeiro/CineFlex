import styled from "styled-components";
import GlobalStyle from "./assets/css/GlobalStyles";
import Header from "./Header";
import MovieScreen from "./MovieScreen";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <StyledContainer>
                <Header />
                <MovieScreen />
            </StyledContainer>
        </>
    )
};

const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;  
`