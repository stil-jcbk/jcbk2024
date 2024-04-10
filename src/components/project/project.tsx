import "./style.scss"

type ProjectProps = {
  url?: string;
  name: string;
  img: string;
  tools: string[];
}

export default function Project(props: ProjectProps) {
  return(
    <div className="project">
      <a href={props.url? props.url : "/#"}>
        <div className="image">
          <p className="name">{props.name}</p>
          <div className="gradient"/>
          <img src={props.img} alt="project" />
        </div>
      </a>
      <div className="project-tools">
        {props.tools.map((tool, index) => (
          <span key={tool} className="project-tool">{tool}</span>
        ))}
      </div>
    </div>
  )
}