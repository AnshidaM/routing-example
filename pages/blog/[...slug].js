//to catch all routes
import { useRouter } from "next/router";
import React from "react";

const BlogPostsPage = () => {
  const router = useRouter();
  console.log(router.query);

  //   http://localhost:3000/blog/2000/10/10 returns
  //   {
  //     "slug": [
  //         "2000",
  //         "10",
  //         "10"
  //     ]
  // } as response for router.query
  return (
    <div>
      <h1> The Blog Posts</h1>
    </div>
  );
};

export default BlogPostsPage;
