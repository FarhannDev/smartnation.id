import { categories } from "~/utils/data/getInitialCategoryPostData";

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id) as number;

  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID should be an integer",
    });
  }

  return categories.find((category) => category.id === id);
});
