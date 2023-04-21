import { Background, Container, Header, Hero } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Background>
        <Container>
          <Hero />
        </Container>
      </Background>
    </div>
  );
}

export default App;
