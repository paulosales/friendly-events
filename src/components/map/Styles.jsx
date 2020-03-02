import styled from "styled-components";

export const MapContainer = styled.section`
  height: ${props => props.height?props.height:'400px'};
  width: 100%;
  display: block;
  background-color: #000;
  position: relative;
`