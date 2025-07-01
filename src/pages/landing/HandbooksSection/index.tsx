import styled from 'styled-components';
import { Button, SLink, CONTENT_INDEX, MOBILE_MAX_WIDTH } from '~/components';
import StarIcon from '~/public/img/footer/star-icon.svg';
import Handbooks from './Handbooks';

export default function HandbooksSection() {
  return (
    <HandbooksContainer>
      <Divider>
        <DividerLine />
      </Divider>

      <HandbookBlockContainer>
        <Handbooks />
      </HandbookBlockContainer>

      <Icon src={StarIcon.src} />

      <HandbooksSectionBottom>
        <SLink to='https://handbook.wonderland.xyz/docs/intro/welcome' external>
          <HandbooksButton>Enter the rabbit hole</HandbooksButton>
        </SLink>
      </HandbooksSectionBottom>
    </HandbooksContainer>
  );
}

const HandbooksContainer = styled.section`
  width: 100%;
  padding: 5rem 7.5rem 10rem 2.5rem;
  position: relative;
  display: grid;
  grid-template-areas:
    'empty handbooksDivider'
    'empty handbookBlock'
    'icon handbooksSectionBottom';
  grid-template-columns: 5rem auto;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 0;
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
  }
`;

const Icon = styled.img.attrs({ loading: 'lazy', alt: '' })`
  grid-area: icon;
  width: 5rem;
  padding: 0 1.1rem;
  height: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.5);

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    display: none;
  }
`;

const HandbookBlockContainer = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  grid-area: handbookBlock;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    border-left: none;
  }
`;

const Divider = styled.div`
  grid-area: handbooksDivider;
  z-index: ${CONTENT_INDEX};

  background-image: linear-gradient(
    to right,
    rgba(14, 21, 44, 1),
    rgba(252, 204, 80, 0.2) 40%,
    rgba(197, 95, 163, 0.15),
    rgba(98, 92, 191, 0.15),
    rgba(14, 21, 44, 1) 95%
  );

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    background-image: linear-gradient(
      to right,
      rgba(14, 21, 44, 1),
      rgba(252, 204, 80, 0.25) 30%,
      rgba(197, 95, 163, 0.25),
      rgba(14, 21, 44, 1) 95%
    );
  }
`;

const DividerLine = styled.div`
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(14, 21, 44, 0) 100%
  );
  height: 1px;
  width: 100%;
`;

const HandbooksSectionBottom = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 1.6rem 0 1.6rem 4.4rem;
  grid-area: handbooksSectionBottom;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    display: flex;
    flex-direction: column;
    padding: 0;
    border-left: none;
    border: none;
  }
`;

const HandbooksButton = styled(Button)`
  margin: 0 8rem 0 auto;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin: 3rem auto;
  }
`;
