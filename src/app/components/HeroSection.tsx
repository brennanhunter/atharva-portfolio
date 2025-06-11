'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Mix of images and videos to showcase his environments and process
  const heroMedia = [
    {
      type: 'image',
      src: '/images/military-watchtower.jpg',
      duration: 5000 // 5 seconds for images
    },
    {
      type: 'image',
      src: '/images/lego-diorama-concept.jpg', // The storyboard/concept image
      duration: 5000 // 5 seconds to read the story
    },
    {
      type: 'video', 
      src: '/videos/lego-diorama.mp4', // The actual 3D environment
      duration: 11000 // 11 seconds for LEGO video
    },
    {
      type: 'video',
      src: '/videos/mario-environment.mp4', 
      duration: 18000 // 18 seconds for Mario video
    }
  ];

  const heroContent = [
    {
      title: "Game-Ready Military Environments",
      subtitle: "FPS-inspired tactical spaces with full texture work"
    },
    {
      title: "Conceptual Storytelling", 
      subtitle: "Visual narratives that guide environment design and player experience"
    },
    {
      title: "From Concept to Reality", 
      subtitle: "Bringing storyboard concepts to life as interactive 3D environments"
    },
    {
      title: "Iconic Game World Recreation",
      subtitle: "Dynamic 3D Mario environments with fluid camera movement"
    }
  ];

  useEffect(() => {
    const currentMedia = heroMedia[currentImageIndex];
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroMedia.length);
    }, currentMedia.duration);
    
    return () => clearInterval(interval);
  }, [currentImageIndex, heroMedia]);

  const scrollToProjects = () => {
    document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Media Carousel (Images + Videos) */}
      <div className="absolute inset-0 z-0">
        {heroMedia.map((media, index) => (
          <div
            key={`${media.type}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {media.type === 'image' ? (
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${media.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{ 
                  filter: media.src.includes('lego-diorama') 
                    ? 'brightness(0.9)' // Brighter for LEGO video
                    : 'brightness(0.7)' // Standard darkening for other videos
                }}
              >
                <source src={media.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main Headlines */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            3D Environment Artist
            <span className="block text-3xl md:text-4xl font-light text-blue-400 mt-2">
              & Game Developer
            </span>
          </h1>
          
          <div className="h-20 mb-6">
            <h2 className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed transition-all duration-500">
              {heroContent[currentImageIndex].title}
            </h2>
            <p className="text-lg text-gray-300 mt-2">
              {heroContent[currentImageIndex].subtitle}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">4+</div>
            <div className="text-gray-300">Published Games</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-300">3D Environments & Assets</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">M.S.</div>
            <div className="text-gray-300">Game Science & Design</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToProjects}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
          >
            View My Work
            <ExternalLink className="w-5 h-5" />
          </button>
          
          <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center gap-2">
            Download Resume
            <Download className="w-5 h-5" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div 
          onClick={scrollToProjects}
          className="cursor-pointer animate-bounce flex flex-col items-center text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* Media Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroMedia.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-blue-400 scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;