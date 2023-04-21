import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import qs from "qs";
import { fetchArticles, fetchCategories } from "../../http";
import Head from "next/head";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";
import { healthJson } from "../../data-json/health";
import { useEffect, useState } from "react";
import PopularTags from "../../components/popularTags";
import RecentPosts from "../../components/recentPosts";

const Posts = (props) => {
  // console.log("propsssssssss in article", props.article[0].attributes);
  const article = props.article;
  const m = article[0].attributes.body.content;

  useEffect(() => {
    generateRandomRelatedPost();
    generatePopularRelatedPost();
    return () => {};
  }, []);

  const [randomPosts, setRandomPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Create an empty array to store the randomly selected items

  const generateRandomRelatedPost = () => {
    const selectedItems = [];
    while (selectedItems.length < 5) {
      const randomItem = getRandomItem(healthJson);
      if (!selectedItems.includes(randomItem)) {
        selectedItems.push(randomItem);
      }
    }

    setRandomPosts((oa) => [...oa, selectedItems]);
  };

  const generatePopularRelatedPost = () => {
    const selectedItems = [];
    while (selectedItems.length < 5) {
      const randomItem = getRandomItem(healthJson);
      if (!selectedItems.includes(randomItem)) {
        selectedItems.push(randomItem);
      }
    }

    setPopularPosts(selectedItems);
  };

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
              alt={article[0].attributes.title}
              className="img-cover"
            />
          </figure>

          <div style={{ flexDirection: "row", display: "flex", gap: 5 }}>
            <FacebookShareButton
              url={`https://www.acehealthwealth.com/posts/${article[0].attributes.slug}/`}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <PinterestShareButton
              url={`https://www.acehealthwealth.com/posts/${article[0].attributes.slug}/`}
            >
              <PinterestIcon size={32} round />
            </PinterestShareButton>
            <RedditShareButton
              url={`https://www.acehealthwealth.com/posts/${article[0].attributes.slug}/`}
            >
              <RedditIcon size={32} round />
            </RedditShareButton>
            <WhatsappShareButton
              url={`https://www.acehealthwealth.com/posts/${article[0].attributes.slug}/`}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton
              url={`https://www.acehealthwealth.com/posts/${article[0].attributes.slug}/`}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <TelegramShareButton
              url={`https://www.acehealthwealth.com/posts/${article[0].attributes.slug}/`}
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <TwitterShareButton
              url={`https://www.acehealthwealth.com/posts/${article[0].attributes.slug}/`}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>

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
                <div>
                  <p className="card-title">
                    By: {article[0].attributes.author.data.attributes.username}
                  </p>

                  {/* <p className="card-subtitle">25 Nov 2022</p> */}
                </div>
              </div>
            </div>
            <h1
              className="headline headline-3"
              style={{
                fontSize: 30,
              }}
            >
              {article[0].attributes.title}
            </h1>
            <div
              className="content"
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
          <div style={{ textAlign: "center", marginBottom: 30, marginTop: 80 }}>
            <p style={{ marginBottom: 20, fontWeight: "bold", fontSize: 18 }}>
              MEDICAL DISCLAIMER
            </p>
            <p style={{ fontSize: 14 }}>
              This content is provided solely for informational and educational
              purposes. It is not intended to give medical advice or to
              substitute for medical advice or treatment from a personal
              physician. Regarding specific health questions, all
              readers/viewers of this content are advised to consult their
              doctors or qualified health professionals. Acehealthwealth.com
               and the publisher of this content accept no responsibility for
              any health consequences that may result from anyone reading or
              following the information in this educational content. Before
              beginning any nutrition, supplement, or lifestyle programme, all
              viewers of this content, especially those taking prescription or
              over-the-counter medications, should consult their physicians.
            </p>
          </div>
        </div>
      </div>
      <RecentPosts
        randomPosts={randomPosts}
        popularPosts={popularPosts}
        cat={"posts"}
      />
      <PopularTags />
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

  // const catQuery = qs.stringify(
  //   {
  //     populate: {
  //       articles: true,
  //       image: true,
  //     },
  //   },
  //   {
  //     encodeValuesOnly: true,
  //   }
  // );

  // const categories = await fetchCategories(catQuery);

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
      // categories: categories.data.data,
      article: article.data.data,
    },
  };
}

export default Posts;
