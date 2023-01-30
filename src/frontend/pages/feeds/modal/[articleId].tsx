import { useRouter } from 'next/router';

export default function ArticleModal() {
  const router = useRouter();
  const { modal } = router.query;

  return (
    <div>
      <h1>Article</h1>
      {modal && <h1>MODAL</h1>}
    </div>
  );
}
