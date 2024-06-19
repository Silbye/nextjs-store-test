import Post from "@/app/components/Post";

export async function generateMetadata({ params, searchParams }) {
  const post = await fetchData(params.id);
  return {
    title: "Post " + post.id,
    description: post.author,
  };
}

async function fetchData(id) {
  const res = await fetch("https://picsum.photos/id/" + id + "/info");
  const result = await res.json();
  return result;
}

const PagePost = async ({ params: { id } }) => {
  const post = await fetchData(id);

  return <Post post={post} />;
};

export default PagePost;
