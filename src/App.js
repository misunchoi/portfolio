import React, { useRef } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { theme } from "./styles/theme";
import { useOnClickOutside } from "./hooks";

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
  const [open, setOpen] = React.useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <div ref={node}>
          <Header open={open} setOpen={setOpen} />
        </div>

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
