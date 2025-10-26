import Head from 'next/head';
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
