import FeaturedPost from "../../components/featuredPost";
import qs from "qs";
import { fetchArticles, fetchCarrers, fetchCategories, fetchTechnologies } from "../../http";
import Layout from "../../components/layout";

const Category = (props) => {
  return (
    <Layout data={props}>
      <FeaturedPost data={props} />
    </Layout>
  );
};

export default Category;

export async function getStaticPaths() {
  const query = qs.stringify(
    {
      fields: ["slug"],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const slugs = await fetchCategories(query);

  const pathArray = [];

  slugs.data.data.forEach(myFunction);

  function myFunction(value, index, array) {
    pathArray.push({ params: { category: value.attributes.slug } });
  }

  return {
    paths: pathArray,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
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

  const technologyQuery = qs.stringify(
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

  const technologies = await fetchTechnologies(technologyQuery);


  //   console.log(articles.data.data,query);

  // Pass data to the page via props
  return {
    props: {
      categories: categories.data.data,
      articles: {
        item: articles.data.data,
        pagination: articles.data.meta.pagination,
        parentPath:"posts"
      },
      careers: {
        item: careers.data.data,
        pagination: careers.data.meta.pagination,
        parentPath:"careers"
      },
      technologies: {
        item: technologies.data.data,
        pagination: technologies.data.meta.pagination,
        parentPath:"technologies"
      },
    },
  };
}
