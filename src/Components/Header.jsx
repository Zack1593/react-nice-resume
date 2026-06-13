import ParticlesBg from "particles-bg";
import { Fade } from "react-awesome-reveal";

function Header({ data }) {
  if (!data) return null;

  const { github, linkedin, name, description } = data;

  const handleSmoothScroll = (e) => {
    const link = e.target.closest("a.smoothscroll");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav" onClick={handleSmoothScroll}>
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>

          {/*<li>*/}
          {/*  <a className="smoothscroll" href="#portfolio">*/}
          {/*    Works*/}
          {/*  </a>*/}
          {/*</li>*/}

          {/*<li>*/}
          {/*  <a className="smoothscroll" href="#contact">*/}
          {/*    Contact*/}
          {/*  </a>*/}
          {/*</li>*/}
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade direction="up">
            <h1 className="responsive-headline">{name}</h1>
          </Fade>
          <Fade direction="up" duration={700}>
            <h3>{description}.</h3>
          </Fade>
          <hr />
          <Fade direction="up" duration={1000}>
            <ul className="social">
              <a href={linkedin} target="_blank" className="button btn project-btn">
                <i className="fa fa-linkedin"></i>LinkedIn
              </a>
              <a href={github} target="_blank" className="button btn github-btn">
                <i className="fa fa-github"></i>Github
              </a>
            </ul>
          </Fade>
        </div>
      </div>

      {/*<p className="scrolldown">*/}
      {/*  <a className="smoothscroll" href="#about">*/}
      {/*    <i className="icon-down-circle"></i>*/}
      {/*  </a>*/}
      {/*</p>*/}
    </header>
  );
}

export default Header;