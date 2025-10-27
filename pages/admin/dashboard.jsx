import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useDropzone } from 'react-dropzone';
import imagesData from '../../data/images.json';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState(imagesData);

  // Upload form state
  const [uploadData, setUploadData] = useState({
    title: '',
    category: 'Macro',
    alt: '',
    description: '',
    iso: '',
    aperture: '',
    shutter: '',
    focal: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState('');
  const [uploading, setUploading] = useState(false);

  // Check authentication on mount
  useEffect(() => {
    fetch('/api/auth/session')
      .then(res => res.json())
      .then(data => {
        if (!data.isLoggedIn) {
          router.push('/admin/login');
        } else {
          setIsAuthenticated(true);
        }
        setLoading(false);
      })
      .catch(() => {
        router.push('/admin/login');
      });
  }, [router]);

  // Refresh images list
  const refreshImages = async () => {
    try {
      const response = await fetch('/data/images.json');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Failed to refresh images:', error);
    }
  };

  // Dropzone configuration
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setSelectedFile(acceptedFiles[0]);
        setUploadError('');
        setUploadSuccess('');
      }
    },
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUploadData(prev => ({ ...prev, [name]: value }));
  };

  // Handle upload
  const handleUpload = async (e) => {
    e.preventDefault();
    setUploadError('');
    setUploadSuccess('');

    if (!selectedFile) {
      setUploadError('Please select an image file');
      return;
    }

    if (!uploadData.title) {
      setUploadError('Please enter a title');
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('title', uploadData.title);
      formData.append('category', uploadData.category);
      formData.append('alt', uploadData.alt || uploadData.title);
      formData.append('description', uploadData.description);
      formData.append('iso', uploadData.iso);
      formData.append('aperture', uploadData.aperture);
      formData.append('shutter', uploadData.shutter);
      formData.append('focal', uploadData.focal);

      const response = await fetch('/api/images/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setUploadSuccess('Image uploaded successfully!');
        // Reset form
        setUploadData({
          title: '',
          category: 'Macro',
          alt: '',
          description: '',
          iso: '',
          aperture: '',
          shutter: '',
          focal: '',
        });
        setSelectedFile(null);
        // Refresh images list
        await refreshImages();
      } else {
        setUploadError(data.error || 'Upload failed');
      }
    } catch (error) {
      setUploadError('An error occurred during upload');
    } finally {
      setUploading(false);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this image?')) {
      return;
    }

    try {
      const response = await fetch('/api/images/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        await refreshImages();
      } else {
        const data = await response.json();
        alert(data.error || 'Delete failed');
      }
    } catch (error) {
      alert('An error occurred during deletion');
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - TheGrandHub</title>
      </Head>

      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif text-foreground">Admin Dashboard</h1>
            <div className="space-x-4">
              <a
                href="/"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                View Site
              </a>
              <button
                onClick={handleLogout}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Upload Section */}
          <div className="bg-background border border-border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-serif text-foreground mb-6">Upload New Image</h2>

            <form onSubmit={handleUpload} className="space-y-6">
              {/* Drag & Drop Area */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Image File
                </label>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                    isDragActive
                      ? 'border-accent bg-accent/5'
                      : 'border-border hover:border-accent/50'
                  }`}
                >
                  <input {...getInputProps()} />
                  {selectedFile ? (
                    <div className="space-y-2">
                      <p className="text-foreground font-medium">{selectedFile.name}</p>
                      <p className="text-foreground/60 text-sm">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-foreground">
                        Drag and drop an image here, or click to browse
                      </p>
                      <p className="text-foreground/60 text-sm">
                        Supported formats: JPEG, PNG, GIF, WebP
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={uploadData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Enter image title"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={uploadData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="Macro">Macro</option>
                  <option value="Wildlife">Wildlife</option>
                  <option value="Night">Night</option>
                  <option value="Pets">Pets</option>
                  <option value="Nature">Nature</option>
                  <option value="Human-Made">Human-Made</option>
                </select>
              </div>

              {/* Alt Text */}
              <div>
                <label htmlFor="alt" className="block text-sm font-medium text-foreground mb-2">
                  Alt Text (Accessibility)
                </label>
                <input
                  type="text"
                  id="alt"
                  name="alt"
                  value={uploadData.alt}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Leave blank to use title"
                />
              </div>

              {/* EXIF Data */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label htmlFor="iso" className="block text-sm font-medium text-foreground mb-2">
                    ISO
                  </label>
                  <input
                    type="text"
                    id="iso"
                    name="iso"
                    value={uploadData.iso}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g., 400"
                  />
                </div>

                <div>
                  <label htmlFor="aperture" className="block text-sm font-medium text-foreground mb-2">
                    Aperture
                  </label>
                  <input
                    type="text"
                    id="aperture"
                    name="aperture"
                    value={uploadData.aperture}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g., f/2.8"
                  />
                </div>

                <div>
                  <label htmlFor="shutter" className="block text-sm font-medium text-foreground mb-2">
                    Shutter Speed
                  </label>
                  <input
                    type="text"
                    id="shutter"
                    name="shutter"
                    value={uploadData.shutter}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g., 1/250"
                  />
                </div>

                <div>
                  <label htmlFor="focal" className="block text-sm font-medium text-foreground mb-2">
                    Focal Length
                  </label>
                  <input
                    type="text"
                    id="focal"
                    name="focal"
                    value={uploadData.focal}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g., 50mm"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                  Description / Story
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={uploadData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Tell the story behind this photo..."
                />
              </div>

              {/* Error/Success Messages */}
              {uploadError && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3">
                  <p className="text-sm text-red-500">{uploadError}</p>
                </div>
              )}

              {uploadSuccess && (
                <div className="rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-3">
                  <p className="text-sm text-green-500">{uploadSuccess}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={uploading}
                className="w-full py-3 px-6 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {uploading ? 'Uploading...' : 'Upload Image'}
              </button>
            </form>
          </div>

          {/* Image Management Section */}
          <div className="bg-background border border-border rounded-lg p-6">
            <h2 className="text-2xl font-serif text-foreground mb-6">Manage Images</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <div key={image.id} className="border border-border rounded-lg overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="font-medium text-foreground">{image.title}</h3>
                    <p className="text-sm text-foreground/60">{image.category}</p>
                    <button
                      onClick={() => handleDelete(image.id)}
                      className="w-full py-2 px-4 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {images.length === 0 && (
              <p className="text-center text-foreground/60 py-8">
                No images uploaded yet. Upload your first image above!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
