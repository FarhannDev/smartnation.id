import axios from "axios";

interface Category {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
}

export default defineEventHandler(async (event) => {
  const response = await axios.get(
    `https://smartnation.id/wp-json/wp/v2/categories`
  );

  const items: Category[] = await response.data;

  const categories = items.map((item) => ({
    id: item.id,
    title: item.name,
    slug: item.slug,
    description: item.description,
    count: item.count,
  }));

  return {
    status: "success",
    message: "get all category posts",
    data: categories,
  };
});
