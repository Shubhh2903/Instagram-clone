import React from "react";
import styled from "styled-components/macro";
import pp from "../images/icon/pp.png";
function Profile() {
  return (
    <Content>
      <StoryWrapper>
        <Story />
        <Namewrapper>
          <Name>shubham_lilawala</Name>
          <SubName>Shubham_lilawala</SubName>
        </Namewrapper>
        <Switch>Switch</Switch>
      </StoryWrapper>
      <Container>
        <SuggestionWrapper>
          <Suggestion>Suggestions For You</Suggestion>
          <See>See All</See>
        </SuggestionWrapper>
        <People>
          <ProfilePP />
          <Suggested>
            <TitleName>shubham_lilawala</TitleName>
            <FollowName>Followed by jasraj_999 + 1 more </FollowName>
          </Suggested>
          <Follow>Follow</Follow>
        </People>
        <People>
          <ProfilePP />
          <Suggested>
            <TitleName>shubham_lilawala</TitleName>
            <FollowName>Followed by harrygandhi._ + 2 more</FollowName>
          </Suggested>
          <Follow>Follow</Follow>
        </People>
        <People>
          <ProfilePP />
          <Suggested>
            <TitleName>shubham_lilawala</TitleName>
            <FollowName>Followed by shivankkk_ + 1 more</FollowName>
          </Suggested>
          <Follow>Follow</Follow>
        </People>
        <People>
          <ProfilePP />
          <Suggested>
            <TitleName>shubham_lilawala</TitleName>
            <FollowName>Followed by nilu._._.45</FollowName>
          </Suggested>
          <Follow>Follow</Follow>
        </People>
        <People>
          <ProfilePP />
          <Suggested>
            <TitleName>shubham_lilawala</TitleName>
            <FollowName>Followed by mr.d_2702 + 7 more</FollowName>
          </Suggested>
          <Follow>Follow</Follow>
        </People>
        <Footer>
          <li>
            <Span>About</Span>
          </li>
          <li>
            <Span>Help</Span>
          </li>
          <li>
            <Span>Press</Span>
          </li>
          <li>
            <Span>API</Span>
          </li>
          <li>
            <Span>Jobs</Span>
          </li>
          <li>
            <Span>Privacy</Span>
          </li>
          <li>
            <Span>Terms</Span>
          </li>
          <li>
            <Span>Locations</Span>
          </li>
          <li>
            <Span>Top Accounts</Span>
          </li>
          <li>
            <Span>Hashtags</Span>
          </li>
          <li>
            <Span>Language</Span>
          </li>
          <FooterName>© 2022 INSTAGRAM FROM Shubham_lilawala</FooterName>
        </Footer>
      </Container>
    </Content>
  );
}

export default Profile;
const FooterName = styled.div`
  margin-top: 25px;
  color: #dbdbdb;
  font-size: 12px;
`;
const Span = styled.span`
  position: relative;
  left: -10px;
`;
const Footer = styled.div`
  display: flex;
  color: #dbdbdb;
  font-size: 12px;
  flex-wrap: wrap;
  width: 65%;
  margin-top: 25px;
`;
const TitleName = styled.div`
  font-size: 15px;
  color: #262626;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const FollowName = styled.div`
  font-size: 12px;
  color: #989898;
`;
const Follow = styled.div`
  color: #0f9bf6;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  text-align: right;
  flex-grow: 1;
`;
const Suggested = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width:70%;
`;
const ProfilePP = styled.div`
  background-image: url(${pp});
  background-size: cover;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
`;
const People = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  gap: 25px;
  width: 70%;
`;
const See = styled.div`
  font-size: 12px;
  cursor: pointer;

`;
const Suggestion = styled.div`
  color: #8e8e8e;
  font-size: 15px;
  font-weight: bold;
`;
const Switch = styled.div`
  color: #0f9bf6;
  font-size: 12px;
  font-weight: bold;
  padding-left: 19px;
  cursor: pointer;
  text-align: right;
  flex-grow: 0;
`;
const SuggestionWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  cursor: default;
  width: 64%;
`;
const Namewrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
const SubName = styled.div`
  opacity: 0.7;
  font-size: 15px;
  margin-top: 5px;
`;

const StoryWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  gap: 25px;
`;
const Name = styled.div`
  font-size: 15px;
  margin-left: 10px;
  font-weight: bold;
`;

const Story = styled.div`
  background-image: url(${pp});
  background-size: cover;
  background-repeat: no-repeat;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-position: center;
  border: 3px solid #dedede;
`;
const Content = styled.div`
  margin-top: 100px;
  margin-left: auto;
  right: 0;
  position: fixed;
  width: 45%;
  @media(max-width: 1000px){
    display: none;
  }
  
`;
