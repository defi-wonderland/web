import { GradientTitle } from "~/components/common";
import { MemberContainer, TeamGrid, TitleContainer } from "./TeamGrid.styles";

export const Members = [
  { name: "test1", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test2", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test3", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test4", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test5", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test6", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test7", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test8", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test9", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test10", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test11", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test12", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test13", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test14", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test15", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test16", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test17", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test18", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test19", position: "Position", twitterHandle: "@test", link: "/" },
  { name: "test20", position: "Position", twitterHandle: "@test", link: "/" },
];

export function WonderTeamSection() {
  return (
    <>
      <TitleContainer>
        <GradientTitle title={"WONDER TEAM"} />
      </TitleContainer>
      <TeamGrid>
        {Members.map((member) => (
          <MemberContainer>
            <h1>{member.name}</h1>
            <h3>{member.position}</h3>
            <a href={member.link}>{member.twitterHandle}</a>
          </MemberContainer>
        ))}
      </TeamGrid>
    </>
  );
}
