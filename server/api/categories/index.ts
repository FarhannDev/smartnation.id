import { categories } from "~/utils/data/getInitialCategoryPostData";

export default defineEventHandler((event) => {
  const data = {
    toJSON() {
      return categories;
    },
  };

  return data;
});
