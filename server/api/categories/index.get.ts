import { categories } from "~/utils/data/getInitialCategoryPostData";

export default defineEventHandler(async (event) => {
  return JSON.parse(JSON.stringify(categories));
});
