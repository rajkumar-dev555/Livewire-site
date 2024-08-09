
import About from "./components/aboutus/aboutus";
import { Cyber } from "./components/Coures/Cyber/Cyber";
import { Cybersecurity } from "./components/Coures/Networking/Network";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";
import Partner from "./components/partners/partners";
import Team from "./components/team/team";
function App() {
  return (
    <div className="App">
      {/* <Cybersecurity/> */}
      
      {/* <Cyber/> */}
      <Nav />
      <Hero/>
      <Team/>
      <Partner/>
      <About/>

    </div>
  );
}

export default App;
