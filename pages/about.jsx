import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | TheGrandHub</title>
        <meta name="description" content="Learn about Lorenzo LDS and the story behind TheGrandHub" />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl mb-4">About</h1>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Portrait */}
          <div className="md:col-span-1">
            <div className="aspect-square rounded-lg overflow-hidden mb-4">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: 'url(/images/portrait-placeholder.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: 'var(--border)'
                }}
              />
            </div>
            <div className="text-center">
              <h2 className="font-serif text-2xl mb-1">Lorenzo LDS</h2>
              <p className="opacity-60">Brazil</p>
            </div>
          </div>

          {/* Artist Statement */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="font-serif text-3xl mb-6">Artist Statement</h2>
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                I'm a Brazil-based enthusiast capturing quiet details in nature, macro textures, 
                and the mood of the night. My main profession is in healthcare as a physician in 
                Emergency Rooms, ICUs and Palliative Settings.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                I've set up this project as a means to contrast the pain and suffering I see with 
                the beauty and uniqueness this world has to offer. Each photograph is a reminder 
                to pause, breathe, and appreciate the extraordinary in the ordinary—from the 
                intricate patterns on a butterfly's wing to the vast expanse of the Milky Way 
                above Brazilian highlands.
              </p>
            </div>

            {/* Photography Focus */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div>
                <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--accent)' }}>
                  Macro
                </h3>
                <p className="text-sm opacity-70">
                  Intimate explorations of tiny worlds—dewdrops, petals, insects
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--accent)' }}>
                  Wildlife
                </h3>
                <p className="text-sm opacity-70">
                  Brazil's incredible biodiversity—from jaguars to toucans
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--accent)' }}>
                  Night
                </h3>
                <p className="text-sm opacity-70">
                  Celestial wonders and nocturnal atmospheres under dark skies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment & Approach (Optional) */}
        <div className="mt-16 pt-16 border-t" style={{ borderColor: 'var(--border)' }}>
          <h2 className="font-serif text-3xl mb-6 text-center">Philosophy</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg leading-relaxed opacity-80">
              Every image in this collection represents hours of patient observation, waiting for 
              the perfect light, and a deep respect for the natural world. Photography has taught 
              me to slow down and truly see—a practice that brings balance to the intensity of 
              emergency medicine.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl mb-4">Let's Connect</h3>
          <p className="mb-6 opacity-70">
            Have questions or interested in custom prints?
          </p>
          <a
            href="mailto:thegrandestboutique@gmail.com"
            className="inline-block px-8 py-3 border-2 rounded-md hover:opacity-80 transition-opacity"
            style={{ 
              borderColor: 'var(--accent)',
              color: 'var(--accent)'
            }}
          >
            Send me an email
          </a>
        </div>
      </div>
    </>
  );
}
