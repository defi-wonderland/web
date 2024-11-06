import { styled } from 'styled-components';
import Footer from '~/containers/Footer';

const Join = () => {
  return (
    <JoinContainer>
      <Footer />
    </JoinContainer>
  );
};

export default Join;

const JoinContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: -6rem;
  justify-content: center;
  align-items: center;

  .background-container {
    overflow: visible;
  }
`;
