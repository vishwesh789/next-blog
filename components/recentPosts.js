import Image from "next/image";
import Link from "next/link";

const RecentPosts = (props) => {
  const { randomPosts, popularPosts } = props;
  console.log("propsssssssss in technology", randomPosts);

  return (
    <section
      className="section recent-post"
      id="recent"
      aria-labelledby="recent-label"
    >
      <div className="container">
        <div className="post-main">
          <h2 className="headline headline-2 section-title">
            <span className="span">Recent posts</span>
          </h2>

          <p className="section-text">Don't miss the latest trends</p>

          {randomPosts[0]?.map((post, i) => {
            return (
              <div
                className="card-content"
                key={i}
                style={{ marginBottom: 30 }}
              >
                <h3 className="headline headline-3 card-title">
                  <Link
                    href={`https://www.acehealthwealth.com/technologies/${post.slug}/`}
                    className="link hover-2"
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* <p className="card-text"style={{marginTop:20}}>
                  {post.metaDesc}
                </p> */}

                <div className="card-wrapper">
                  <div className="wrapper">
                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                    <span className="span">{post.readTime} mins read</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <ul className="grid-list">
            <li>
              <div className="recent-post-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 271, "--height": 258 }}
                >
                  <Image
                    src="/images/recent-post-1.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <Link href="#" className="card-badge">
                    Working Tips
                  </Link>

                  <h3 className="headline headline-3 card-title">
                    <Link href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </Link>
                  </h3>

                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>

                  <div className="card-wrapper">
                    <div className="card-tag">
                      <Link href="#" className="span hover-2">
                        # Travel
                      </Link>

                      <Link href="#" className="span hover-2">
                        # Lifestyle
                      </Link>
                    </div>

                    <div className="wrapper">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="recent-post-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 271, "--height": 258 }}
                >
                  <Image
                    src="/images/recent-post-2.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <Link href="#" className="card-badge">
                    Working Tips
                  </Link>

                  <h3 className="headline headline-3 card-title">
                    <Link href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </Link>
                  </h3>

                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>

                  <div className="card-wrapper">
                    <div className="card-tag">
                      <Link href="#" className="span hover-2">
                        # Travel
                      </Link>

                      <Link href="#" className="span hover-2">
                        # Lifestyle
                      </Link>
                    </div>

                    <div className="wrapper">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="recent-post-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 271, "--height": 258 }}
                >
                  <Image
                    src="/images/recent-post-3.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <Link href="#" className="card-badge">
                    Working Tips
                  </Link>

                  <h3 className="headline headline-3 card-title">
                    <Link href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </Link>
                  </h3>

                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>

                  <div className="card-wrapper">
                    <div className="card-tag">
                      <Link href="#" className="span hover-2">
                        # Travel
                      </Link>

                      <Link href="#" className="span hover-2">
                        # Lifestyle
                      </Link>
                    </div>

                    <div className="wrapper">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="recent-post-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 271, "--height": 258 }}
                >
                  <Image
                    src="/images/recent-post-4.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <Link href="#" className="card-badge">
                    Working Tips
                  </Link>

                  <h3 className="headline headline-3 card-title">
                    <Link href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </Link>
                  </h3>

                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>

                  <div className="card-wrapper">
                    <div className="card-tag">
                      <Link href="#" className="span hover-2">
                        # Travel
                      </Link>

                      <Link href="#" className="span hover-2">
                        # Lifestyle
                      </Link>
                    </div>

                    <div className="wrapper">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="recent-post-card">
                <figure
                  className="card-banner img-holder"
                  style={{ "--width": 271, "--height": 258 }}
                >
                  <Image
                    src="/images/recent-post-5.jpg"
                    width="271"
                    height="258"
                    loading="lazy"
                    alt="Helpful Tips for Working from Home as a Freelancer"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <Link href="#" className="card-badge">
                    Working Tips
                  </Link>

                  <h3 className="headline headline-3 card-title">
                    <Link href="#" className="link hover-2">
                      Helpful Tips for Working from Home as a Freelancer
                    </Link>
                  </h3>

                  <p className="card-text">
                    Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner flapped lynx far
                    that and jeepers giggled far and far
                  </p>

                  <div className="card-wrapper">
                    <div className="card-tag">
                      <Link href="#" className="span hover-2">
                        # Travel
                      </Link>

                      <Link href="#" className="span hover-2">
                        # Lifestyle
                      </Link>
                    </div>

                    <div className="wrapper">
                      <ion-icon
                        name="time-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <span className="span">3 mins read</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul> */}

          {/* <nav aria-label="pagination" className="pagination">
            <Link href="#" className="pagination-btn" aria-label="previous page">
              <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
            </Link>

            <Link href="#" className="pagination-btn">
              1
            </Link>
            <Link href="#" className="pagination-btn">
              2
            </Link>
            <Link href="#" className="pagination-btn">
              3
            </Link>
            <Link href="#" className="pagination-btn" aria-label="more page">
              ...
            </Link>

            <Link href="#" className="pagination-btn" aria-label="next page">
              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </Link>
          </nav> */}
        </div>
        <div className="post-aside grid-list" >
          <div className="card aside-card">
            <h3 className="headline headline-2 aside-title">
              <span className="span">Popular Posts</span>
            </h3>
            {popularPosts?.map((post, i) => {
              return (
                <ul className="popular-list" key={i}>
                  <li>
                    <div className="popular-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ "--width": 64, "--height": 64 }}
                      >
                        <Image
                          src={post.img}
                          width="64"
                          height="64"
                          loading="lazy"
                          alt="Creating is a privilege but it’s also a gift"
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <h4 className="headline headline-4 card-title">
                          <Link
                            href={`https://www.acehealthwealth.com/technologies/${post.slug}/`}
                            className="link hover-2"
                          >
                            {post.title}
                          </Link>
                        </h4>

                        <div className="warpper">
                          <p className="card-subtitle">
                            {post.readTime} mins read
                          </p>

                          {/* <time className="publish-date" dateTime="2022-04-15">
                            15 April 2022
                          </time> */}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                
              );
            })}
          </div>
        </div>

        {/* <div className="post-aside grid-list"> */}
        {/* <div className="card aside-card">
            <h3 className="headline headline-2 aside-title">
              <span className="span">Popular Posts</span>
            </h3>

            <ul className="popular-list">
              <li>
                <div className="popular-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": 64, "--height": 64 }}
                  >
                    <Image
                      src="/images/popular-post-1.jpg"
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="Creating is a privilege but it’s also a gift"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h4 className="headline headline-4 card-title">
                      <Link href="#" className="link hover-2">
                        Creating is a privilege but it’s also a gift
                      </Link>
                    </h4>

                    <div className="warpper">
                      <p className="card-subtitle">15 mins read</p>

                      <time className="publish-date" dateTime="2022-04-15">
                        15 April 2022
                      </time>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="popular-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": 64, "--height": 64 }}
                  >
                    <Image
                      src="/images/popular-post-2.jpg"
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="Being unique is better than being perfect"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h4 className="headline headline-4 card-title">
                      <Link href="#" className="link hover-2">
                        Being unique is better than being perfect
                      </Link>
                    </h4>

                    <div className="warpper">
                      <p className="card-subtitle">15 mins read</p>

                      <time className="publish-date" dateTime="2022-04-15">
                        15 April 2022
                      </time>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="popular-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": 64, "--height": 64 }}
                  >
                    <Image
                      src="/images/popular-post-3.jpg"
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="Every day, in every city and town across the country"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h4 className="headline headline-4 card-title">
                      <Link href="#" className="link hover-2">
                        Every day, in every city and town across the country
                      </Link>
                    </h4>

                    <div className="warpper">
                      <p className="card-subtitle">15 mins read</p>

                      <time className="publish-date" dateTime="2022-04-15">
                        15 April 2022
                      </time>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="popular-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": 64, "--height": 64 }}
                  >
                    <Image
                      src="/images/popular-post-4.jpg"
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="Your voice, your mind, your story, your vision"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h4 className="headline headline-4 card-title">
                      <Link href="#" className="link hover-2">
                        Your voice, your mind, your story, your vision
                      </Link>
                    </h4>

                    <div className="warpper">
                      <p className="card-subtitle">15 mins read</p>

                      <time className="publish-date" dateTime="2022-04-15">
                        15 April 2022
                      </time>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="popular-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": 64, "--height": 64 }}
                  >
                    <Image
                      src="/images/popular-post-2.jpg"
                      width="64"
                      height="64"
                      loading="lazy"
                      alt="Being unique is better than being perfect"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h4 className="headline headline-4 card-title">
                      <Link href="#" className="link hover-2">
                        Being unique is better than being perfect
                      </Link>
                    </h4>

                    <div className="warpper">
                      <p className="card-subtitle">15 mins read</p>

                      <time className="publish-date" dateTime="2022-04-15">
                        15 April 2022
                      </time>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div> */}

        {/* <div className="card aside-card">
            <h3 className="headline headline-2 aside-title">
              <span className="span">Last Comment</span>
            </h3>

            <ul className="comment-list">
              <li>
                <div className="comment-card">
                  <blockquote className="card-text">
                    “ Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner “
                  </blockquote>

                  <div className="profile-card">
                    <figure className="profile-banner img-holder">
                      <Image
                        src="/images/author-6.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Jane Cooper"
                      />
                    </figure>

                    <div>
                      <p className="card-title">Jane Cooper</p>

                      <time className="card-date" dateTime="2022-04-15">
                        15 April 2022
                      </time>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="comment-card">
                  <blockquote className="card-text">
                    “ Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner “
                  </blockquote>

                  <div className="profile-card">
                    <figure className="profile-banner img-holder">
                      <Image
                        src="/images/author-7.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Katen Doe"
                      />
                    </figure>

                    <div>
                      <p className="card-title">Katen Doe</p>

                      <time className="card-date" dateTime="2022-04-15">
                        15 April 2022
                      </time>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="comment-card">
                  <blockquote className="card-text">
                    “ Gosh jaguar ostrich quail one excited dear hello and bound
                    and the and bland moral misheard roadrunner “
                  </blockquote>

                  <div className="profile-card">
                    <figure className="profile-banner img-holder">
                      <Image
                        src="/images/author-8.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Barbara Cartland"
                      />
                    </figure>

                    <div>
                      <p className="card-title">Barbara Cartland</p>

                      <time className="card-date" dateTime="2022-04-15">
                        15 April 2022
                      </time>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div> */}

        {/* <div className="card aside-card insta-card">
            <Link href="#" className="logo">
              <Image
                src="/images/logo.svg"
                width="119"
                height="37"
                loading="lazy"
                alt="Wren logo"
              />
            </Link>

            <p className="card-text">Follow us on instagram</p>

            <ul className="insta-list">
              <li>
                <a
                  href="#"
                  className="insta-post img-holder"
                  style={{ "--width": 276, "--height": 277 }}
                >
                  <Image
                    src="/images/insta-post-1.png"
                    width="276"
                    height="277"
                    loading="lazy"
                    alt="insta post"
                    className="img-cover"
                  />
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="insta-post img-holder"
                  style={{ "--width": 276, "--height": 277 }}
                >
                  <Image
                    src="/images/insta-post-2.png"
                    width="276"
                    height="277"
                    loading="lazy"
                    alt="insta post"
                    className="img-cover"
                  />
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="insta-post img-holder"
                  style={{ "--width": 276, "--height": 277 }}
                >
                  <Image
                    src="/images/insta-post-3.png"
                    width="276"
                    height="277"
                    loading="lazy"
                    alt="insta post"
                    className="img-cover"
                  />
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="insta-post img-holder"
                  style={{ "--width": 276, "--height": 277 }}
                >
                  <Image
                    src="/images/insta-post-4.png"
                    width="276"
                    height="277"
                    loading="lazy"
                    alt="insta post"
                    className="img-cover"
                  />
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="insta-post img-holder"
                  style={{ "--width": 276, "--height": 277 }}
                >
                  <Image
                    src="/images/insta-post-5.png"
                    width="276"
                    height="277"
                    loading="lazy"
                    alt="insta post"
                    className="img-cover"
                  />
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="insta-post img-holder"
                  style={{ "--width": 276, "--height": 277 }}
                >
                  <Image
                    src="/images/insta-post-6.png"
                    width="276"
                    height="277"
                    loading="lazy"
                    alt="insta post"
                    className="img-cover"
                  />
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="insta-post img-holder"
                  style={{ "--width": 276, "--height": 277 }}
                >
                  <Image
                    src="/images/insta-post-7.png"
                    width="276"
                    height="277"
                    loading="lazy"
                    alt="insta post"
                    className="img-cover"
                  />
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="insta-post img-holder"
                  style={{ "--width": 276, "--height": 277 }}
                >
                  <Image
                    src="/images/insta-post-8.png"
                    width="276"
                    height="277"
                    loading="lazy"
                    alt="insta post"
                    className="img-cover"
                  />
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="insta-post img-holder"
                  style={{ "--width": 276, "--height": 277 }}
                >
                  <Image
                    src="/images/insta-post-9.png"
                    width="276"
                    height="277"
                    loading="lazy"
                    alt="insta post"
                    className="img-cover"
                  />
                </Link>
              </li>
            </ul>
          </div> */}
      </div>
      {/* </div> */}
    </section>
  );
};

export default RecentPosts;
