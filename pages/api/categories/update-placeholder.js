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
    const { categoryId, placeholder } = req.body;

    if (!categoryId || !placeholder) {
      return res.status(400).json({ error: 'Category ID and placeholder are required' });
    }

    // Read existing categories.json
    const categoriesJsonPath = path.join(process.cwd(), 'data', 'categories.json');
    let categories = [];

    try {
      const jsonData = await fs.readFile(categoriesJsonPath, 'utf-8');
      categories = JSON.parse(jsonData);
    } catch (error) {
      return res.status(404).json({ error: 'Categories data not found' });
    }

    // Find the category to update
    const categoryIndex = categories.findIndex(cat => cat.id === categoryId);

    if (categoryIndex === -1) {
      return res.status(404).json({ error: 'Category not found' });
    }

    // Update placeholder
    categories[categoryIndex].placeholder = placeholder;

    // Write updated categories.json
    await fs.writeFile(categoriesJsonPath, JSON.stringify(categories, null, 2), 'utf-8');

    return res.status(200).json({
      success: true,
      categoryId,
      placeholder,
    });
  } catch (error) {
    console.error('Update category placeholder error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
