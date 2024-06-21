import Post from "@/app/components/Post";

export async function generateMetadata({ params, searchParams }) {
  const post = await fetchData(params.id);
  return {
    title: "Post " + post.id,
    description: post.author,
  };
}

export async function generateStaticParams() {
  const res = await fetch("https://picsum.photos/v2/list/");

  const posts = await res.json();

  return posts.map((post) => ({
    id: post.id,
  }));
}

async function fetchData(id) {
  const res = await fetch("https://picsum.photos/id/" + id + "/info", {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

const PagePost = async ({ params }) => {
  const post = await fetchData(params.id);

  return <Post post={post} />;
};

export default PagePost;
