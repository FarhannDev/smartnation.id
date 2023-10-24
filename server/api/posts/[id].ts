import { posts } from "~/utils/data/getInitialPostsData";

export default defineEventHandler(async (event) => {
  const id = event.context.params.id as string;

  // if (!Number.isInteger(id)) {
  //   throw createError({
  //     statusCode: 400,
  //     statusMessage: "ID should be an integer",
  //   });
  // }

  return posts.find((post) => post.id === id);
});
