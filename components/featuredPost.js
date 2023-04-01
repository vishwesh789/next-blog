import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const FeaturedPost = (props) => {
  const router = useRouter();
// console.log("queryyyyyyyyyy",router)
  // const articles =
  //   !router.query.category || router.query.category == ("articles" || undefined)
  //     ? props.data.articles.item
  //     : props.data.articlesCatWise.item;
  
  let articles;
  let parentPath
      switch (router.query.category) {
        case "articles":
          articles = props.data.careers.item;
          parentPath =props.data.careers.parentPath
          break;
        case "health":
          articles = props.data.articles.item;
          parentPath =props.data.articles.parentPath
          break;
        case "career":
          articles = props.data.careers.item;
          parentPath =props.data.careers.parentPath
          break;
          case "technology":
            articles = props.data.technologies.item;
            parentPath =props.data.technologies.parentPath
          break;
          case "lifestyle":
            articles = props.data.lifestyles.item;
            parentPath =props.data.lifestyles.parentPath
            break;
          default:
          articles = props.data.careers.item
          parentPath =props.data.careers.parentPath
      
      }
  
  
  
  
  

  return (
    <section className="section feature" aria-label="feature" id="featured">
      {router.query.category && (
        <Head>
          <title>{router.query.category}</title>
        </Head>
      )}
      <div className="container">
        <h2
          className="headline headline-2 section-title"
          style={{ marginTop: 30 }}
        >
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
                      alt={item.attributes.title}
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <div className="card-wrapper">
                      <div className="card-tag">
                        {item.attributes.tags.map((tag, index) => {
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

                        <span className="span">
                          {item.attributes.readTime} mins read
                        </span>
                      </div>
                    </div>

                    <h3 className="headline headline-3">
                      <Link
                        href={`/${parentPath}/${item.attributes.slug}`}
                        className="card-title hover-2"
                      >
                        {item.attributes.title}
                      </Link>
                    </h3>

                    <div className="card-wrapper">
                      <div className="profile-card">
                       

                        <div>
                          <p className="card-title">
                           By: {item.attributes.author.data.attributes.username}
                          </p>

                          {/* <p className="card-subtitle">25 Nov 2022</p> */}
                        </div>
                      </div>

                      {/* <Link
                        href={`/posts/${item.attributes.slug}`}
                        className="card-btn"
                      >
                        Read more
                      </Link> */}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <Link href={`/category/health`} className="btn btn-secondary">
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

// Health's content is for informational and educational purposes only. Our website is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
