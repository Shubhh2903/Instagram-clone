import React from "react";
import styled from "styled-components";
import pp from "../images/icon/pp.png";
function Profile() {
  return (
    <Content>
      <Story />
    </Content>
  );
}

export default Profile;

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
