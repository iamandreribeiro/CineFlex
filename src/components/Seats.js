import styled from "styled-components";

export default function Seats(props) {
    return (
        <StyledSeatButton
            key={props.i}
            onClick={() => props.selecionaAssento(props.a)}
            color={props.isAvailable}
            bgcolor={props.idAssentos.includes(props.id)}
            data-identifier="seat"
        >
            {props.name}
        </StyledSeatButton>
    );
};

const StyledSeatButton = styled.button`
  background-color: ${props => props.color ? props => props.bgcolor ? "#1AAE9E" : "#C3CFD9" : "#FBE192"};
  border: 1px solid ${props => props.color ? props => props.bgcolor ? "#0E7D71" : "#808F9D" : "#F7C52B"};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 2px;
  cursor: pointer;
  :active {
    position: relative;
    top: 1px;
  }
`;
