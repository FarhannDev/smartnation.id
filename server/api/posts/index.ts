import { posts } from "~/utils/data/getInitialPostsData";

export default defineEventHandler(async (event) => {
  return JSON.parse(
    JSON.stringify(
      posts.sort((a, b) =>
        b.date_gmt.toString().localeCompare(a.date_gmt.toString())
      )
    )
  );
});
