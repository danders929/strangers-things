// fetches an array of posts from the API and renders each Post as as <Post>
import Post from './Posts'
import { useGetPostsQuery } from './postSlice'

export default function Posts(){
  const { data: posts } = useGetPostsQuery();
  
  return (
    <>
      <h2>Posts</h2>
      <Post />
    </>
  )
}
