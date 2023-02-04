import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/hero";
import Topics from "../components/topics";
import FeaturedPost from "../components/featuredPost";
import PopularTags from "../components/popularTags";
import RecentPosts from "../components/recentPosts";
import { fetchArticles, fetchCategories } from "../http";
import Layout from "../components/layout";
import qs from "qs";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home(props) {
 

  return (
    <>
      <Head>
        <title>myforexbuddy - Perosonal Blog Website</title>
      </Head>
      <>
        <main>
          <article>
            <Layout data={props}>
              <Hero />
              <Topics data={props} />
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

export async function getStaticProps({query}) {
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

  console.log("paginationnnnnnnnnnnnnnn",articles.data.data);

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
