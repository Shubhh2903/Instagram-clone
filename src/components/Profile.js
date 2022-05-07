/** @format */

import React from "react";
import styled from "styled-components";
import pp from "../images/icon/pp.png";
function Profile() {
  return (
    <Content>
      <StoryWrapper>
        <Story />
        <Name>shubham_lilawala</Name>
      </StoryWrapper>
      <SubName>Shubham_lilawala</SubName>
    </Content>
  );
}

export default Profile;

const SubName = styled.div`
  flex-direction: column;
  opacity: 0.7;
  font-size: 15px;
  position:absoulte;
`;

const StoryWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.div`
  font-size: 15px;
  margin-left: 10px;
  font-weight: bold;
  position:relative;
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
  margin-top: 50px;
  margin-left: 50px;
`;
