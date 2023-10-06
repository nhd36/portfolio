import BasePage from "../BasePage";
import AboutSection from "./AboutSection";
import HobbySection from "./HobbySection";
import PassionSection from "./PassionSection";

const AboutPage = () => {
  return (
    <BasePage>
      <AboutSection/>
      <PassionSection/>
      <HobbySection/>
    </BasePage>
  )
}

export default AboutPage;