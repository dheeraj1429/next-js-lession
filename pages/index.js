import Link from 'next/link';
import { useRouter } from 'next/router';

function HomePage() {
   const router = useRouter();

   const SendHandler = function () {
      router.push('/about');
   };

   return (
      <div>
         <h1>Hello from next js</h1>
         <Link href="/about">About page</Link> <br />
         <Link href="/portfolio">portfolio page</Link> <br />
         <Link href="/portfolio/10">portfolio single page</Link> <br />
         <Link href="/clients/10">client single</Link> <br />
         <Link href="/clients/10/10">client single single project</Link> <br />
         <Link href="/blog/the-new-blog/132312131240012">single blog page</Link> <br />
         <button onClick={SendHandler}>click me</button>
      </div>
   );
}

export default HomePage;
