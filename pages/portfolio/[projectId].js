import { useRouter } from 'next/router';

function PortfolioSinglePage() {
   const router = useRouter();

   return (
      <div>
         <h1>Single PortFolio {router.query.projectId}</h1>
      </div>
   );
}

export default PortfolioSinglePage;
