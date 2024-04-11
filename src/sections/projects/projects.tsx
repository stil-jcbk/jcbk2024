import "./style.scss"
import Project from "../../components/project/project"

export default function ProjectsSection() {
  return(
    <section className="projects">
      <h2 className="headline">PROJECTS</h2>
      <div className="projects-wrapper">
      <Project name='Freelance website' img='/assets/freelance.png' tools={["HTML, Javascript, CSS"]} />
      <Project name='SaveCash' img='/assets/savecash.png' tools={["React, Typescript, Firebase"]} />
      </div>
    </section>
  )
}