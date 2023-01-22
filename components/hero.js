import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero" id="home" aria-label="home">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Hello Everyone!</p>

          <h1 className="headline headline-1 section-title">
            I’m <span className="span">Vishwesh</span>
          </h1>

          <p className="hero-text">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>

          <div className="input-wrapper">
            <input
              type="email"
              name="email_address"
              placeholder="Type your email address"
              required
              className="input-field"
              autoComplete="off"
            />

            <button className="btn btn-primary">
              <span className="span">Subscribe</span>

              <ion-icon
                name="arrow-forward-outline"
                aria-hidden="true"
              ></ion-icon>
            </button>
          </div>
        </div>

        <div className="hero-banner">
          <Image
            src="/images/vishwesh.png"
            width={200}
            height={200}
            alt="Wren Clark"
            className="w-100"
          />

          <Image
            src="/images/pattern-2.svg"
            width="27"
            height="26"
            alt="shape"
            className="shape shape-1"
          />

          <Image
            src="/images/pattern-3.svg"
            width="27"
            height="26"
            alt="shape"
            className="shape shape-2"
          />
        </div>

        <Image
          src="/images/shadow-1.svg"
          width="500"
          height="800"
          alt=""
          className="hero-bg hero-bg-1"
        />

        <Image
          src="/images/shadow-2.svg"
          width="500"
          height="500"
          alt=""
          className="hero-bg hero-bg-2"
        />
      </div>
    </section>
  );
};

export default Hero;
