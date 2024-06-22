import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import CardSection from "./Pages/CardSection";
import FAQ from "./Pages/FAQ";
import Home from "./Pages/Home";
import TestimonialSection from "./Pages/TestimonialSection";

function App() {
  return (
    <div className=" monomaniac-one-regular max-w-screen-2xl mx-auto ">
      <div className="App bg-spotlight sm:px-[80px] px-[40px]    h-screen bg-cover  bg-no-repeat w-full">
        <Header />
        <Home />
      </div>
      <div className=" bg-[#091C23]   sm:px-[80px]  px-[40px]  w-full">
        <CardSection />
        <TestimonialSection />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
