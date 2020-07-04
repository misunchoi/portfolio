import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { theme } from "./styles/theme";

const Content = styled.div`
  margin: 1em;
  flex: 1 0 auto;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <Header />

      <Content>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/contact" component={Contact} exact />
      </Content>

      <Footer />
    </Layout>
    </ThemeProvider>
  );
}

export default App;
