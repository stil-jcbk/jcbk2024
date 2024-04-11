import "./style.scss"
import Project from "../../components/project/project"

export default function ProjectsSection() {
  return(
    <section className="projects">
      <h2 className="headline">PROJECTS</h2>
      <div className="projects-wrapper">
      <Project url="https://dev.jcbk.pl" name='JCBKdev' img='/assets/freelance.png' tools={["HTML, Javascript, CSS"]} />
      <Project url="https://savecash.jcbk.pl" name='SaveCash' img='/assets/savecash.png' tools={["React, Typescript, Firebase"]} />
      </div>
    </section>
  )
}