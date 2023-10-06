import ScreenWrapper from "../../../components/ScreenWrapper";
import ImageSwiper from "../../../components/ImageSwiper";
import { hobbyImages } from "../../../types/images.constants";
import './style.scss';

const HobbySection = () => {

  return (
    <ScreenWrapper>
      <div className="hobby-section">
        <div className="hobby-section-info">
          <div className="hobby-section-child hobby-section-text">
            <h1>MY <span className="text-purple">OTHER HOBBIES</span> ?</h1>
            <br/>
            <br/>
            <p>
              Other than football, I also enjoy <span className="text-yellow">Photography</span> to some extends. I used to a little bit of freelancing photography during highschool years.
              You can view some of my best shots on the images side.
              <br/>
              <br/>
              I am a pet lovers <span className="text-purple">(cats, dogs, hamsters, ...)</span>. I have 2 cats <span className="text-yellow">Mao & Tep</span>. They are 2-year-old
              kittens that I adopted at the ACCT center. I spend pretty time playing with them when I am at home and really enjoying my time living with them in the US!
              <br/>
              <br/>
              When I was a kid, one of my favorite activities was to <span className="text-yellow">play Lego</span>. I love being <span className="text-purple">creative</span> in builidng
              things from scratch, using the tools and knowledge that I have to create something fun and fascinating. This was one of the reason why I <span className="text-yellow">love being Software Engineer</span>, as 
              I want to be creative in solving problems, bring benefits to the community using my <span className="text-yellow">knowledge</span> and <span className="text-yellow">creativity</span>.
            </p>
          </div>
          <div className="hobby-section-child hobby-section-asset">
            <ImageSwiper images={hobbyImages}/>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default HobbySection;