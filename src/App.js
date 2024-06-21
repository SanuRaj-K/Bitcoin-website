import "./App.css";
import Header from "./Components/Header";
import CardSection from "./Pages/CardSection";
import FAQ from "./Pages/FAQ";
import Home from "./Pages/Home";
import TestimonialSection from "./Pages/TestimonialSection";

function App() {
  return (
    <div className=" monomaniac-one-regular ">
      <div className="App bg-spotlight px-[80px]    h-screen bg-cover  bg-no-repeat w-full">
        <Header />
        <Home />
      </div>
      <div className=" bg-[#165d774d]   px-[80px]   w-full">
        <CardSection />
        <TestimonialSection />
        <FAQ/>
      </div>
    </div>
  );
}

export default App;
