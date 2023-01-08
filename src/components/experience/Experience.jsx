import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
import { frontend, backend } from "./skilldata";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            {frontend.map((e) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{e.skill}</h4>
                    <small className="text-light">{e.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            {backend.map((e) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{e.skill}</h4>
                    <small className="text-light">{e.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
