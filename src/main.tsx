import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { RootLayout } from "./layouts/Root"
import { Blog } from "./pages/Blog"
import { Post } from "./pages/Post"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
        loader: async () => {
          const posts = await fetch("https://dummyjson.com/posts").then((res) =>
            res.json()
          )
          return posts
        },
      },
      {
        path: "blog/:postId",
        element: <Post />,
        loader: async ({ params }) => {
          const { postId } = params
          const post = await fetch(
            `https://dummyjson.com/posts/${postId}`
          ).then((res) => res.json())

          const comments = await fetch(
            `https://dummyjson.com/posts/${postId}/comments`
          ).then((res) => res.json())

          return { post, comments: comments.comments }
        },
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
