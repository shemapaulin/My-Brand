import Sidenav from "./components/sidenav";
import Main from './components/main'
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Sidenav />
    <Main />
    <Resume/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
