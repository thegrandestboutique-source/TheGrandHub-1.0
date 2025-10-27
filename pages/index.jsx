import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>TheGrandHub | Nature, Night & Macro Photography</title>
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image - replace with actual image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-gradient-to-b from-transparent to-current"
            style={{
              backgroundImage: 'url(/images/gallery/pets/mumbojumbo_zilda.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.4
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
            TheGrandHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
            Nature, night, and macro — quiet moments turned into bold art.
          </p>
          <p className="text-lg mb-12 opacity-75">
            Photography by Lorenzo LDS · Brazil
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/gallery"
              className="px-8 py-3 border-2 rounded-md font-medium hover:bg-current hover:text-current transition-all"
              style={{ 
                borderColor: 'var(--accent)',
                color: 'var(--accent)'
              }}
            >
              View Gallery
            </Link>
            <Link 
              href="/shop"
              className="px-8 py-3 border-2 rounded-md font-medium transition-all hover:opacity-80"
              style={{ 
                borderColor: 'var(--accent)',
                backgroundColor: 'var(--accent)',
                color: 'var(--bg)'
              }}
            >
              Shop Prints
            </Link>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Capturing the Quiet Details
          </h2>
          <p className="text-lg opacity-80 leading-relaxed">
            From macro textures to the mood of the night, I document nature's beauty 
            as a contrast to my work in healthcare. Each photograph is an invitation 
            to pause and appreciate the world's unique moments.
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-content mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Macro */}
          <Link href="/gallery?filter=Macro" className="group">
            <div className="aspect-square relative overflow-hidden rounded-lg mb-4 transition-transform duration-500 group-hover:scale-105">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: 'url(/images/gallery/macro/red-rose-drop.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
            <h3 className="font-serif text-2xl mb-2 group-hover:opacity-70 transition-opacity">
              Macro
            </h3>
            <p className="opacity-70">
              Intimate details in tiny worlds
            </p>
          </Link>

          {/* Wildlife */}
          <Link href="/gallery?filter=Wildlife" className="group">
            <div className="aspect-square relative overflow-hidden rounded-lg mb-4 transition-transform duration-500 group-hover:scale-105">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: 'url(/images/gallery/wildlife/IMG_2801.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
            <h3 className="font-serif text-2xl mb-2 group-hover:opacity-70 transition-opacity">
              Wildlife
            </h3>
            <p className="opacity-70">
              Brazil's incredible biodiversity
            </p>
          </Link>

          {/* Night */}
          <Link href="/gallery?filter=Night" className="group">
            <div className="aspect-square relative overflow-hidden rounded-lg mb-4 transition-transform duration-500 group-hover:scale-105">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: 'url(/images/gallery/night/IMG_2229.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
            <h3 className="font-serif text-2xl mb-2 group-hover:opacity-70 transition-opacity">
              Night
            </h3>
            <p className="opacity-70">
              Celestial beauty and nocturnal moods
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
