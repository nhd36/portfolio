import ScreenWrapper from "../../../components/ScreenWrapper";
import ImageSwiper from "../../../components/ImageSwiper";
import { footballImages, personalImages } from "../../../types/images.constants";
import './style.scss';

const HobbySection = () => {

  return (
    <ScreenWrapper>
      <div className="passion-section">
        <div className="passion-section-info">
          <div className="passion-section-child passion-section-text">
            <h1>MY BIGGEST <span className="text-purple">PASSION</span></h1> 
            <span className="text-yellow">
              (OTHER THAN TECH)
            </span>
            <br/>

            <p>
              <h3>Football ⚽️!</h3>
              <br/>
              I have been a <span className="text-yellow">huge football fan</span> since I was 11 years old. I used to attend part-time Football Academic Club during my young ages and had
              amazing experiences at the Academic.
              <br/>
              <br/>
              However, I decided to quit because of the <span className="text-purple">limitation in physical body</span> as well as I wanted to concentrate more on my academic path.
              <br/>
              <br/>
              Despite of the fact that I quit the Academic, I continue to play street football with my friends whenever I have time, participated in school football tournaments as well as 
              watching and analyzing football.
              <br/>
              <br/>
              My favorite foot ball team is <span className="text-yellow">F.C. Barcelona 🇪🇸</span> and of course, the Great Player of All-time - <span className="text-yellow">Lionel Messi 🇦🇷</span> {" "}
              is my favorite player.
            </p>
          </div>
          <div className="passion-section-child passion-section-asset">
            <ImageSwiper images={footballImages}/>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default HobbySection;