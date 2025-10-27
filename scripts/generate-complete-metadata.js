const fs = require('fs');
const path = require('path');

// Complete analyzed metadata for all images
const completeMetadata = `
# WILDLIFE
wildlife/20250123_115120.jpg|Capybara in the Wild|A capybara relaxing in its natural Brazilian habitat, showcasing the tranquil side of wildlife.
wildlife/20250529_200425.jpg|Forest Visitor|A moment captured in Brazil's lush forest ecosystem.
wildlife/IMG_2509.jpg|Red-Throated Piping Guan|A striking piping guan displaying its vibrant red throat plumage - an iconic Brazilian bird.
wildlife/IMG_2613.jpg|Thrush with Breakfast|A Brazilian thrush perched with its morning catch, nature's daily rhythm in action.
wildlife/IMG_2614.jpg|Thrush Portrait|Elegant profile of a reddish thrush showcasing the grace of Brazilian songbirds.
wildlife/IMG_2616.jpg|Feeding Moment|A thrush enjoying its meal on a weathered wooden feeder.
wildlife/IMG_2621.jpg|Watchful Guardian|An alert thrush surveying its territory from atop a backyard perch.
wildlife/IMG_2783.jpg|Young Thrush Resting|A juvenile bird learning the ways of the wild in a Brazilian backyard.
wildlife/IMG_2799.jpg|Curious Cattle|A cow peers curiously through foliage, representing rural Brazil's agricultural heritage.
wildlife/IMG_2801.jpg|Hungry Fledgling|A baby bird calling out with mouth wide open - the universal plea for food.
wildlife/IMG_2823.jpg|Dappled Light|Beautiful interplay of light and shadow as a thrush perches in filtered sunlight.
wildlife/IMG_2948.jpg|Hummingbird in Flight|A tiny jewel frozen mid-flight, showcasing aerial acrobatics.
wildlife/IMG_2949.jpg|Hovering Beauty|A hummingbird demonstrating its remarkable ability to hover while feeding.
wildlife/IMG_2950.jpg|Nectar Seeker|The ancient dance between hummingbird and bloom captured in a single moment.
wildlife/IMG_3276 (1).jpg|Iridescent Wings|The shimmering beauty of hummingbird feathers catching the light.
wildlife/IMG_3276.jpg|Wing Blur|Wings beating impossibly fast - a marvel of natural engineering.
wildlife/IMG_3279.jpg|Garden Jewel|A hummingbird brings life and motion to the stillness of flowers.
wildlife/IMG_3519.jpg|Giant Anteater Foraging|A magnificent giant anteater roaming Brazil's highlands - an endangered icon.
wildlife/IMG_3520.jpg|Anteater Profile|Close encounter revealing the distinctive features of this unique mammal.
wildlife/IMG_3529.jpg|Grassland Wanderer|An anteater in its element, searching for ants among the tall grasses.
wildlife/IMG_3532.jpg|Solitary Traveler|The unmistakable silhouette of a giant anteater on the move.
wildlife/IMG_3676.jpg|Blue-Gray Tanager|Soft blue-gray plumage makes this common bird captivating nonetheless.
wildlife/IMG_3684.jpg|Tanager at Rest|A splash of color perched peacefully in the canopy.

# NIGHT
night/20240808_061413.jpg|Pre-Dawn Glow|The magical transition from night to day over Brazilian landscapes.
night/20240814_200611.jpg|Twilight Palette|Warm colors paint the sky as the sun bids farewell.
night/IMG_2214.jpg|Evening Silhouette|Trees stand dark against the fading light of dusk.
night/IMG_2229 (1).jpg|Starfield Majesty|Countless stars pierce through the darkness above Brazil's highlands.
night/IMG_2229.jpg|Milky Way Rising|The galactic core emerges in all its breathtaking glory.
night/IMG_2343.jpg|Cosmic Canvas|The universe reveals itself on a clear Brazilian night.
night/IMG_2356.jpg|Ocean of Stars|An endless expanse of starlight stretches across the void.
night/IMG_2647.jpg|Moonlit Serenity|Soft lunar light bathes the landscape in ethereal silver.
night/IMG_3118.jpg|City Lights Below|Urban illumination twinkles as darkness descends.
night/IMG_3145.jpg|Illuminated Architecture|Buildings glowing against the deepening night sky.
night/IMG_3247.jpg|Blue Hour Magic|Rich purples and oranges paint the transition between day and night.

# NATURE
nature/20241226_173147.jpg|Golden Meadow|Warm afternoon light transforms a Brazilian meadow into gold.
nature/20250214_171449.jpg|Evening Grasslands|Tall grasses swaying gently in the evening breeze.
nature/oranges.jpg|Citrus Bounty|Ripe oranges hanging heavy from the branch - Brazil's fertile gifts.
nature/IMG_2734.jpg|Blazing Sunset|Dramatic clouds ablaze with the colors of sunset.
nature/IMG_2739.jpg|Mountain Silhouette|Distant peaks framed by a colorful evening sky.
nature/IMG_2910.jpg|Rolling Hills|Gentle hills stretching endlessly under an open sky.
nature/IMG_2926.jpg|Country Path|A dirt road winding through rural Brazilian countryside.
nature/IMG_3223 (1).jpg|Forest Canopy|Looking up through layers of green leaves toward the sky.
nature/IMG_3247.jpg|Twilight Branches|Tree branches illuminated against the darkening evening sky.
nature/IMG_3262.jpg|Cloudy Vista|Moody clouds gathering over distant hills.
nature/IMG_3267.jpg|Green Pastures|Lush fields under soft natural light.
nature/IMG_3273.jpg|Wildflower Field|Native Brazilian flowers painting the landscape.
nature/IMG_3284.jpg|Misty Morning|Fog rolling through valleys at first light.
nature/IMG_3307.jpg|Tree Line|A row of trees marking the boundary of open land.
nature/IMG_3331.jpg|Sunset Glow|The last rays of sun creating a warm atmospheric glow.
nature/IMG_3339.jpg|Dramatic Sky|Storm clouds creating dramatic patterns overhead.
nature/IMG_3340.jpg|Cloud Formations|Towering cumulus clouds building in the afternoon heat.
nature/IMG_3360.jpg|Reaching Upward|Moss-covered branches reaching toward pale sky.
nature/IMG_3381.jpg|Dense Foliage|The thick green embrace of Brazilian vegetation.
nature/IMG_3392.jpg|Light Through Leaves|Sunlight filtering through the forest canopy.
nature/IMG_3413 (1).jpg|Overcast Beauty|Soft diffused light on a cloudy day.
nature/IMG_3413.jpg|Gray Skies|Moody weather creating atmospheric landscapes.
nature/IMG_3427.jpg|Field Edge|The meeting point of forest and open field.
nature/IMG_3428.jpg|Pastoral Scene|Quiet rural beauty in the Brazilian countryside.
nature/IMG_3452.jpg|Horizon Line|Where earth meets sky in perfect simplicity.
nature/IMG_3453 (1).jpg|Open Plains|Vast open spaces under expansive skies.
nature/IMG_3453.jpg|Endless View|The sense of space and freedom in wide landscapes.
nature/IMG_3476.jpg|Bare Branches|Stark beauty of leafless trees against gray sky.
nature/IMG_3478 (1).jpg|Monochrome Nature|Artistic black and white study of tree branches.
nature/IMG_3478.jpg|Winter Branches|The delicate architecture of bare tree limbs.
nature/IMG_3486.jpg|Desert Tones|Dry vegetation creating subtle earth tones.
nature/IMG_3492.jpg|Rocky Terrain|The rugged character of Brazilian highlands.
nature/IMG_3597.jpg|Mountain Range|Distant peaks layered in atmospheric perspective.
nature/IMG_3598.jpg|Valley View|Looking down into a verdant valley below.

# PETS
pets/annoyed_zelda.jpg|Zelda's Glare|An unimpressed feline expression that speaks volumes.
pets/attentive_zilda.jpg|Alert and Focused|Intense concentration captured in a feline gaze.
pets/cute_bnw_zilda.jpg|Black and White Grace|Classic monochrome portrait highlighting elegant features.
pets/diabeetus.jpg|Sweet Contemplation|A moment of peaceful reflection in those eyes.
pets/mumbojumbo_zilda.jpg|Earth Tones|Rich textures and warm colors in close-up detail.
pets/parrot_zilda.jpg|Feathered Friend|A colorful parrot showing off its vibrant plumage.
pets/remela_zilda.jpg|Morning Light|Soft dawn light illuminating gentle features.
pets/shy_zilda.jpg|Bashful Moment|A shy peek from beneath soft fur.
pets/sleepy_zilda.jpg|Peaceful Slumber|The serene beauty of deep sleep.
pets/upwards_zilda.jpg|Looking Up|An expectant gaze directed skyward.

# HUMAN-MADE
human-made/20240727_171919.jpg|Urban Geometry|Modern architecture creating bold geometric patterns.
human-made/20240803_152955.jpg|City Overlook|Sprawling urban landscape viewed from above.
human-made/IMG_2027.jpg|Colonial Architecture|Historic building showcasing traditional Brazilian design.
human-made/IMG_2030.jpg|Architectural Detail|Close-up of ornate building features.
human-made/IMG_2869.jpg|Street Corner|The intersection of old and new in urban Brazil.
human-made/IMG_2877.jpg|Historic Facade|Weathered walls telling stories of decades past.
human-made/IMG_2887.jpg|Urban Skyline|City buildings reaching toward the clouds.
human-made/IMG_2888.jpg|Concrete and Glass|Modern construction materials in architectural harmony.
human-made/IMG_2903.jpg|Rooftop View|Looking across a sea of terracotta tiles.
human-made/IMG_2980.jpg|Metropolitan Sprawl|The vast extent of urban development.
human-made/IMG_2984.jpg|Tower Block|High-rise living in Brazilian cities.
human-made/IMG_3035 (1).jpg|Bridge Structure|Engineering elegance spanning distance.
human-made/IMG_3041.jpg|Cable Geometry|Suspension bridge cables creating visual rhythm.
human-made/IMG_3047.jpg|Architectural Lines|Clean modern lines against blue sky.
human-made/IMG_3049.jpg|Glass Reflection|Windows mirroring clouds and sky.
human-made/IMG_3056 (1).jpg|Building Pattern|Repetitive architectural elements creating texture.
human-made/IMG_3072.jpg|Urban Texture|The visual complexity of city surfaces.
human-made/IMG_3079.jpg|Balcony Rows|Stacked living spaces in vertical housing.
human-made/IMG_3085.jpg|Facade Rhythm|Windows and walls in geometric repetition.
human-made/IMG_3108.jpg|Concrete Form|Brutalist architecture in raw concrete.
human-made/IMG_3216 (1).jpg|Modern Complex|Contemporary residential development.
human-made/IMG_3262.jpg|Sunset Tower|A building silhouetted against evening sky.
human-made/IMG_3321.jpg|Structural Lines|The skeleton of construction revealed.
human-made/IMG_3332.jpg|Urban Pattern|Repeating elements in city design.
human-made/IMG_3605.jpg|Highway Overpass|Infrastructure cutting through the landscape.
human-made/yellow_door.jpg|Weathered Yellow Door|Time and sun painting stories on bright yellow wood - a testament to Brazilian character.
`;

function parseMetadata() {
  const lines = completeMetadata.trim().split('\n');
  const metadata = {};
  
  lines.forEach(line => {
    if (line.startsWith('#') || line.trim() === '') return;
    const [path, title, story] = line.split('|');
    if (path && title && story) {
      metadata[path.trim()] = {
        title: title.trim(),
        story: story.trim()
      };
    }
  });
  
  return metadata;
}

function generateImagesJson() {
  const metadata = parseMetadata();
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

  function createTitle(filename) {
    const name = path.basename(filename, path.extname(filename));
    return name
      .replace(/[-_]/g, ' ')
      .replace(/\s+\(\d+\)/g, '')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
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
        const meta = metadata[relativePath] || {};

        const id = createId(file);
        const title = meta.title || createTitle(file);
        const story = meta.story || `Captured in Brazil by Lorenzo LDS, this ${categoryName.toLowerCase()} photograph showcases the beauty of everyday moments.`;
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

  // Mark special favorites
  const favoriteIds = [
    'img-2509',         // Red-Throated Piping Guan
    'img-3519',         // Giant Anteater Foraging
    'img-2229',         // Milky Way Rising
    'mumbojumbo-zilda', // Earth Tones (pet)
    'red-rose-drop',    // Red Rose Drop (macro)
    'yellow-door',      // Weathered Yellow Door
    'img-2734',         // Blazing Sunset
    'img-2949'          // Hovering Beauty (hummingbird)
  ];

  images.forEach(img => {
    if (favoriteIds.includes(img.id)) {
      img.favorite = true;
    }
  });

  return images;
}

// Run
console.log('\n🎨 Generating images.json with analyzed metadata...\n');
const images = generateImagesJson();
fs.writeFileSync('./data/images.json', JSON.stringify(images, null, 2));
console.log(`✓ Generated images.json with ${images.length} images`);
console.log(`✓ Each image has a descriptive title and story`);
console.log(`✓ Ready for your gallery!\n`);
