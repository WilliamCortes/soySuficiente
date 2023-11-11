import { GetStaticProps, NextPage } from "next";
import { GetStaticPaths } from "next";
import Layout from "@/components/layout";
import PostsRepository from "@/repositories/posts.repository";
import { TPosts } from "@/types";
import { PostView } from "@/components/posts/postView";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withTranslation } from "next-i18next";

type Props = {
  post: TPosts;
  suggested: TPosts[];
};

const PostSlug: NextPage<Props> = ({ post, suggested }) => {
  const layoutProps = {
    title: post.title,
    description: post.description,
    logo: post.image,
  };
  return (
    <Layout {...layoutProps}>
      <PostView suggested={suggested} {...post} />
    </Layout>
  );
};
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  try {
    const posts = await PostsRepository.getAll();

    return {
      paths: posts.map((post: TPosts) => ({ params: { postSlug: post.slug } })),
      fallback: "blocking",
    };
  } catch (error) {
    console.error("🚀 ~ [postSlug].tsx:GetStaticPaths= ~ error:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const post = await PostsRepository.getBySlug(
      ctx.params?.postSlug as string
    );
    const suggested = await PostsRepository.getAll();
    const i18nProps = await serverSideTranslations(ctx?.locale || "es-CO", [
      "common",
      "footer",
    ]);

    return {
      props: { post, suggested, ...i18nProps },
    };
  } catch (error) {
    console.error("🚀 ~[postSlug].tsx:getStaticProps ~ error:", error);
    return { notFound: true };
  }
};

export default withTranslation()(PostSlug);
