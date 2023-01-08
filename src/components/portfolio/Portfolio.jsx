import React from "react";
import "./portfolio.css";
import { projects } from "./portfoliodata";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map((e) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={e.image} alt="" />
              </div>
              <div className="portfolio__details">
                <h3>{e.title}</h3>
                <div className="portfolio__tagparent">
                  <div className="portfolio__tags">{e.features[0]}</div>
                  <div className="portfolio__tags">{e.features[1]}</div>
                  <div className="portfolio__tags">{e.features[2]}</div>
                  <div className="portfolio__tags">{e.features[3]}</div>
                  <div className="portfolio__tags">{e.features[4]}</div>
                  <div className="portfolio__tags">{e.features[5]}</div>
                </div>
                <div className="portfolio__item-cta">
                  <a href={e.github} className="btn" target="_blank">
                    Github
                  </a>
                  <a
                    href={e.live}
                    className="btn btn-primary"
                    target={"_blank"}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
