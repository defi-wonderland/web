import styled from "styled-components";

const STitle = styled.img`
  width: 1121px;
  height: 374px;
`;

const HeroDivider = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 320px;
`;

function PortFolio() {
  return (
    <div>
      <STitle></STitle>
      PortFolio
    </div>
  );
}

export default PortFolio;
