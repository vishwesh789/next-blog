import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import qs from "qs";
import { fetchArticles, fetchCategories } from "../../http";
import Head from "next/head";

const Posts = (props) => {
  console.log("propsssssssss in article", props.article[0].attributes);
  const article = props.article;
  const m = article[0].attributes.body.content;

  return (
    <Layout data={props}>
      <Head>
        <title>{article[0].attributes.title}</title>
        <meta name="description" content={article[0].attributes.metaDesc} />

        <meta
          property="og:url"
          content={`https://www.acehealthwealth.com/posts/${article[0].attributes.slug}/`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={article[0].attributes.title} />
        <meta
          property="og:description"
          content={article[0].attributes.metaDesc}
        />
        <meta property="og:image" content={article[0].attributes.img} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="acehealthwealth.com" />
        <meta
          property="twitter:url"
          content={`https://www.acehealthwealth.com/posts/${article[0].attributes.slug}/`}
        />
        <meta name="twitter:title" content={article[0].attributes.title} />
        <meta
          name="twitter:description"
          content={article[0].attributes.metaDesc}
        />
        <meta name="twitter:image" content={article[0].attributes.img} />
      </Head>
      <div className="container" style={{ marginTop: 120 }}>
        <div className="card feature-card">
          <figure
            className="card-banner img-holder"
            style={{ "--width": 1602, "--height": 903 }}
          >
            <Image
              src={article[0].attributes.img}
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
                {article[0].attributes.tags.map((tag, index) => {
                  return (
                    <Link href="#" className="span hover-2" key={index}>
                      #{tag}
                    </Link>
                  );
                })}
              </div>

              <div className="wrapper">
                <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                <span className="span">
                  {article[0].attributes.readTime} mins read
                </span>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="profile-card">
                <Image
                  src={"/images/author-1.png"}
                  width="48"
                  height="48"
                  loading="lazy"
                  alt="Joseph"
                  className="profile-banner"
                />

                <div>
                  <p className="card-title">
                    {article[0].attributes.author.data.attributes.username}
                  </p>

                  {/* <p className="card-subtitle">25 Nov 2022</p> */}
                </div>
              </div>
            </div>
            <h1 className="headline headline-3">
              <Link href="#" className="card-title hover-2">
                {article[0].attributes.title}
              </Link>
            </h1>
            <div
              style={{
                marginTop: 30,
                wordSpacing: 3,
                fontSize: 18,
                fontWeight: "normal",
              }}
              dangerouslySetInnerHTML={{
                __html: m,
              }}
            />
            {article[0].attributes.dataSources && (
              <div>
                <h3>Data Sources:</h3>
                {article[0].attributes.dataSources.map((source, index) => {
                  return (
                    <Link
                      href={source}
                      target="_blank"
                      className="span hover-2"
                      key={index}
                      style={{ marginBottom: 10, marginTop: 10 }}
                    >
                      {source.substring(0, 40)}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const query = qs.stringify(
    {
      fields: ["slug"],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const slugs = await fetchArticles(query);
  // console.log("slugsssssss",slugs.data)
  const pathArray = [];

  slugs.data.data.forEach(myFunction);

  function myFunction(value, index, array) {
    pathArray.push({ params: { article: value.attributes.slug } });
  }

  return {
    paths: pathArray,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  // Fetch data from external API
  console.log("contexttttt", context);

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
        body: true,
      },
      filters: {
        slug: { $eq: context.params.article },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const article = await fetchArticles(artQueryWithFilter);

  // console.log("article ssrrrrrrrrrr", context);

  // Pass data to the page via props
  return {
    props: {
      categories: categories.data.data,
      article: article.data.data,
    },
  };
}

export default Posts;
