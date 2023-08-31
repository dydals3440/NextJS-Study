import { useRouter } from 'next/router';
// ... 3개는 필수 [...slug] 같은경우, slug [2020, 12] localhost:3000/blog/2020/12
function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
export default BlogPostsPage;
