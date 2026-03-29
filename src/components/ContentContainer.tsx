import StyledPageView from './StyledPageView';

interface Props {
  children: React.ReactNode;
}

export const ContentContainer = ({ children }: Props) => {
  return <StyledPageView>{children}</StyledPageView>;
};
