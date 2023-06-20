import { useLoaderData } from "react-router-dom"
import { Post, Comment } from "../types"

export function Post() {
  const { post, comments } = useLoaderData() as {
    post: Post
    comments: Comment[]
  }

  return (
    <div>
      <h2 className="text-xl font-bold">{post.title}</h2>
      <ul className="flex gap-1">
        {post.tags.map((tag) => (
          <li className="bg-slate-300 rounded-full px-2" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      <p className="mb-6">{post.body}</p>
      <ul className="space-y-2">
        {comments.map((comment) => (
          <li key={comment.id}>
            <h4 className="font-bold text-sm">{comment.user.username}</h4>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
