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
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: -5rem;
  justify-content: center;
  align-items: center;

  .background-container {
    display: none;
  }
`;
