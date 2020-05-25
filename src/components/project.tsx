/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { animated, useSpring, config } from "react-spring";
import Img from "gatsby-image";
import Layout from "@lekoarts/gatsby-theme-emilia/src/components/layout";
import HeaderProject from "./header-project";
import ProjectPagination from "@lekoarts/gatsby-theme-emilia/src/components/project-pagination";
import SEO from "@lekoarts/gatsby-theme-emilia/src/components/seo";

type ProjectProps = {
  project: {
    slug: string;
    title: string;
    description: string;
    descriptionNode: {
      childMdx: {
        body: string;
      };
    };
    coverImage: {
      url: string;
    };
    logo: { fluid: any; fixed: any };
    images: {
      fluid: any;
      basename: string;
      alt: string;
    }[];
  };
  pageContext: {
    prev: {
      slug: string;
      parent: {
        fileAbsolutePath: string;
      };
      title: string;
      cover: {
        childImageSharp: any;
      };
    };
    next: {
      slug: string;
      parent: {
        fileAbsolutePath: string;
      };
      title: string;
      cover: {
        childImageSharp: any;
      };
    };
  };
};

const Project = ({ project, pageContext: { prev, next } }: ProjectProps) => {
  const imageFade = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } });

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.description}
        pathname={project.slug}
        image={project.coverImage.url}
      />
      <HeaderProject
        title={project.title}
        description={project.descriptionNode.childMdx.body}
        logo={project.logo.fluid}
      />
      <Container sx={{ mt: [`-6rem`, `-6rem`, `-8rem`], maxWidth: 768 }}>
        {project.images.map((image) => (
          <animated.div key={image.basename} style={imageFade}>
            <Img fluid={image.fluid} alt={image.alt} sx={{ mb: [4, 4, 5], boxShadow: `xl` }} />
          </animated.div>
        ))}
        {/* <ProjectPagination prev={prev} next={next} /> */}
      </Container>
    </Layout>
  );
};

export default Project;
