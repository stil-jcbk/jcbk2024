import "./style.scss"

export default function HeroSection(){
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if(!contactSection) return;

    contactSection.scrollIntoView({behavior: "smooth", block:"center", inline: "nearest"})
  }

  return(
    <section className="hero">
        <div className="hero-content">
          <div className="text">
            <p className="greeting">Hi!<br/><span className="bold">I'm <span className="super">Jakub Konieczny</span></span></p>
            <p className="title">Frontend Developer</p>
            <p className="slogan">Where Creativity Meets Code.</p>
          </div>
          <button onClick={scrollToContact} type="button">Hire me</button>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <div className="image-border">
            </div>
            <div className="gradient"/>
            <img src="/assets/me1.png" alt="jakub konieczny in grayscale" />
          </div>
        </div>
    </section>
  )
}