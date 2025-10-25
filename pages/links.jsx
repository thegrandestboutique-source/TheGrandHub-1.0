import Head from 'next/head';

export default function Links() {
  const links = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/the_grandboutique?igsh=MWVycWl2cGMyOHEw',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
          <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      description: 'Follow for daily photo updates'
    },
    {
      name: '500px',
      url: 'https://500px.com/lorenzolds',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.439 9.01c-.552 0-1 .449-1 1 0 .551.448 1 1 1 .551 0 .999-.449.999-1 0-.551-.448-1-.999-1zm12.439-5.01h-15.878c-2.209 0-4 1.791-4 4v8c0 2.209 1.791 4 4 4h15.878c2.209 0 4-1.791 4-4v-8c0-2.209-1.791-4-4-4zm-12.439 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.5-2.5c0-.276.224-.5.5-.5h4c.276 0 .5.224.5.5s-.224.5-.5.5h-4c-.276 0-.5-.224-.5-.5zm0-2c0-.276.224-.5.5-.5h4c.276 0 .5.224.5.5s-.224.5-.5.5h-4c-.276 0-.5-.224-.5-.5z"/>
        </svg>
      ),
      description: 'Portfolio & high-res photography'
    },
    {
      name: 'Redbubble Shop',
      url: 'https://www.redbubble.com/people/lorenzolds/shop',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6v2h2l2 12H4L6 8h2V6a4 4 0 118 0zm-2 0a2 2 0 10-4 0v2h4V6z"/>
        </svg>
      ),
      description: 'Buy prints, canvases & more'
    },
    {
      name: 'Pinterest',
      url: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.804 1.604.804 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.027-4.625 4.235 0 1.027.547 2.305 1.422 2.712.132.062.203.034.234-.094l.193-.793c.017-.071.009-.132-.049-.202-.288-.351-.517-.995-.517-1.597 0-1.544 1.169-3.038 3.161-3.038 1.723 0 2.924 1.172 2.924 2.848 0 1.894-.957 3.205-2.201 3.205-.687 0-1.201-.568-1.036-1.265.197-.833.579-1.732.579-2.332 0-.538-.289-.986-.889-.986-.705 0-1.271.729-1.271 1.706 0 .622.211 1.044.211 1.044l-.804 3.408c-.25 1.058-.037 2.709-.019 2.858.01.087.123.107.173.042.075-.097 1.003-1.463 1.315-2.467.088-.283.486-1.865.486-1.865.257.492 1.007.908 1.808.908 2.381 0 4.107-2.169 4.107-4.869 0-2.579-2.091-4.493-4.932-4.493z"/>
        </svg>
      ),
      description: 'Visual inspiration boards'
    },
    {
      name: 'TikTok / YouTube Shorts',
      url: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      ),
      description: 'Short-form content & behind the scenes'
    },
    {
      name: 'Fine Art America',
      url: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      description: 'Premium art marketplace'
    },
    {
      name: 'Email',
      url: 'mailto:thegrandestboutique@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      description: 'Get in touch directly'
    }
  ];

  return (
    <>
      <Head>
        <title>Links | TheGrandHub</title>
        <meta name="description" content="Connect with Lorenzo LDS across platforms" />
      </Head>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl mb-4">Links</h1>
          <p className="text-lg opacity-70">
            Connect across platforms
          </p>
        </div>

        {/* Links Grid */}
        <div className="space-y-4">
          {links.map(link => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
              rel={link.url.startsWith('#') || link.url.startsWith('mailto:') ? '' : 'noopener noreferrer'}
              className="flex items-center gap-4 p-6 rounded-lg border-2 transition-all hover:scale-[1.02] group"
              style={{ borderColor: 'var(--border)' }}
            >
              {/* Icon */}
              <div 
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ backgroundColor: 'var(--border)' }}
              >
                {link.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="font-medium text-lg mb-1 group-hover:opacity-70 transition-opacity">
                  {link.name}
                </h3>
                <p className="text-sm opacity-60">
                  {link.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="mt-12 text-center opacity-60">
          <p>📍 Based in Brazil</p>
        </div>
      </div>
    </>
  );
}
