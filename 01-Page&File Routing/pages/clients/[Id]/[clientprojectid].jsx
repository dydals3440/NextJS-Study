import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Project Page for a Specific Project for a selected client</h1>
    </div>
  );
}
export default SelectedClientProjectPage;
