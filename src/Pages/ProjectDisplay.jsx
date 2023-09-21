import Ellen from "../assets/Portfolio-billede.png"
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

export default function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <section>
      <div className="baggrund">
        <img src={Ellen} alt="" className="billede"/>
        <h3 className="multi">Multimediedesigner</h3>
        <h1 className="overskrift">Ellen Bager Pedersen</h1>
      </div>

      <div className="project">
        <h2 className="overskrift1"> {project.name}</h2>
        <img src={project.image} className=""/>
        <p>
           {project.story}
        </p>
        <p>
           {project.skills}
        </p>
        <p className="koden">Klik her, og se koden</p>
         <a href={project.url}><FaGithub/></a>
      </div>

      <footer className="footer">
        <h5>Kontakt mig på:</h5>
        <p className="kontakt">Ellenbager@icloud.com</p>
        <p>+45 51758994</p>
        <a href="https://www.linkedin.com/in/ellen-bager-pedersen-15b029289/" className="linkedin"><ImLinkedin/></a>
        <p className="af">Portfolio af Ellen Bager Pedersen</p>
      </footer>
    </section>
  );
}