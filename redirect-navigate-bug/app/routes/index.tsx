import { useSearchParams, Link } from '@remix-run/react';

export default function Index() {
  const [searchParams] = useSearchParams();
  return (
    <main>
      <h1>Index Page</h1>
      {searchParams.has('success') && <p>Success! No bug in this code!</p>}
      <Link to="/bug">Go the the bug</Link>
    </main>
  );
}
