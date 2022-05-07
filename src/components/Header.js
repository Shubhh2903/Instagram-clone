import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import searchIcon from "../images/search-icon.png";
import home from "../images/icon/home-icon.png";
import like from "../images/icon/like-icon.png";
import message from "../images/icon/message-icon.png";
import navigation from "../images/icon/navigation-icon.png";
import post from "../images/icon/post-icon.png";
import pp from "../images/icon/pp.png";
function Header() {
  return (
    <MainWrapper>
      <Nav>
        <LogoWrapper></LogoWrapper>
        <InputWrapper>
          <SerachIconWrapper />
          <Input type="text" placeholder="Search" />
        </InputWrapper>

        <Icon>
          <Home />
          <Message />
          <Post />
          <Navigation />
          <Like />
          <PP />
        </Icon>
      </Nav>
    </MainWrapper>
  );
}

export default Header;
const InputWrapper = styled.div`
  position: relative;
  padding-left: 10px;
`;
const PP = styled.div`
  background-image: url(${pp});
  background-size: cover;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  margin-left: 22px;
  border-radius: 50%;
  background-position: center;
`;
const Like = styled.div`
  background-image: url(${like});
  background-size: contain;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  margin-left: 22px;
`;
const Navigation = styled.div`
  background-image: url(${navigation});
  background-size: contain;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  margin-left: 22px;
`;
const Post = styled.div`
  background-image: url(${post});
  background-size: contain;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  margin-left: 22px;
`;
const Message = styled.div`
  background-image: url(${message});
  background-size: contain;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  margin-left: 22px;
`;
const Home = styled.div`
  background-image: url(${home});
  background-size: contain;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
`;
const Icon = styled.div`
  display: flex;
`;
const SerachIconWrapper = styled.div`
  background-image: url(${searchIcon});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  width: 17px;
  height: 20px;
  top:10px;
  left:15px;
`;
const Input = styled.input`
  background-color: #efefef;
  font-size: 15px;
  border: none;
  border-radius: 7px;
  height: 35px;
  width: 250px;
  &:focus {
    outline: none;
  }
  padding-left: 30px;
`;
const Nav = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  justify-content: space-around;
  margin-top: 15px;
`;
const MainWrapper = styled.div`
  background-color: white;
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  height: 60px;
`;
const LogoWrapper = styled.div`
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;
`;
