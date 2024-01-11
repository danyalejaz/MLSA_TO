/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/lap.jpg";

const imageAltText = "work desktop bg";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "PencilSketcher App",
    description:
      "The PencilSketcher App is an innovative project designed to simplify the sketching process for art enthusiasts and students.",
    url: "https://pencil-sketch-app-mlh.streamlit.app/",
  },
  {
    title: "DXMentorship Mentee",
    description:
      "DXMentorship is a 3-month long mentorship program for individuals to charge them into Developer Advocacy.",
    url: "https://dxmentorship.com/mentees/danyal/",
  },
  {
    title: "My Blog",
    description:
      "I write about my experiences and learnings on my blog.",
    url: "https://hashnode.com/@danyalejaz",
  },
  {
    title: "Chapter Lead at OWASP Swabi",
    description:
      "I am the Chapter Lead at OWASP Swabi, a non-profit organization that works to improve the security of software",
    url: "https://owasp.org/www-chapter-swabi/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
