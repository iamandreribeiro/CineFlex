import styled from "styled-components"

export default function Footer(props) {
    return (
        <StyledFooter>
            <StyledMovieContainer>
                <img src={props.imgFilme} />
            </StyledMovieContainer>
            <StyledTextContainer>
                <h1>{props.nomeFilme}</h1>
                <h1>{props.dataFilme} - {props.horaFilme}</h1>
            </StyledTextContainer>
        </StyledFooter>
    )
};

const StyledFooter = styled.div`    
    width: 100vw;
    height: 120px;
    margin-bottom: 20px;
    padding: 10px;
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
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
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
        margin-left: 5px;
    }
`