import { Background, Container, Header, Hero } from "./components";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.app}>
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
