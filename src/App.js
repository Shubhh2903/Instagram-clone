import styled from "styled-components";
import Header from "../src/components/Header";
import Post from "./components/Post";
import Profile from "./components/Profile";

function App() {
  return (
    <Main>
      <Header />
      <Post />
    </Main>
  );
}

export default App;

const Main = styled.div`
  background-color: #fafafa;
  height: 100vh;
`;
