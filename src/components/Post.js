import React from "react";
import styled from "styled-components/macro";
import Slider from "react-slick";
import pp from "../images/icon/pp.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "./Profile";
import Main from "./Main";
function Post() {
  const settings = {
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
  };
  return (
    <Wrapper>
      <Story>
        <Slider {...settings}>
          <ImageWrapper>
            <StoryPhoto src={pp} />
            <Text>shubham_lilawala</Text>
          </ImageWrapper>
          <ImageWrapper>
            <StoryPhoto src={pp} />
            <Text>shubham_lilawala</Text>
          </ImageWrapper>{" "}
          <ImageWrapper>
            <StoryPhoto src={pp} />
            <Text>shubham_lilawala</Text>
          </ImageWrapper>{" "}
          <ImageWrapper>
            <StoryPhoto src={pp} />
            <Text>shubham_lilawala</Text>
          </ImageWrapper>{" "}
          <ImageWrapper>
            <StoryPhoto src={pp} />
            <Text>shubham_lilawala</Text>
          </ImageWrapper>{" "}
          <ImageWrapper>
            <StoryPhoto src={pp} />
            <Text>shubham_lilawala</Text>
          </ImageWrapper>{" "}
          <ImageWrapper>
            <StoryPhoto src={pp} />
            <Text>shubham_lilawala</Text>
          </ImageWrapper>{" "}
          <ImageWrapper>
            <StoryPhoto src={pp} />
            <Text>shubham_lilawala</Text>
          </ImageWrapper>{" "}
          <ImageWrapper>
            <StoryPhoto src={pp} />
            <Text>shubham_lilawala</Text>
          </ImageWrapper>{" "}
          <ImageWrapper>
            <StoryPhoto src={pp} />
            <Text>shubham_lilawala</Text>
          </ImageWrapper>
        </Slider>
        <Main/>
      </Story>
     

      <Profile />
    </Wrapper>
  );
}

export default Post;
const Text = styled.div`
  font-size: 12px;
  margin-left: -11px;
  width: auto;
`;
const StoryPhoto = styled.img`
  height: 66px;
  width: 66px;
  border: 2px solid #d02f68;
  border-radius: 50%;
  cursor: pointer;
`;
const H3 = styled.h3`
  margin-top: 25px;
`;
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  display: flex;
  padding-top: 65px;
`;
const Story = styled.div`
  background-color: white;
  margin-top: 25px;
  border: 1px solid #dbdbdb;
  height: 100px;
  width: 55%;
  align-items: center;
  
`;

const ImageWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 5px;
`;
