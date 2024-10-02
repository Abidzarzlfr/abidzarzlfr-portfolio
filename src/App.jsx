import "./App.css";
import Header from "./pages/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyProjects from "./pages/MyProjects";
import TechStack from "./pages/TechStack";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <div id="header">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="tech-stack">
        <TechStack />
      </div>
      <div id="my-projects">
        <MyProjects />
      </div>
      <Footer />
    </>
  );
}

export default App;
