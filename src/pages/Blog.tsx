import { useLoaderData, Link } from "react-router-dom"
import { Post } from "../types"

export function Blog() {
  const { posts } = useLoaderData() as { posts: Post[] }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Blog</h2>
      <ul className="grid grid-cols-2 gap-2">
        {posts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <li className="border">{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
