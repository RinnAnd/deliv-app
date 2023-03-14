import { FC } from "react";
import "./Home.scss";
import guy from "../../assets/pngegg.png";
import register from '../../assets/shopreg.jpeg';
import deliver from '../../assets/workwith.jpg'

const Home: FC = () => {
  return (
    <div className="main">
      <h1>Welcome to delivapp...</h1>
      <div className="intro_section">
        <div className="image_section">
          <img src={guy} alt="looking for it" width={200} />
        </div>
        <div className="text_section">
          <div className="store">
            <h1>Bring the</h1>
            <h1>Store</h1>
          </div>
          <div className="store">
            <h1>to your</h1>
            <h1>Door</h1>
          </div>
          <p>
            Choose from your favorite restaurants and get your order in a matter
            of minutes!
          </p>
          <div className="buttons">
            <button className="button">See shops</button>
            <button className="button">See categories</button>
          </div>
        </div>
      </div>
      <div className="join_section">
        <div className="join">
          <img src={register} alt="not found" className="pic"/>
          <h2>Register your shop</h2>
          <p>Bring your business to the digital revolution</p>
          <button className="button">Learn more</button>
        </div>
        <div className="join">
          <img src={deliver} alt="not found" className="pic" />
          <h2>Work with us</h2>
          <p>Get the benefits of working on your own hours</p>
          <button className="button">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
