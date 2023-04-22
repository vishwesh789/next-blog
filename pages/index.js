import Head from "next/head";
import FeaturedPost from "../components/featuredPost";
import { fetchArticles, fetchCategories } from "../http";
import Layout from "../components/layout";
import qs from "qs";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>acehealthwealth - Health and Wealth Blog Website</title>
        <meta
          name="description"
          content="Our Vision is to share our knowledge related to Health and Wealth. Let us embark together on this quest for the truth... and have some fun along the way."
        />
      </Head>
      <>
        <main className="herooooooooooooo">
          <article>
            <Layout data={props}>
              {/* <Hero /> */}
              {/* <Topics data={props} /> */}
              <FeaturedPost data={props} />
              {/* <PopularTags /> */}
              {/* <RecentPosts /> */}
            </Layout>
          </article>
        </main>
      </>
    </>
  );
}

export async function getStaticProps({ query }) {
  // Fetch data from external API
  console.log("querrryyyyyyyyyy  index", query);

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

  const artQuery = qs.stringify(
    {
      populate: {
        category: true,
        image: true,
        author: true,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const articles = await fetchArticles(artQuery);

  console.log("paginationnnnnnnnnnnnnnn", articles.data.data);

  // Pass data to the page via props
  return {
    props: {
      categories: categories.data.data,
      articles: {
        item: articles.data.data,
        pagination: articles.data.meta.pagination,
      },
    },
  };
}
