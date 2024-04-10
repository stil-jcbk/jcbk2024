import "./style.scss"
import Tools from "../../components/tools/tools"

export default function AboutMeSection(){
  return(
    <section className="aboutme">
      <div className="aboutme-image">
        <span className="name">Jakub<br/>Konieczny</span>
        <div className="gradient"/>
        <img src="/assets/me2.png" alt="jakub konieczny in grayscale" />
      </div>
      <div className="content">
        <div className="desc">
          <h2 className="headline">ABOUT ME</h2>
          <p className="desc-text">
            I'm a frontend developer with a background in design. 
            I've worked on various projects, turning creative ideas into working websites. 
            I enjoy every part of the process, from planning to coding. 
            Let's create something awesome together!</p>
        </div>
        <div className="tools-section">
          <h3 className="headline">TOOLS</h3>
          <div className="tools-container">
            <Tools title="FRONTEND" tools={["React", "Javascript", "Typescript", "CSS/SCSS", "HTML"]}/>
            <Tools title="BACKEND" tools={["NodeJS", "Express", "Firebase", "SQL"]}/>
            <Tools title="DESIGN" tools={["Figma", "Photoshop"]}/>
            <Tools title="OTHER" tools={["Git", "GitHub"]}/>
          </div>
        </div>
      </div>
    </section>
  )
}