import React from "react";
import styled from "styled-components/macro";
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
  background-color: white;
  @media(max-width:1000px) {
    display: none;
  }
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
  cursor: pointer;
`;
const Like = styled.div`
  background-image: url(${like});
  background-size: contain;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  margin-left: 22px;
  cursor: pointer;
`;
const Navigation = styled.div`
  background-image: url(${navigation});
  background-size: contain;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  margin-left: 22px;
  cursor: pointer;

`;
const Post = styled.div`
  background-image: url(${post});
  background-size: contain;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  margin-left: 22px;
  cursor: pointer;
`;
const Message = styled.div`
  background-image: url(${message});
  background-size: contain;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  margin-left: 22px;
  cursor: pointer;
`;
const Home = styled.div`
  background-image: url(${home});
  background-size: contain;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  cursor: pointer;
`;
const Icon = styled.div`
  display: flex;
  background-color: white;
`;
const SerachIconWrapper = styled.div`
  background-image: url(${searchIcon});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  width: 17px;
  height: 20px;
  top: 10px;
  left: 15px;
  background-color: #efefef;
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
  margin-top: 15px;
  width: 60%;
  padding-bottom: 10px;
  justify-content: space-between;
  background-color: white;
  @media(max-width:1000px){
   justify-content: space-between;
   width: max-content;
   padding-bottom: 6px;
  }
`;
const MainWrapper = styled.div`
  background-color: white;
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  align-items: center;
  width: 100%;
  z-index: 3;
  position: fixed;
  box-sizing: border-box;

  @media(max-width:1000px){
    justify-content: center;
  }
`;
const LogoWrapper = styled.div`
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  background-color: white;
`;
