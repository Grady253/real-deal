import './App.css';
import NavBar from "./componets/NavBar";
import Homepage from "./pages/HomePage";
import Skills from "./pages/Skills";
import Project from './pages/Project';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    <NavBar/>
    <main>
    <Homepage/>
    <Skills/>
    <Project/>
    <Contact/>
    </main>
    </>
  );
}

export default App;
