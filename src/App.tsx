import { useRef } from "react";
import "./App.css";
import BannerSection from "./components/banner-section/BannerSection";
import BenefitSection from "./components/benefit-section/BenefitSection";
import Footer from "./components/footer/Footer";
import HomeSection from "./components/home-section/HomeSection";
import RegisterSection from "./components/register-section/RegisterSection";
import Topbar from "./components/topbar/Topbar";

function App() {
  const bannerRef = useRef<HTMLElement | null>(null);
  const featuresRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const registerRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (section: string) => {
    let ref: any;

    if (section === "banner") ref = bannerRef;
    if (section === "features") ref = featuresRef;
    if (section === "projects") ref = projectsRef;
    if (section === "register") ref = registerRef;

    if (ref?.current) {
      const yOffset = -80;
      const y =
        ref.current.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <Topbar scrollToSection={scrollToSection} />

      <section ref={bannerRef}>
        <BannerSection />
      </section>

      <section ref={featuresRef}>
        <BenefitSection />
      </section>

      <section ref={projectsRef}>
        <HomeSection />
      </section>

      <section ref={registerRef}>
        <RegisterSection />
      </section>
      <Footer />
    </div>
  );
}

export default App;
