import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Access a universe of top-notch service professionals right at your fingertips with Service Express.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
                The best for every budget
            </div>
            <p>
            Discover high-quality services at every price point. At Service Express, we offer straightforward pricing without hourly rates.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
               Quality work done quickly
            </div>
            <p>
               Find the perfect home service professional and start your job within minutes, only at Service Express.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
            Discover high-quality services at every price point. At Service Express, we offer straightforward pricing without hourly rates.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img
               src="./img/ex.png" alt=""
              />
              <div className="line"></div>
              <span>Home Cleaning Services</span>
            </div>
            <div className="item">
              <img
                src="./img/ex.png" alt=""
              />
              <div className="line"></div>

              <span>AC Repair Services</span>
            </div>
            <div className="item">
              <img
                src="./img/ex.png" alt=""
              />
              <div className="line"></div>
              <span>Lawn Mowing and Maintenance</span>
            </div>
            <div className="item">
              <img
                 src="./img/ex.png" alt=""
              />
              <div className="line"></div>
              <span>Plumbing Services</span>
            </div>
            <div className="item">
              <img
                  src="./img/ex.png" alt=""
              />
              <div className="line"></div>
              <span>Electrical Services</span>
            </div>
            <div className="item">
              <img
                src="./img/ex.png" alt=""
              />
              <div className="line"></div>
              <span>HVAC Installation and Repair</span>
            </div>
            <div className="item">
              <img
                 src="./img/ex.png" alt=""
              />
              <div className="line"></div>
              <span>Roof Repair and Installation</span>
            </div>
            <div className="item">
              <img
                src="./img/ex.png" alt=""
              />
              <div className="line"></div>
              <span>Furniture Assembly </span>
            </div>
            <div className="item">
              <img
                  src="./img/ex.png" alt=""
              />
              <div className="line"></div>
              <span>Interior Painting</span>
            </div>
            <div className="item">
              <img
                  src="./img/ex.png" alt=""
              />
              <div className="line"></div>
              <span>Home Security Installation</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              Service Express <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to Service Providers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Service Express Business</button>
          </div>
          <div className="item">
            <img
                src="./img/ex.png" alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
