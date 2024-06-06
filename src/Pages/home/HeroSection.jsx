export default function HeroSection(){
    return  (
        <section id="heroSection" className="her0--section">
        <div className="hero--section--content--box">
        <div className="hero--section--content">
            <p className="section--title"> Hey, I'm Austin Smittle</p>
            <h1 className="hero--section--title">
                <span className="hero--section-title--color"> Full Stack</span>{" "}
                <br />
                Developer
            </h1>
            <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos temporibus ut voluptatum distinctio consequatur.
            </p>
        </div>
        <button className="btn btn-primary"> Get In Touch</button>
        </div>
        <div className="hero--section--img">
            <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
        </section>
    )
    ;
}