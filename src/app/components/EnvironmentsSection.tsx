'use client';

import { useState } from 'react';
import { ExternalLink, Eye, Layers, Palette, Zap } from 'lucide-react';

const EnvironmentsSection = () => {
  const [selectedEnvironment, setSelectedEnvironment] = useState<string | null>(null);

  const environments = [
    {
      id: 'military-watchtower',
      title: 'Game-Ready Military Watchtower',
      category: 'Realistic Environment',
      description: 'A tactical military environment inspired by FPS shooter games, featuring detailed modular construction and realistic weathering effects.',
      detailedDescription: 'This environment showcases my ability to create game-ready military installations with attention to tactical gameplay flow. The modular design allows for flexible level construction while maintaining visual consistency. All assets were built with optimization in mind for real-time rendering.',
      mediaType: 'image',
      image: '/images/military-watchtower.jpg',
      images: [
        '/images/military-watchtower.jpg',
        '/images/military-watchtower-detail.jpg', // Additional angles if available
        '/images/military-watchtower-wireframe.jpg' // Wireframe view if available
      ],
      tools: ['Maya', 'Substance Painter', 'Unreal Engine 5'],
      features: [
        'Modular architecture for level design flexibility',
        'PBR texturing with realistic wear and weathering',
        'Optimized for real-time gameplay',
        'Tactical sight lines and cover placement'
      ],
      artStationLink: 'https://www.artstation.com/artwork/L4e2Qk',
      polyCount: '12K triangles',
      textureRes: '2K-4K PBR textures',
      tags: ['FPS', 'Military', 'Realistic', 'Modular']
    },
    {
      id: 'lego-diorama',
      title: 'LEGO Environment Diorama',
      category: 'Stylized Storytelling',
      description: 'An interactive treasure hunt diorama featuring an explorer\'s journey through a mystical forest, crafted in distinctive LEGO art style.',
      detailedDescription: 'This project demonstrates my storytelling abilities through environmental design. The diorama tells a complete narrative of an explorer discovering hidden treasure, with careful attention to the iconic LEGO aesthetic while maintaining modern rendering quality.',
      mediaType: 'image',
      image: '/images/lego-diorama.png',
      images: [
        '/images/lego-diorama.png',
        '/images/lego-diorama-story.jpg', // The concept/story image
        '/images/lego-diorama-detail.jpg' // Close-up details
      ],
      tools: ['Maya', 'Substance Painter', 'Unity'],
      features: [
        'Narrative-driven environmental storytelling',
        'Authentic LEGO brick texturing and materials',
        'Dynamic lighting to enhance story beats',
        'Optimized for interactive exploration'
      ],
      artStationLink: 'https://www.artstation.com/artwork/vDgYXa',
      polyCount: '8K triangles',
      textureRes: '1K-2K stylized textures',
      tags: ['LEGO', 'Storytelling', 'Stylized', 'Interactive']
    },
    {
      id: 'mario-environment',
      title: 'Super Mario 3D Environment',
      category: 'Iconic Recreation',
      description: 'A faithful 3D recreation of classic Super Mario environments, bringing 2D platformer elements into immersive 3D space.',
      detailedDescription: 'This environment showcases my ability to adapt and modernize classic game designs. I\'ve translated the iconic 2D Super Mario aesthetic into a fully realized 3D environment while maintaining the playful, accessible feel of the original games.',
      mediaType: 'video',
      image: '/videos/mario-environment.mp4', // Using video instead of image
      images: [
        '/videos/mario-environment.mp4',
        '/images/mario-environment-overview.jpg', // Wide shot
        '/images/mario-environment-details.jpg' // Asset close-ups
      ],
      tools: ['Maya', 'Substance Painter', 'Unity'],
      features: [
        'Faithful recreation of iconic Mario aesthetics',
        'Bright, welcoming color palette',
        'Interactive elements ready for gameplay',
        'Optimized for smooth camera movement'
      ],
      artStationLink: 'https://www.artstation.com/artwork/m8V8q1',
      polyCount: '15K triangles',
      textureRes: '1K-2K cartoon textures',
      tags: ['Nintendo', 'Iconic', 'Platformer', 'Colorful']
    }
  ];

  const openModal = (environmentId: string) => {
    setSelectedEnvironment(environmentId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedEnvironment(null);
    document.body.style.overflow = 'unset';
  };

  const selectedEnv = environments.find(env => env.id === selectedEnvironment);

  return (
    <section id="environments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            3D Environments
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From tactical military installations to whimsical storytelling dioramas, 
            these environments showcase my ability to create immersive, game-ready spaces 
            that enhance player experience and support narrative goals.
          </p>
        </div>

        {/* Environments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {environments.map((env, index) => (
            <div
              key={env.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Image or Video */}
              <div className="relative overflow-hidden">
                {env.mediaType === 'video' ? (
                  <div className="aspect-[4/3] relative">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    >
                      <source src={env.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div
                    className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${env.image})` }}
                  />
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button
                      onClick={() => openModal(env.id)}
                      className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <a
                      href={env.artStationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      ArtStation
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                    {env.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {env.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {env.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {env.tools.map((tool) => (
                    <span key={tool} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {env.tags.map((tag) => (
                    <span key={tag} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Showcase */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Environment Art Pipeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Concept & Planning</h4>
              <p className="text-gray-600 text-sm">Storyboarding, reference gathering, and establishing visual direction</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">3D Modeling</h4>
              <p className="text-gray-600 text-sm">Creating optimized geometry in Maya with proper topology and UVs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Texturing</h4>
              <p className="text-gray-600 text-sm">PBR materials and texturing in Substance Painter for realistic results</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Engine Integration</h4>
              <p className="text-gray-600 text-sm">Implementing in Unity/Unreal with lighting and optimization</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            See the complete process and additional angles on ArtStation
          </p>
          <a
            href="https://www.artstation.com/atharvasawant99"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            View Full Portfolio on ArtStation
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedEnv && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedEnv.title}</h3>
                  <p className="text-blue-600 font-semibold">{selectedEnv.category}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  {selectedEnv.mediaType === 'video' ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full rounded-lg shadow-lg"
                    >
                      <source src={selectedEnv.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={selectedEnv.image}
                      alt={selectedEnv.title}
                      className="w-full rounded-lg shadow-lg"
                    />
                  )}
                </div>

                <div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedEnv.detailedDescription}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {selectedEnv.features.map((feature, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Poly Count:</span>
                        <div className="font-semibold text-gray-900">{selectedEnv.polyCount}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Texture Resolution:</span>
                        <div className="font-semibold text-gray-900">{selectedEnv.textureRes}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {selectedEnv.tools.map((tool) => (
                        <span key={tool} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>

                    <a
                      href={selectedEnv.artStationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View on ArtStation
                    </a>
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

export default EnvironmentsSection;