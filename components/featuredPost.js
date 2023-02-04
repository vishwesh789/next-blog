import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const FeaturedPost = (props) => {
  const router = useRouter();

  const articles =
    !router.query.category || router.query.category == ("articles" || undefined)
      ? props.data.articles.item
      : props.data.articlesCatWise.item;

  return (
    <section className="section feature" aria-label="feature" id="featured">
      <div className="container">
        <h2 className="headline headline-2 section-title">
          <span className="span">
            {router.query.category
              ? router.query.category.toLocaleUpperCase()
              : "Editor's picked"}
          </span>
        </h2>

        <p className="section-text">Featured and highly rated articles</p>

        <ul className="feature-list">
          {articles?.map((item) => {
            return (
              <li key={item.id}>
                <div className="card feature-card">
                  <figure
                    className="card-banner img-holder"
                    style={{ "--width": 1602, "--height": 903 }}
                  >
                    <Image
                      src={item.attributes.img}
                      width="1602"
                      height="903"
                      loading="lazy"
                      alt="Self-observation is the first step of inner unfolding"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <div className="card-wrapper">
                      <div className="card-tag">
                        {item.attributes.tags.map((tag,index) => {
                          return (
                            <Link href="#" className="span hover-2" key={index}>
                              #{tag}
                            </Link>
                          );
                        })}
                      </div>

                      <div className="wrapper">
                        <ion-icon
                          name="time-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <span className="span">{Math.round(item.attributes.body.content.length/6/200)} mins read</span>
                      </div>
                    </div>

                    <h3 className="headline headline-3">
                      <Link
                        href={`/posts/${item.attributes.slug}`}
                        className="card-title hover-2"
                      >
                        {item.attributes.title}
                      </Link>
                    </h3>

                    <div className="card-wrapper">
                      <div className="profile-card">
                        <Image
                          src="/images/author-1.png"
                          width="48"
                          height="48"
                          loading="lazy"
                          alt="Joseph"
                          className="profile-banner"
                        />

                        <div>
                          <p className="card-title">
                            {item.attributes.author.data.attributes.username}
                          </p>

                          {/* <p className="card-subtitle">25 Nov 2022</p> */}
                        </div>
                      </div>

                      <Link href="#" className="card-btn">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <Link href={`/category/articles`} className="btn btn-secondary">
          <span className="span">Show More Posts</span>

          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
        </Link>
      </div>

      <Image
        src="/images/shadow-3.svg"
        width="500"
        height="1500"
        loading="lazy"
        alt=""
        className="feature-bg"
      />
    </section>
  );
};

export default FeaturedPost;
