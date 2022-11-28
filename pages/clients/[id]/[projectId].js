import { useRouter } from 'next/router';

function SingleClientProjectPage() {
   const router = useRouter();

   return (
      <h1>
         Single client - {router.query.id} Single project - {router.query.projectId}
      </h1>
   );
}

export default SingleClientProjectPage;
