import axios from "axios";

interface Posts {
  id: number | string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  categories: Array<number>;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

export default defineEventHandler(async (event) => {
  const apiBaseUrl: string = "https://smartnation.id/wp-json/wp/v2";
  const abortController: AbortController = new AbortController();
  const posts: Posts[] = [];

  try {
    const endpoint: string = `posts`;
    const response = await axios.get(`${apiBaseUrl}/${endpoint}`);
    if (!response.data)
      throw new Error(`Failed Fetch Data HTTP status ${response.status}`);
    const data = await response.data;
    posts.push(...data);
  } catch (error) {
    console.log(error);
  }

  return posts.map((post) => ({
    id: post.slug,
    title: post.title.rendered,
    categories: post.categories,
    author: post.author,
    excerpt: post.excerpt.rendered,
  }));
});
