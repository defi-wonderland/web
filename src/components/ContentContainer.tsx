import { AnimationIn } from './AnimationIn';
import StyledPageView from './StyledPageView';

interface Props {
  children: React.ReactNode;
}
export const ContentContainer = ({ children }: Props) => {
  return (
    <AnimationIn>
      <StyledPageView>{children}</StyledPageView>
    </AnimationIn>
  );
};
