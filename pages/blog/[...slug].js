import { useRouter } from 'next/router';

function BlogSlugPage() {
   const router = useRouter();
   console.log(router);

   return (
      <div>
         <h1>Blog Slug Page</h1>
      </div>
   );
}

export default BlogSlugPage;
