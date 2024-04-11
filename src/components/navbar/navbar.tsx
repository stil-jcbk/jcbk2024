import "./style.scss";

export default function Navbar(){
  return(
    <nav className="navbar">
      <span className="logo">JCBK</span>
      <div className="redirections">
        <a href="https://github.com/stil-jcbk" target="_blank" rel="noreferrer">
          <img className="icon" src="/assets/github.svg" alt="github" />
        </a>
        <a href="https://linkedin.com/in/jcbkdev" target="_blank" rel="noreferrer">
          <img className="icon" src="/assets/linkedin.svg" alt="linkedin" />
        </a>
        <a href="mailto:jcbkdev@gmail.com" target="_blank" rel="noreferrer">
          <img className="icon" src="/assets/mail.svg" alt="mail" />
        </a>
      </div>
    </nav>
  )
}