import fs from 'fs/promises';
import path from 'path';
import { requireAuth } from '../../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check authentication
  const session = await requireAuth(req, res);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { id, favorite } = req.body;

    if (!id || typeof favorite !== 'boolean') {
      return res.status(400).json({ error: 'Image ID and favorite status are required' });
    }

    // Read existing images.json
    const imagesJsonPath = path.join(process.cwd(), 'data', 'images.json');
    let images = [];

    try {
      const jsonData = await fs.readFile(imagesJsonPath, 'utf-8');
      images = JSON.parse(jsonData);
    } catch (error) {
      return res.status(404).json({ error: 'Images data not found' });
    }

    // Find the image to update
    const imageIndex = images.findIndex(img => img.id === id);

    if (imageIndex === -1) {
      return res.status(404).json({ error: 'Image not found' });
    }

    // Update favorite status
    if (favorite) {
      images[imageIndex].favorite = true;
    } else {
      // Remove the favorite property if setting to false
      delete images[imageIndex].favorite;
    }

    // Write updated images.json
    await fs.writeFile(imagesJsonPath, JSON.stringify(images, null, 2), 'utf-8');

    return res.status(200).json({
      success: true,
      id,
      favorite,
    });
  } catch (error) {
    console.error('Toggle favorite error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
