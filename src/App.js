import './App.css';
import NavBar from "./componets/NavBar";
import Homepage from "./pages/HomePage";
import Skills from "./pages/Skills";
import Project from './pages/Project';


function App() {
  return (
    <>
    <NavBar/>
    <main>
    <Homepage/>
    <Skills/>
    <Project/>
    </main>
    </>
  );
}

export default App;
