import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import qs from "qs";
import { fetchArticles, fetchCategories } from "../../http";

const Posts = (props) => {
  console.log("propsssssssss in article",props.article[0].attributes)
  const article = props.article
  return (
    <Layout data={props}>
      <div className="container" style={{ marginTop: 120 }}>
        <div className="card feature-card">
          <figure
            className="card-banner img-holder"
            style={{ "--width": 1602, "--height": 903 }}
          >
            <Image
              src={`http://localhost:1337${article[0].attributes.image.data.attributes.url}`}
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
                <Link href="#" className="span hover-2">
                  {/* #Travel */}
                </Link>

                <Link href="#" className="span hover-2">
                  {/* #Lifestyle */}
                </Link>
              </div>

              <div className="wrapper">
                <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                <span className="span">3 mins read</span>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="profile-card">
                <Image
                  src={`http://localhost:1337${article[0].attributes.image.data.attributes.url}`}
                  width="48"
                  height="48"
                  loading="lazy"
                  alt="Joseph"
                  className="profile-banner"
                />

                <div>
                  <p className="card-title">{article[0].attributes.author.data.attributes.username}</p>

                  <p className="card-subtitle">25 Nov 2022</p>
                </div>
              </div>
            </div>
            <h1 className="headline headline-3">
              <Link href="#" className="card-title hover-2">
                {article[0].attributes.title}
              </Link>
            </h1>
            <p
              style={{
                marginTop: 100,
                wordSpacing: 2,
                color: "golden",
                fontFamily: "monospace",
                fontSize: 20,
              }}
            >
             {article[0].attributes.body.section1}
            </p>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  // Fetch data from external API

  const catQuery = qs.stringify(
    {
      populate: {
        articles: true,
        image: true,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const categories = await fetchCategories(catQuery);

  const artQueryWithFilter = qs.stringify(
    {
      populate: {
        category: true,
        image: true,
        author: true,
        body:true,
      },
      filters: {
        slug: { $eq: query.article },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );



  const article = await fetchArticles(artQueryWithFilter);

    console.log("article ssrrrrrrrrrr",query);

  // Pass data to the page via props
  return {
    props: {
      categories: categories.data.data,
     article:article.data.data
    },
  };
}

export default Posts;
