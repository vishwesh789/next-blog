import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero";
import Topics from "../components/topics";
import FeaturedPost from "../components/featuredPost";
import PopularTags from "../components/popularTags";
import RecentPosts from "../components/recentPosts";
import { fetchArticles, fetchCarrers, fetchCategories } from "../http";
import Layout from "../components/layout";
import qs from "qs";
import Link from "next/link";
import { useEffect, useRef } from "react";

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

  

  const careerQuery = qs.stringify(
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

  const careers = await fetchCarrers(careerQuery);


  // Pass data to the page via props
  return {
    props: {
      categories: categories.data.data,
      careers: {
        item: careers.data.data,
        pagination: careers.data.meta.pagination,
        parentPath:"careers"
      },
    },
  };
}
