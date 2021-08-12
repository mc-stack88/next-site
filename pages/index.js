import styled from "styled-components";
import Layout from "../components/Layout";

const Title = styled.h1`
  font-size: 50px;
  width: auto;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: auto;
  margin-top: 25vh;
  z-index: 50;
  background: #000000;
  justify-content: center;
  align-items: center;

`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #1c2025;
  padding-top: 10vh;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Layout>
      <Container>
        <Title>Supercharge your knowledge into a productivity hub.</Title>
      </Container>
    </Layout>
  );
}
