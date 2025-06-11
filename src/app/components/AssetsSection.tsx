'use client';

import { useState } from 'react';
import { ExternalLink, Eye, Layers, Grid3X3, Palette, Zap } from 'lucide-react';

const AssetsSection = () => {
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: string]: number }>({});

  const assets = [
    {
      id: 'lego-indiana-jones',
      title: 'Lego Indiana Jones Character',
      category: 'Character Asset',
      description: 'A detailed Lego-style character model with authentic brick texturing and articulation points for animation.',
      detailedDescription: 'This character model demonstrates my ability to work within stylized art directions while maintaining technical precision. The model features proper edge flow for animation, detailed UV mapping, and authentic LEGO brick materials created in Substance Painter.',
      images: [
        '/images/lego-indiana-main.jpg',
        '/images/lego-indiana-back.jpg',
        '/images/lego-indiana-uv2.jpg',
        '/images/lego-indiana-uv.jpg'
      ],
      mediaTypes: ['image', 'image', 'image', 'image'],
      tools: ['Maya', 'Substance Painter', 'UV Layout'],
      polyCount: '3,200 triangles',
      textureRes: '2K textures (Diffuse, Normal, Roughness)',
      uvChannels: '2 UV channels',
      features: [
        'Animation-ready edge flow and topology',
        'Accurate LEGO proportions and detailing',
        'PBR material setup with plastic shaders',
        'Optimized for real-time rendering'
      ],
      tags: ['Character', 'LEGO', 'Stylized', 'Animation-Ready'],
      software: 'Maya + Substance Painter'
    },
    {
      id: 'retro-television',
      title: 'Vintage Box Television',
      category: 'Environment Prop',
      description: 'A weathered retro television prop with authentic aging and wear patterns inspired by classic gaming environments.',
      detailedDescription: 'This prop showcases my environmental storytelling abilities through surface details and weathering. The aging and wear patterns tell a story of decades of use, perfect for post-apocalyptic or retro gaming environments.',
      images: [
        '/images/tv-main.jpg',
        '/images/tv-front.jpg',
        '/images/button-uv.jpg',
        '/images/tv-uv.jpg'
      ],
      mediaTypes: ['image', 'image', 'image', 'image'],
      tools: ['Maya', 'Substance Painter', 'PBR Workflow'],
      polyCount: '1,800 triangles',
      textureRes: '1K-2K PBR textures',
      uvChannels: '1 UV channel',
      features: [
        'Realistic weathering and aging effects',
        'Modular design for level placement',
        'Optimized collision geometry',
        'Multiple material variants available'
      ],
      tags: ['Props', 'Retro', 'Weathered', 'Environment'],
      software: 'Maya + Substance Painter'
    },
    {
      id: 'cinnabar-box',
      title: 'Cinnabar Puzzle Box',
      category: 'Interactive Prop',
      description: 'An ornate puzzle box designed for interactive gameplay with intricate detailing and cultural authenticity.',
      detailedDescription: 'Created for our capstone project, this interactive prop required careful attention to both visual appeal and functional design. The box serves as a key gameplay element where players must input codes to unlock progression.',
      images: [
        '/images/cinnabar-main.jpg',
        '/images/cinnabar-alt.jpg',
        '/images/cinnabar-uv1.jpg',
        '/images/cinnabar-uv2.jpg'
      ],
      mediaTypes: ['image', 'image', 'image', 'image'],
      tools: ['Maya', 'Substance Painter', 'Unity Integration'],
      polyCount: '2,400 triangles',
      textureRes: '2K PBR textures',
      uvChannels: '1 UV channel + detail maps',
      features: [
        'Interactive opening/closing animations',
        'Cultural research and authentic detailing',
        'Unity script integration ready',
        'LOD versions for optimization'
      ],
      tags: ['Interactive', 'Cultural', 'Puzzle', 'Capstone'],
      software: 'Maya + Substance + Unity'
    },
    {
      id: 'medieval-table',
      title: 'Medieval Wooden Table',
      category: 'Environment Asset',
      description: 'A rustic medieval table with detailed wood grain texturing and modular design for fantasy environments.',
      detailedDescription: 'This furniture piece demonstrates my ability to create believable historical props with attention to period-appropriate construction methods and material authenticity. The modular approach allows for flexible scene composition.',
      images: [
        '/images/table-main.jpg',
        '/images/table-side.jpg',
        '/images/table-back.jpg',
        '/videos/table-rotation.mp4'
      ],
      mediaTypes: ['image', 'image', 'image', 'video'], // Specify media type for each item
      tools: ['Maya', 'Substance Painter', 'Wood Materials'],
      polyCount: '1,200 triangles',
      textureRes: '1K PBR textures',
      uvChannels: '1 UV channel',
      features: [
        'Historically accurate construction details',
        'Realistic wood grain and aging',
        'Modular components for scene variety',
        'Collision-optimized geometry'
      ],
      tags: ['Medieval', 'Furniture', 'Historical', 'Modular'],
      software: 'Maya + Substance Painter'
    }
  ];

  const openModal = (assetId: string) => {
    setSelectedAssetId(assetId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedAssetId(null);
    document.body.style.overflow = 'unset';
  };

  const changeImage = (assetId: string, direction: 'next' | 'prev') => {
    const asset = assets.find(a => a.id === assetId);
    if (!asset) return;
    
    const currentIndex = activeImageIndex[assetId] || 0;
    const maxIndex = asset.images.length - 1;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    }
    
    setActiveImageIndex(prev => ({ ...prev, [assetId]: newIndex }));
  };

  const selectedAsset = assets.find(asset => asset.id === selectedAssetId);

  return (
    <section id="models" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            3D Assets & Props
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From character models to interactive props, these assets showcase technical precision, 
            artistic detail, and game-ready optimization. Each piece demonstrates mastery of the 
            complete 3D asset pipeline from concept to implementation.
          </p>
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {assets.map((asset) => {
            const currentImageIndex = activeImageIndex[asset.id] || 0;
            const currentImage = asset.images[currentImageIndex];
            
            return (
              <div
                key={asset.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Carousel */}
                <div className="relative">
                  <div className="aspect-[4/3] bg-gray-100">
                    {asset.mediaTypes && asset.mediaTypes[currentImageIndex] === 'video' ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={currentImage} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={currentImage}
                        alt={`${asset.title} - View ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  {/* Image Navigation */}
                  <div className="absolute inset-0 flex">
                    <button
                      onClick={() => changeImage(asset.id, 'prev')}
                      className="flex-1 opacity-0 hover:opacity-100 transition-opacity bg-black/20 flex items-center justify-start pl-4"
                    >
                      <div className="bg-white/90 rounded-full p-2 shadow-lg">
                        <span className="text-gray-900 font-bold">‹</span>
                      </div>
                    </button>
                    <button
                      onClick={() => changeImage(asset.id, 'next')}
                      className="flex-1 opacity-0 hover:opacity-100 transition-opacity bg-black/20 flex items-center justify-end pr-4"
                    >
                      <div className="bg-white/90 rounded-full p-2 shadow-lg">
                        <span className="text-gray-900 font-bold">›</span>
                      </div>
                    </button>
                  </div>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {asset.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(prev => ({ ...prev, [asset.id]: index }))}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/60'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {asset.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {asset.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {asset.description}
                  </p>

                  {/* Technical Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Poly Count:</span>
                      <div className="font-semibold text-gray-900">{asset.polyCount}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Textures:</span>
                      <div className="font-semibold text-gray-900">{asset.textureRes}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">UV Channels:</span>
                      <div className="font-semibold text-gray-900">{asset.uvChannels}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Software:</span>
                      <div className="font-semibold text-gray-900">{asset.software}</div>
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {asset.tools.map((tool) => (
                      <span key={tool} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {asset.tags.map((tag) => (
                      <span key={tag} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => openModal(asset.id)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Eye className="w-5 h-5" />
                    View Technical Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Skills Showcase */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            3D Asset Production Pipeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Grid3X3 className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Modeling</h4>
              <p className="text-gray-600 text-sm">Clean topology with proper edge flow and optimization for games</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">UV Mapping</h4>
              <p className="text-gray-600 text-sm">Efficient UV layouts maximizing texture space and minimizing seams</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Texturing</h4>
              <p className="text-gray-600 text-sm">PBR workflows in Substance Painter with realistic material definition</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Optimization</h4>
              <p className="text-gray-600 text-sm">Game-ready assets with LODs, efficient materials, and collision meshes</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Need custom 3D assets for your project? Let&apos;s discuss your requirements.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            Start a Project
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedAsset && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedAsset.title}</h3>
                  <p className="text-blue-600 font-semibold">{selectedAsset.category}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Images */}
                <div className="space-y-4">
                  {selectedAsset.images.map((image, index) => (
                    <div key={index} className="relative">
                      {selectedAsset.mediaTypes && selectedAsset.mediaTypes[index] === 'video' ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full rounded-lg shadow-lg"
                        >
                          <source src={image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={image}
                          alt={`${selectedAsset.title} - View ${index + 1}`}
                          className="w-full rounded-lg shadow-lg"
                        />
                      )}
                      <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {selectedAsset.id === 'medieval-table' ? (
                          index === 0 ? 'Front View' : 
                          index === 1 ? 'Side View' :
                          index === 2 ? 'Back View' : '360° Rotation'
                        ) : (
                          index === 0 ? 'Main View' : 
                          index === 1 ? 'Alt Angle' :
                          index === 2 ? 'UV Layout' : 'UV Layout'
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedAsset.detailedDescription}
                  </p>

                  <div className="space-y-6">
                    {/* Technical Specs */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technical Specifications:</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Poly Count:</span>
                          <div className="font-semibold text-gray-900">{selectedAsset.polyCount}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Textures:</span>
                          <div className="font-semibold text-gray-900">{selectedAsset.textureRes}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">UV Channels:</span>
                          <div className="font-semibold text-gray-900">{selectedAsset.uvChannels}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Software:</span>
                          <div className="font-semibold text-gray-900">{selectedAsset.software}</div>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {selectedAsset.features.map((feature, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Tools Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedAsset.tools.map((tool) => (
                          <span key={tool} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AssetsSection;