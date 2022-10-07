import styled from "styled-components"

export default function Footer(props) {
    return (
        <StyledFooter>
            <StyledContainer>
                <StyledMovieContainer>
                    <img src={props.imgFilme} />
                </StyledMovieContainer>
                <StyledTextContainer>
                    <h1>{props.nomeFilme}</h1>
                    <h1>{props.dataFilme} {props.horaFilme}</h1>
                </StyledTextContainer>
            </StyledContainer>
        </StyledFooter>
    )
};

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
`

const StyledFooter = styled.div`
    background-color: #DFE6ED;    
    position: fixed;
    bottom: 0; 
    left: 0;
    width: 100vw;
    display: flex;
    align-items: center;
`

const StyledMovieContainer = styled.div`
  background-color: white;
  width: 20%;
  height: 100%;
  padding: 8px;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    h1 {
        font-weight: 400;
        font-size: 20px;
        margin: 5px 0 0 5px;
    }
`