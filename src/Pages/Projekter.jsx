import { ImLinkedin } from "react-icons/im";
import Ellen from "../assets/Portfolio-billede.png"
import ProjectItem from "../Components/ProjectItem"
import { ProjectList } from "../helpers/ProjectList";

export default function Portfolio() {
    return (
        <section>
            <div className="baggrund">
                <img src={Ellen} alt="" className="billede"/>
                <h3 className="multi">Multimediedesigner</h3>
                <h1 className="overskrift">Ellen Bager Pedersen</h1>
                <h2 className="projekter">Tidligere projekter</h2>
            </div>

            <div className="projects">
                <div className="projectList">
                    {ProjectList.map((project, idx) => {
                        return (
                            <ProjectItem id={idx} name={project.name} image={project.image} />
                        );
                    })}
                </div>
            </div>
            
            <footer className="footer">
                <h5>Kontakt mig på:</h5>
                <p className="kontakt">Ellenbager@icloud.com</p>
                <p>+45 51758994</p>
                <a href="https://www.linkedin.com/in/ellen-bager-pedersen-15b029289/" className="linkedin"><ImLinkedin/></a>
                <p className="af">Portfolio af Ellen Bager Pedersen</p>
            </footer>

        </section>

    )
}
