import { useNavigate } from "react-router-dom";
import Header from "./images/vu-anh-TiVPTYCG_3E-unsplash.jpg";
import ctaImg1 from "./images/cta-image1.png";
import ctaImg2 from "./images/cta-image2.png";
import ctaImg3 from "./images/cta-image3.png";
import { UserContext } from "../Context/UserProvider";
import { useContext } from "react";

function Home() {
  let { currentUser } = useContext(UserContext);
  let navigate = useNavigate();

  function redirect() {
    navigate("/homes/for_rent");
  }
  return (
    <>
      <div className="hero-container">
        <img className="header-image" src={Header} alt="home for sale" />
        <div className="centered">Find the place you can call home.</div>
        <button onClick={redirect} className="btn --header-btn">
          Browse rentals
        </button>
      </div>
      <div className="cta-container grid--3-cols">
        <div className="card">
          <img
            src={ctaImg3}
            className="card-image"
            alt="illustration of a house"
          />
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nam doloribus nobis magni explicabo numquam esse libero consectetur
            debitis nostrum.
          </p>
          <button onClick={redirect} className="btn --card-btn">
            Rent
          </button>
        </div>
        <div className="card">
          <img
            src={ctaImg1}
            className="card-image"
            alt="illustration of a house"
          />
          <p className="card-text">
            Voluptatem alias amet necessitatibus dolore consequuntur sint sit
            eligendi odit enim commodi non delectus.
          </p>
          {currentUser ? (
            <button
              onClick={() => navigate("/my_rentals")}
              className="btn --card-btn"
            >
              My rentals
            </button>
          ) : (
            <button
              onClick={() => {
                alert("Please login first!");
                navigate("/login");
              }}
              className="btn --card-btn"
            >
              My rentals
            </button>
          )}
        </div>
        <div className="card">
          <img
            src={ctaImg2}
            className="card-image"
            alt="application illustration"
          />
          <p className="card-text">
            Adipisicing elit. Deleniti nemo optio voluptate quidem molestias
            amet dolores nisi veniam cum mollitia illo quia odio natus, ipsum
            cupiditate!
          </p>
          {currentUser ? (
            <button
              onClick={() => navigate("/my_applications")}
              className="btn --card-btn"
            >
              View applications
            </button>
          ) : (
            <button
              onClick={() => {
                alert("Please login first!");
                navigate("/login");
              }}
              className="btn --card-btn"
            >
              View applications
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
