const fs = require('fs');
const path = require('path');

// Image analysis and cataloging data
// This will be populated with descriptive names and stories for each image

const imageMetadata = {
  // Wildlife category
  'wildlife/20250123_115120.jpg': {
    title: 'Capybara at Rest',
    story: 'A peaceful capybara, the world\'s largest rodent, enjoying a quiet moment in its natural Brazilian habitat.'
  },
  'wildlife/20250529_200425.jpg': {
    title: 'Forest Canopy Dweller',
    story: 'Wildlife thriving in the lush green canopy of Brazil\'s diverse ecosystem.'
  },
  'wildlife/IMG_2509.jpg': {
    title: 'Red-Throated Piping Guan',
    story: 'A striking piping guan with vibrant red throat plumage, showcasing Brazil\'s remarkable avian biodiversity.'
  },
  'wildlife/IMG_2613.jpg': {
    title: 'Thrush with Morning Catch',
    story: 'A Brazilian thrush perched on a birdhouse, carrying its breakfast - a perfect moment of nature\'s daily rhythm.'
  },
  'wildlife/IMG_2614.jpg': {
    title: 'Thrush Profile',
    story: 'Side profile of a reddish thrush standing alert on its perch, embodying the grace of Brazilian songbirds.'
  },
  'wildlife/IMG_2616.jpg': {
    title: 'Feeding Time',
    story: 'A thrush captured mid-meal on a weathered wooden feeder, nature\'s dining table.'
  },
  'wildlife/IMG_2621.jpg': {
    title: 'Watchful Thrush',
    story: 'Alert and attentive, this thrush surveys its territory from atop a backyard feeder.'
  },
  'wildlife/IMG_2783.jpg': {
    title: 'Young Thrush',
    story: 'A juvenile thrush perched gracefully, still learning the ways of the wild.'
  },
  'wildlife/IMG_2799.jpg': {
    title: 'Cattle Portrait',
    story: 'A curious cow peers through the foliage, representing rural Brazil\'s agricultural heritage.'
  },
  'wildlife/IMG_2801.jpg': {
    title: 'Hungry Fledgling',
    story: 'A baby bird calling out for food, mouth wide open - the universal language of hungry chicks.'
  },
  'wildlife/IMG_2823.jpg': {
    title: 'Thrush in Shadow',
    story: 'Beautiful play of light and shadow as a thrush perches in dappled sunlight.'
  },
  'wildlife/IMG_2948.jpg': {
    title: 'Elegant Hummingbird',
    story: 'A tiny hummingbird mid-flight, showcasing the incredible speed and grace of these aerial acrobats.'
  },
  'wildlife/IMG_2949.jpg': {
    title: 'Hummingbird Hover',
    story: 'Frozen in time - a hummingbird demonstrates its remarkable ability to hover while feeding.'
  },
  'wildlife/IMG_2950.jpg': {
    title: 'Nectar Seeker',
    story: 'A hummingbird approaching vibrant blooms in search of sweet nectar, a dance as old as time.'
  },
  'wildlife/IMG_3276 (1).jpg': {
    title: 'Hummingbird in Flight II',
    story: 'Another stunning moment capturing the iridescent beauty of a hummingbird mid-flight.'
  },
  'wildlife/IMG_3276.jpg': {
    title: 'Hummingbird in Flight',
    story: 'Wings beating at incredible speed, this hummingbird epitomizes nature\'s engineering marvels.'
  },
  'wildlife/IMG_3279.jpg': {
    title: 'Garden Hummingbird',
    story: 'A hummingbird visiting the garden, bringing life and motion to the still flowers.'
  },
  'wildlife/IMG_3519.jpg': {
    title: 'Giant Anteater Foraging',
    story: 'A magnificent giant anteater roaming the Brazilian highlands, one of the country\'s most iconic and endangered species.'
  },
  'wildlife/IMG_3520.jpg': {
    title: 'Anteater Profile',
    story: 'Close encounter with a giant anteater, showcasing its distinctive long snout and powerful claws.'
  },
  'wildlife/IMG_3529.jpg': {
    title: 'Wild Anteater',
    story: 'An anteater in its natural element, searching for ants and termites among the grasslands.'
  },
  'wildlife/IMG_3532.jpg': {
    title: 'Anteater Walking',
    story: 'The unmistakable silhouette of a giant anteater on the move, a rare sight in the wild.'
  },
  'wildlife/IMG_3676.jpg': {
    title: 'Blue-Gray Tanager',
    story: 'A beautiful tanager displaying its soft blue-gray plumage, common yet captivating.'
  },
  'wildlife/IMG_3684.jpg': {
    title: 'Tanager Perched',
    story: 'A tanager resting on a branch, adding a splash of color to the green canopy.'
  },

  // Night category
  'night/20240808_061413.jpg': {
    title: 'Pre-Dawn Glow',
    story: 'The magical hour before sunrise, when the sky transitions from night to day over Brazil.'
  },
  'night/20240814_200611.jpg': {
    title: 'Twilight Descent',
    story: 'The sun sets over Brazilian landscapes, painting the sky in warm hues.'
  },
  'night/IMG_2214.jpg': {
    title: 'Evening Silhouette',
    story: 'Trees silhouetted against the fading light of dusk, a peaceful moment of transition.'
  },
  'night/IMG_2229 (1).jpg': {
    title: 'Starfield Over Brazil',
    story: 'Countless stars pierce the night sky above the Brazilian highlands, far from city lights.'
  },
  'night/IMG_2229.jpg': {
    title: 'Milky Way Rising',
    story: 'The galactic core of the Milky Way emerges over the horizon, a breathtaking celestial display.'
  },
  'night/IMG_2343.jpg': {
    title: 'Night Sky Canvas',
    story: 'The universe reveals itself in all its glory on a clear Brazilian night.'
  },
  'night/IMG_2356.jpg': {
    title: 'Stellar Expanse',
    story: 'An ocean of stars stretches across the darkness, reminding us of our place in the cosmos.'
  },
  'night/IMG_2647.jpg': {
    title: 'Moonlit Landscape',
    story: 'Soft moonlight bathes the landscape in ethereal silver tones.'
  },
  'night/IMG_3118.jpg': {
    title: 'Urban Night Lights',
    story: 'City lights twinkle below as night falls over urban Brazil.'
  },
  'night/IMG_3145.jpg': {
    title: 'Evening Architecture',
    story: 'Buildings illuminated against the deepening night sky.'
  },
  'night/IMG_3247.jpg': {
    title: 'Dusk Colors',
    story: 'Rich purples and oranges paint the sky during the blue hour.'
  },

  // Nature category
  'nature/20241226_173147.jpg': {
    title: 'Golden Hour Meadow',
    story: 'Warm afternoon light bathes a Brazilian meadow in golden tones.'
  },
  'nature/20250214_171449.jpg': {
    title: 'Evening Grasslands',
    story: 'Tall grasses sway in the evening breeze as the sun begins to set.'
  },
  'nature/oranges.jpg': {
    title: 'Orange Harvest',
    story: 'Ripe oranges hanging from the tree, a bounty from Brazil\'s fertile soil.'
  },
  // ... (continuing with nature images - there are 34 total)

  // Human-Made category
  'human-made/yellow_door.jpg': {
    title: 'Weathered Yellow Door',
    story: 'Time and sun have painted stories on this bright yellow door, a testament to Brazilian architecture.'
  },
  // ... (continuing with human-made images)
};

// Generate the complete images.json
function generateImagesJson() {
  const galleryPath = './public/images/gallery';
  const images = [];

  const categoryMap = {
    'macro': 'Macro',
    'wildlife': 'Wildlife',
    'night': 'Night',
    'pets': 'Pets',
    'nature': 'Nature',
    'human-made': 'Human-Made'
  };

  function createId(filename) {
    return path.basename(filename, path.extname(filename))
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  Object.entries(categoryMap).forEach(([folder, categoryName]) => {
    const categoryPath = path.join(galleryPath, folder);

    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath);

      files.forEach(file => {
        // Skip size variants and webp
        if (/\-800w|\-1600w|\.webp$/.test(file)) return;
        if (!/\.(jpg|jpeg|png)$/i.test(file)) return;

        const relativePath = `${folder}/${file}`;
        const metadata = imageMetadata[relativePath] || {};

        const id = createId(file);
        const title = metadata.title || createTitle(file);
        const story = metadata.story || 'Captured by Lorenzo LDS in Brazil.';
        const src = `/images/gallery/${folder}/${file}`;

        images.push({
          id,
          title,
          category: categoryName,
          src,
          srcset: [
            `${src} 800w`,
            `${src} 1600w`
          ],
          alt: title,
          exif: { iso: '', aperture: '', shutter: '', focal: '' },
          story
        });
      });
    }
  });

  // Mark favorites
  const favoriteIds = [
    'red-throated-piping-guan',
    'giant-anteater-foraging',
    'milky-way-rising',
    'mumbojumbo-zilda',
    'red-rose-drop',
    'weathered-yellow-door'
  ];

  images.forEach(img => {
    if (favoriteIds.includes(img.id)) {
      img.favorite = true;
    }
  });

  return images;
}

function createTitle(filename) {
  const name = path.basename(filename, path.extname(filename));
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\s+\(\d+\)/g, '')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Run
console.log('Generating images.json with analyzed metadata...\n');
const images = generateImagesJson();
fs.writeFileSync('./data/images.json', JSON.stringify(images, null, 2));
console.log(`✓ Generated images.json with ${images.length} images`);
