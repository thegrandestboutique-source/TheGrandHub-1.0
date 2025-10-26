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
            </div>
          </div>

          {/* Artist Statement */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="font-serif text-3xl mb-6">Artist Statement</h2>
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                I'm a Brazil-based enthusiast capturing quiet details in nature, macro textures, 
                my pets, and the mood of the night. My main profession is in healthcare as a physician. 
                I work in Emergency Rooms, ICUs and Palliative Settings.
              </p>
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                I've set up this project as a means to contrast the pain and suffering I see with 
                the beauty and uniqueness this world has to offer, and to offer this point of view 
                to whomever allows me the privilege. Each photograph is a reminder to pause, breathe, 
                and appreciate the extraordinary in the ordinary—from the intricate patterns on a 
                flower's petals to the vast expanse of the Milky Way above the Brazilian wilderness.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                I am still an amateur and am aware I have very much to learn. My setup is sub-optimal 
                for better quality pictures, so the funds gathered from donations and product purchasing 
                will be used in reinvesting in this project.
              </p>
            </div>

            {/* Photography Focus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <div>
                <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--accent)' }}>
                  Macro
                </h3>
                <p className="text-sm opacity-70">
                  Intimate explorations of tiny worlds—dewdrops, petals, insects, things unseen and hidden.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--accent)' }}>
                  Wildlife
                </h3>
                <p className="text-sm opacity-70">
                  Brazil's incredible biodiversity—from anteaters to insects.
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
              <div>
                <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--accent)' }}>
                  Pets
                </h3>
                <p className="text-sm opacity-70">
                  Everyday shenanigans and cuteness from my furballs and loving family.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16 pt-16 border-t" style={{ borderColor: 'var(--border)' }}>
          <h2 className="font-serif text-3xl mb-6 text-center">Philosophy</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg leading-relaxed opacity-80">
              Every image in this collection represents the sum of several attempts and independent 
              research for better and unique angles. Photography has taught me to focus, think 
              differently, and improvise approaches—a practice that brings a lot of benefits to 
              the intensity of emergency medicine.
            </p>
          </div>
        </div>

        {/* Open Source & Privacy */}
        <div className="mt-16 pt-16 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Open Source Section */}
            <div>
              <h2 className="font-serif text-3xl mb-6">Open Source & Copyright</h2>
              <p className="text-lg leading-relaxed opacity-90 mb-4">
                This website's <strong>code is open source</strong> and freely available under the MIT License. 
                You're welcome to use, modify, and distribute the code for your own projects. I am by no means 
                a coder and have used the help of AI to assist me in the creation of this, so please understand 
                I may not be of much help in implementing my code in your project.
              </p>
              <p className="text-lg leading-relaxed opacity-90 mb-4">
                However, all <strong>photographs are copyrighted © Lorenzo LDS</strong>. 
                They may not be used, reproduced, or distributed without explicit permission.
              </p>
              <a
                href="https://github.com/thegrandestboutique-source/TheGrandHub-1.0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: 'var(--accent)' }}
              >
                View source code on GitHub →
              </a>
            </div>

            {/* Privacy Section */}
            <div>
              <h2 className="font-serif text-3xl mb-6">Privacy & Transparency</h2>
              <p className="text-lg leading-relaxed opacity-90 mb-4">
                Your privacy matters. This website is designed to respect your browsing experience:
              </p>
              <ul className="space-y-2 mb-6 ml-6">
                <li className="text-lg opacity-80">• <strong>No cookies</strong> for tracking or advertising</li>
                <li className="text-lg opacity-80">• <strong>No ads</strong> will ever be displayed</li>
                <li className="text-lg opacity-80">• <strong>No personal data</strong> collected or sold</li>
              </ul>
              <p className="text-lg leading-relaxed opacity-90 mb-4">
                For basic traffic insights, this site uses <strong>Simple Analytics</strong>—a privacy-first, 
                server-side solution that:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-lg opacity-80">• Does not use cookies or track individuals</li>
                <li className="text-lg opacity-80">• Does not collect personal information</li>
                <li className="text-lg opacity-80">• Provides aggregate metrics only (views, referrers)</li>
                <li className="text-lg opacity-80">• Is GDPR compliant by design</li>
              </ul>
              <p className="text-lg leading-relaxed opacity-90 mt-4">
                No third-party analytics scripts are loaded. Your browsing stays clean and private.
              </p>
            </div>
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
          <p className="mt-4 text-sm opacity-60">
            or use the links section to find me on my socials. I promise to try and answer as fast 
            as possible, but during 48h shifts, I sometimes forget to check the outside world.
          </p>
        </div>
      </div>
    </>
  );
}
