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
      <Header />
      <About />
      <TechStack />
      <MyProjects />
      <Footer />
    </>
  );
}

export default App;
