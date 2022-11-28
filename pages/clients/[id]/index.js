import { useRouter } from 'next/router';

function SingleClientPage() {
   const router = useRouter();
   return <h1>Single client - {router.query.id}</h1>;
}

export default SingleClientPage;
