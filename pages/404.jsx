import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | TheGrandHub</title>
      </Head>

      <div className="max-w-content mx-auto px-6 py-24 text-center">
        <h1 className="font-serif text-7xl mb-6">404</h1>
        <p className="text-2xl mb-4 opacity-80">Page Not Found</p>
        <p className="mb-8 opacity-60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-block px-8 py-3 border-2 rounded-md hover:opacity-80 transition-opacity"
          style={{ 
            borderColor: 'var(--accent)',
            color: 'var(--accent)'
          }}
        >
          Return Home
        </Link>
      </div>
    </>
  );
}
