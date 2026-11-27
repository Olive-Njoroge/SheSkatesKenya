import Home from "./pages/home";
import About from "./pages/about";
import Purpose from "./pages/purpose";
import Programs from "./pages/programs";
import Impact from "./pages/impact";
import Community from "./pages/community";
import Partners from "./pages/partners";
import GetInvolved from "./pages/getinvolved";
import Contact from "./pages/contact";

import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Purpose />
        <Programs />
        <Impact />
        <Community />
        <Partners />
        <GetInvolved />
        <Contact />
      </main>
    </>
  );
}

export default App;