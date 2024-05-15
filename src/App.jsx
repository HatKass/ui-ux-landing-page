import CTA from "./layouts/CTA";
import FAQs from "./layouts/FAQs";
import Features from "./layouts/Features";
import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";
import Plans from "./layouts/Plans";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="px-5">
        <Hero />
        <Features />
        <FAQs />
        <Plans />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default App;
