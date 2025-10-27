import fs from 'fs/promises';
import path from 'path';
import { requireAuth } from '../../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check authentication
  const session = await requireAuth(req, res);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Image ID is required' });
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

    // Find the image to delete
    const imageIndex = images.findIndex(img => img.id === id);

    if (imageIndex === -1) {
      return res.status(404).json({ error: 'Image not found' });
    }

    const imageToDelete = images[imageIndex];

    // Delete the physical file
    const imagePath = path.join(process.cwd(), 'public', imageToDelete.src);

    try {
      await fs.unlink(imagePath);
    } catch (error) {
      console.error('Error deleting file:', error);
      // Continue even if file deletion fails (file might not exist)
    }

    // Remove from array
    images.splice(imageIndex, 1);

    // Write updated images.json
    await fs.writeFile(imagesJsonPath, JSON.stringify(images, null, 2), 'utf-8');

    return res.status(200).json({
      success: true,
      deletedId: id,
    });
  } catch (error) {
    console.error('Delete error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
