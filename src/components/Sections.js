import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sections(props) {
    return (
        <StyledSectionContainer key={props.i}>
            <h data-identifier="session-date">
                {props.s.weekday} - {props.s.date}
            </h1>
            {props.s.showtimes.map((d) => {
                return (
                    <Link to={`/assentos/` + d.id}>
                        <StyledButton data-identifier="hour-minute-btn"
                            onClick={() => {
                                props.setIdSessao(d.id);
                                props.setHoraFilme(d.name);
                                props.pegaData(props.s.date);
                            }}
                        >
                            {d.name}
                        </StyledButton>
                    </Link>
                );
            })}
        </StyledSectionContainer>
    );
};

const StyledSectionContainer = styled.div`
  margin-bottom: 30px;
  padding-left: 20px;
  h1 {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

const StyledButton = styled.button`
  background-color: #e8833a;
  color: white;
  width: 83px;
  height: 43px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  :active {
    position: relative;
    top: 1px;
  }
`;
