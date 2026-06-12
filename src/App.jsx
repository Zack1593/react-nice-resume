import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    let cancelled = false;
    fetch("./resumeData.json", { cache: "no-cache" })
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then((data) => {
          if (!cancelled) setResumeData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </div>
  );
}

export default App;