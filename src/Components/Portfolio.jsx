import { Fade } from "react-awesome-reveal";

function Portfolio({ data }) {
  if (!data) return null;

  const projects = data.projects.map((project, index) => {
    const projectImage = "images/portfolio/" + project.image;

    return (
      <div key={`${project.title}-${index}`} className="columns portfolio-item">
        <div className="item-wrap">
          <img alt={project.title} src={projectImage} />
          <div style={{ textAlign: "center" }}>{project.title}</div>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <Fade direction="left" duration={1000}>
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Portfolio;