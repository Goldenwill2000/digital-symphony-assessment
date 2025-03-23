import "./App.css";
import BannerSection from "./components/banner-section/BannerSection";
import BenefitSection from "./components/benefit-section/BenefitSection";
import Footer from "./components/footer/Footer";
import HomeSection from "./components/home-section/HomeSection";
import RegisterSection from "./components/register-section/RegisterSection";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <BannerSection />
      <BenefitSection />
      <HomeSection />
      <RegisterSection />
      <Footer />
    </div>
  );
}

export default App;
