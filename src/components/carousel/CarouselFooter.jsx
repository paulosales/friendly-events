import styled from "styled-components";

const CarouselFooter = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  margin-top: -110px;
  
  @media screen and (max-width: 424px) {
    flex-direction: column;
    margin-top: -180px;
  }

  @media screen and (min-width: 425px) and (max-width: 900px) {
    flex-direction: column;
    margin-top: -220px;
  }
`

export default CarouselFooter
