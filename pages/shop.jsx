{
  "lastUpdated": "2025-10-26",
  "products": [
    {
      "id": "crimson-nocturne-bloom",
      "title": "Crimson Nocturne in Bloom",
      "description": "Deep red roses captured in a dreamy, ethereal composition. Available on phone cases, stickers, prints, and more.",
      "image": "/images/shop/crimson-nocturne-bloom.jpg",
      "category": "Flowers",
      "priceRange": "$1.58 - $26.13",
      "redbubbleUrl": "https://www.redbubble.com/people/lorenzolds/shop"
    },
    {
      "id": "whisper-weathered-rose",
      "title": "Whisper of a Weathered Rose",
      "description": "A delicate pink rose with dark, vintage tones creating a moody floral aesthetic.",
      "image": "/images/shop/whisper-weathered-rose.jpg",
      "category": "Flowers",
      "priceRange": "$1.58 - $22.00",
      "redbubbleUrl": "https://www.redbubble.com/people/lorenzolds/shop"
    },
    {
      "id": "lilac-whispers-wind",
      "title": "Lilac Whispers on the Wind",
      "description": "Soft purple flowers with a blurred bokeh background, perfect for nature lovers.",
      "image": "/images/shop/lilac-whispers-wind.jpg",
      "category": "Flowers",
      "priceRange": "$1.58 - $22.00",
      "redbubbleUrl": "https://www.redbubble.com/people/lorenzolds/shop"
    },
    {
      "id": "bee-worker",
      "title": "Bee Worker",
      "description": "A stunning close-up of a bee on a vibrant pink rose, celebrating nature's pollinators.",
      "image": "/images/shop/bee-worker.jpg",
      "category": "Nature",
      "priceRange": "$1.71 - $9.36",
      "redbubbleUrl": "https://www.redbubble.com/people/lorenzolds/shop"
    },
    {
      "id": "rain-tank-reverie",
      "title": "Rain Tank Reverie",
      "description": "Industrial architecture meets artistic photography with dramatic lighting and texture.",
      "image": "/images/shop/rain-tank-reverie.jpg",
      "category": "Architecture",
      "priceRange": "$1.58 - $22.00",import Head from 'next/head';
import productsData from '../data/products.json';

export default function Shop() {
  return (
    <>
      <Head>
        <title>Shop | TheGrandHub</title>
        <meta name="description" content="Shop fine art prints, canvases, and more from Lorenzo LDS photography" />
      </Head>

      <div className="max-w-content mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl mb-4">Shop</h1>
          <p className="text-lg opacity-70 mb-6">
            Bring nature's beauty into your space
          </p>
          <a
            href="https://www.redbubble.com/people/lorenzolds/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 rounded-md hover:opacity-80 transition-opacity"
            style={{ 
              borderColor: 'var(--accent)',
              color: 'var(--accent)'
            }}
          >
            View All on Redbubble →
          </a>
        </div>

        {/* Best Sellers Grid */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl text-center mb-8">Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map(product => (
              <div 
                key={product.id}
                className="group"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Category Badge */}
                  <div 
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm"
                    style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
                  >
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="font-serif text-2xl mb-2">{product.title}</h3>
                  <p className="opacity-70 mb-3 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-sm mb-4 opacity-60">
                    Price range: {product.priceRange}
                  </p>

                  {/* Buy Button */}
                  <a
                    href={product.redbubbleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-6 py-3 rounded-md font-medium transition-all hover:opacity-90"
                    style={{ 
                      backgroundColor: 'var(--accent)',
                      color: 'var(--bg)'
                    }}
                  >
                    Buy on Redbubble →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <p className="text-lg mb-6 opacity-80">
            Discover more products, sizes, and formats
          </p>
          <a
            href="https://www.redbubble.com/people/lorenzolds/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 rounded-md hover:opacity-80 transition-opacity text-lg"
            style={{ 
              borderColor: 'var(--accent)',
              color: 'var(--accent)'
            }}
          >
            View Full Shop on Redbubble →
          </a>
        </div>

        {/* Info Section */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-2xl mb-4">About the Prints</h3>
          <p className="opacity-70 leading-relaxed">
            All prints are fulfilled through Redbubble, offering museum-quality fine art prints, 
            canvas wraps, metal prints, and more. Each piece is printed on demand with premium 
            materials and ships worldwide. Your purchase directly supports this independent 
            photography project.
          </p>
        </div>
      </div>
    </>
  );
}
      "redbubbleUrl": "https://www.redbubble.com/people/lorenzolds/shop"
    },
    {
      "id": "silent-branches-clear-sky",
      "title": "Silent Branches, Clear Sky",
      "description": "Minimalist winter branches against a serene sky, perfect for modern spaces.",
      "image": "/images/shop/silent-branches-clear-sky.jpg",
      "category": "Nature",
      "priceRange": "$1.58 - $26.13",
      "redbubbleUrl": "https://www.redbubble.com/people/lorenzolds/shop"
    },
    {
      "id": "earthwritten-strata",
      "title": "Earthwritten Strata",
      "description": "Natural rock formations displaying Earth's geological artistry in warm brown tones.",
      "image": "/images/shop/earthwritten-strata.jpg",
      "category": "Nature",
      "priceRange": "$15.00 - $25.84",
      "redbubbleUrl": "https://www.redbubble.com/people/lorenzolds/shop"
    },
    {
      "id": "forager-cerrado",
      "title": "Forager of the Cerrado",
      "description": "Wildlife photography capturing a unique moment in Brazil's cerrado ecosystem.",
      "image": "/images/shop/forager-cerrado.jpg",
      "category": "Wildlife",
      "priceRange": "$1.58 - $22.00",
      "redbubbleUrl": "https://www.redbubble.com/people/lorenzolds/shop"
    },
    {
      "id": "profile-daydreamer",
      "title": "Profile of a Daydreamer",
      "description": "Contemplative wildlife portrait with beautiful natural lighting.",
      "image": "/images/shop/profile-daydreamer.jpg",
      "category": "Wildlife",
      "priceRange": "$2.69 - $15.00",
      "redbubbleUrl": "https://www.redbubble.com/people/lorenzolds/shop"
    },
    {
      "id": "between-giants-air",
      "title": "Between Giants of Air",
      "description": "Dramatic cloud formations and sky photography showcasing nature's grandeur.",
      "image": "/images/shop/between-giants-air.jpg",
      "category": "Sky & Clouds",
      "priceRange": "$2.69 - $15.00",
      "redbubbleUrl": "https://www.redbubble.com/people/lorenzolds/shop"
    }
  ]
}
