import React from "react";
const project = [];

const Projects = (props) => {
  return (
    <div>
      <div id="portfolio">
        <div class="container-fluid p-0">
          <div class="row no-gutters">
            {props.project.map(item => (
              <div class="col-lg-4 col-sm-6">
                <a
                  class="portfolio-box"
                  href={item.url}
                >
                   <img
                    class="img-fluid"
                    src={item.image}
                    key={item.id}
                    alt=""
                  /> 
                  <div class="portfolio-box-caption">
                    <div class="project-category text-white-50">{item.name}</div>
                    <div class="project-name">{item.description}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
