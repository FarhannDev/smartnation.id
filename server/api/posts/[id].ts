import { posts } from "~/utils/data/getInitialPostsData";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  const postsData = posts.find((post) => post.slug === id);

  if (!postsData) {
    setResponseStatus(event, 404);
  }

  return {
    id: postsData?.id,
    title: postsData?.title,
    slug: postsData?.slug,
  };
});
