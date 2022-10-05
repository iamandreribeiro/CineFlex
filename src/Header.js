import styled from "styled-components";

export default function Header() {
    return (
        <StyledHeader>
            <h1>CINEFLEX</h1>
        </StyledHeader>
    )
};

const StyledHeader = styled.div`
    background-color: #C3CFD9;
    width: 100%;
    padding: 30px;
    text-align: center;
    position: fixed;
    top: 0;
    h1 {
        color: #E8833A;
        font-size: 34px;
        font-weight: 400;
    }
`