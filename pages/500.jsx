import Head from 'next/head';
import Link from 'next/link';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - Server Error | TheGrandHub</title>
      </Head>

      <div className="max-w-content mx-auto px-6 py-24 text-center">
        <h1 className="font-serif text-7xl mb-6">500</h1>
        <p className="text-2xl mb-4 opacity-80">Server Error</p>
        <p className="mb-8 opacity-60">
          Something went wrong on our end. Please try again later.
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
