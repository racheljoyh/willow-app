import { useNavigate } from "react-router-dom";
import Header from "./images/vu-anh-TiVPTYCG_3E-unsplash.jpg";
import ctaImg1 from "./images/cta-image.png";
function Home() {
  let navigate = useNavigate();

  function redirect() {
    navigate("/homes/for_rent");
  }
  return (
    <>
      <div class="hero-container">
        <img className="header-image" src={Header} alt="home for sale" />
        <div className="centered">Find the place you can call home.</div>
        <button onClick={redirect} className="btn --header-btn">
          Browse rentals
        </button>
      </div>
      <div className="cta-container grid--3-cols">
        <div className="card">
          <img src={ctaImg1} className="card-image" />
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nam doloribus nobis magni explicabo numquam esse libero consectetur
            debitis nostrum.
          </p>
          <button className="btn --card-btn">Rent</button>
        </div>
        <div className="card">
          <img className="card-image" />
          <p className="card-text">
            Voluptatem alias amet necessitatibus dolore consequuntur sint sit
            eligendi odit enim commodi non delectus.
          </p>
          <button className="btn --card-btn">Add a listing</button>
        </div>
        <div className="card">
          <img className="card-image" />
          <p className="card-text">
            Adipisicing elit. Deleniti nemo optio voluptate quidem molestias
            amet dolores nisi veniam cum mollitia illo quia odio natus, ipsum
            cupiditate!
          </p>
          <button className="btn --card-btn">View applications</button>
        </div>
      </div>
    </>
  );
}

export default Home;
