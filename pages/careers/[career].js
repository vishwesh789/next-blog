import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import qs from "qs";
import { fetchCategories, fetchCarrers } from "../../http";
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

const Careers = (props) => {
  // console.log("propsssssssss in career", props.career[0].attributes);
  const career = props.career;
  const m = career[0].attributes.body.content;

  return (
    <Layout data={props}>
      <Head>
        <title>{career[0].attributes.title}</title>
        <meta name="description" content={career[0].attributes.metaDesc} />

        <meta
          property="og:url"
          content={`https://www.acehealthwealth.com/careers/${career[0].attributes.slug}/`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={career[0].attributes.title} />
        <meta
          property="og:description"
          content={career[0].attributes.metaDesc}
        />
        <meta property="og:image" content={career[0].attributes.img} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="acehealthwealth.com" />
        <meta
          property="twitter:url"
          content={`https://www.acehealthwealth.com/careers/${career[0].attributes.slug}/`}
        />
        <meta name="twitter:title" content={career[0].attributes.title} />
        <meta
          name="twitter:description"
          content={career[0].attributes.metaDesc}
        />
        <meta name="twitter:image" content={career[0].attributes.img} />
      </Head>
      <div className="container" style={{ marginTop: 120 }}>
        <div className="card feature-card">
          <figure
            className="card-banner img-holder"
            style={{ "--width": 1602, "--height": 903 }}
          >
            <Image
              src={career[0].attributes.img}
              width="1602"
              height="903"
              loading="lazy"
              alt={career[0].attributes.title}
              className="img-cover"
            />
          </figure>

          <div style={{ flexDirection: "row", display: "flex", gap:5}}>
            <FacebookShareButton
              url={`https://www.acehealthwealth.com/careers/${career[0].attributes.slug}/`}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <PinterestShareButton
              url={`https://www.acehealthwealth.com/careers/${career[0].attributes.slug}/`}
            >
              <PinterestIcon size={32} round />
            </PinterestShareButton>
            <RedditShareButton
              url={`https://www.acehealthwealth.com/careers/${career[0].attributes.slug}/`}
            >
              <RedditIcon size={32} round />
            </RedditShareButton>
            <WhatsappShareButton
              url={`https://www.acehealthwealth.com/careers/${career[0].attributes.slug}/`}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton
              url={`https://www.acehealthwealth.com/careers/${career[0].attributes.slug}/`}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <TelegramShareButton
              url={`https://www.acehealthwealth.com/careers/${career[0].attributes.slug}/`}
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <TwitterShareButton
              url={`https://www.acehealthwealth.com/careers/${career[0].attributes.slug}/`}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>

          <div className="card-content">
            <div className="card-wrapper">
              <div className="card-tag">
                {career[0].attributes.tags.map((tag, index) => {
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
                  {career[0].attributes.readTime} mins read
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
                    {career[0].attributes.author.data.attributes.username}
                  </p>

                  {/* <p className="card-subtitle">25 Nov 2022</p> */}
                </div>
              </div>
            </div>
            <h1 className="headline headline-3">
              {career[0].attributes.title}
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
            {career[0].attributes.dataSources && (
              <div>
                <h3>Data Sources:</h3>
                {career[0].attributes.dataSources.map((source, index) => {
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
  const slugs = await fetchCarrers(query);
  // console.log("slugsssssss",slugs.data)
  const pathArray = [];

  slugs.data.data.forEach(myFunction);

  function myFunction(value, index, array) {
    pathArray.push({ params: { career: value.attributes.slug } });
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
        careers: true,
        articles: true,
        image: true,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const categories = await fetchCategories(catQuery);

  const carrerQueryWithFilter = qs.stringify(
    {
      populate: {
        category: true,
        image: true,
        author: true,
        body: true,
      },
      filters: {
        slug: { $eq: context.params.career },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const career = await fetchCarrers(carrerQueryWithFilter);

  // console.log("career ssrrrrrrrrrr", context);

  // Pass data to the page via props
  return {
    props: {
      categories: categories.data.data,
      career: career.data.data,
    },
  };
}

export default Careers;
