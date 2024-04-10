import "./style.scss"

type toolsProps = {
  title: string;
  tools: string[];
}

export default function Tools(props: toolsProps) {
  return(
    <div className="tools">
      <h3 className="tools-headline">{props.title}</h3>
      <ul>
      {props.tools.map((string ,index) => (
        <li key={string} className="item">{string}</li>
      ))}
      </ul>
    </div>
  )
}