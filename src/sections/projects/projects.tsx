import "./style.scss"
import Project from "../../components/project/project"

export default function ProjectsSection() {
  return(
    <section className="projects">
      <h2 className="headline">PROJECTS</h2>
      <div className="projects-wrapper">
      <Project name='PROJECT NAME' img='https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg' tools={["React, Typescript, NodeJS, Express, Firebase"]} />
      <Project name='PROJECT NAME' img='https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg' tools={["React, Typescript, NodeJS, Express, Firebase"]} />
      <Project name='PROJECT NAME' img='https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg' tools={["React, Typescript, NodeJS, Express, Firebase"]} />
      </div>
    </section>
  )
}