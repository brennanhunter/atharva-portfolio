'use client';

import { ExternalLink, Play, Download, Clock } from 'lucide-react';

interface Game {
  id: string;
  title: string;
  description: string;
  role: string;
  platform: string;
  engine: string;
  teamSize: string;
  status: string;
  playLink: string;
  playLinkStatus: 'working' | 'updating' | 'missing';
  tags: string[];
  videoType?: 'youtube' | 'local';
  videoId?: string;
  videoSrc?: string;
}

interface FeaturedGame extends Game {
  subtitle: string;
  videoId: string;
}

const GamesSection = () => {

  const featuredGame: FeaturedGame = {
    id: 'tale-of-tummbad',
    title: 'A Tale of Tummbad',
    subtitle: 'Commercial Android Game',
    description: 'Based on the acclaimed movie Tumbbad, this 3-level Android game follows the protagonist as he returns home to rescue his mother from the villain. A complete commercial release showcasing narrative-driven mobile game development.',
    role: 'Game Developer & Environment Artist',
    platform: 'Android',
    engine: 'Unreal Engine',
    teamSize: 'Team Project',
    status: 'Published',
    videoId: 'jT6rRoSXL5A', // YouTube video ID
    playLink: '#', // Placeholder - will be updated
    playLinkStatus: 'updating', // 'working', 'broken', 'updating', 'missing'
    tags: ['Commercial', 'Mobile', 'Narrative', 'Published']
  };

  const otherGames: Game[] = [
    {
      id: 'daydreams-of-change',
      title: 'Daydreams of Change',
      description: 'Climate-themed game developed during professional internship for Climate Jam. Conveys environmental messaging through interactive gameplay.',
      role: 'Game Developer',
      platform: 'PC',
      engine: 'Unreal Engine',
      teamSize: 'Team Project',
      status: 'Internship Project',
      videoType: 'local', // Will use local video file
      videoSrc: '/videos/daydreams-of-change.mp4',
      playLink: 'https://itch.io/jam/climate-jam-2024/rate/2847314',
      playLinkStatus: 'working',
      tags: ['Internship', 'Climate Jam', 'Environmental']
    },
    {
      id: 'daoist-mountain',
      title: 'Daoist From The Mountain',
      description: 'Point-and-click puzzle game where a priest must escape a temple by solving puzzles to gather the five elements of Taoism. Capstone project.',
      role: 'Game Developer & Designer',
      platform: 'PC',
      engine: 'Unity',
      teamSize: 'Team Project',
      status: 'Capstone Project',
      videoType: 'youtube',
      videoId: 'xz7FScekakg',
      playLink: '#',
      playLinkStatus: 'missing',
      tags: ['Capstone', 'Puzzle', 'Unity']
    },
    {
      id: '3d-runner',
      title: '3D Runner',
      description: 'Endless runner game with lane-switching mechanics, coin collection, and obstacle avoidance. Developed solo to demonstrate blueprint programming skills.',
      role: 'Solo Developer',
      platform: 'PC',
      engine: 'Unreal Engine',
      teamSize: 'Solo Project',
      status: 'Personal Project',
      videoType: 'youtube',
      videoId: 'Gnl7P6q5Rq4',
      playLink: '#',
      playLinkStatus: 'missing',
      tags: ['Solo', 'Blueprints', 'Runner']
    }
  ];

  const getStatusBadge = (status: string) => {
    const badgeClasses = {
      'Published': 'bg-green-100 text-green-800 border-green-200',
      'Internship Project': 'bg-blue-100 text-blue-800 border-blue-200',
      'Capstone Project': 'bg-purple-100 text-purple-800 border-purple-200',
      'Personal Project': 'bg-gray-100 text-gray-800 border-gray-200'
    };
    
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${badgeClasses[status as keyof typeof badgeClasses] || badgeClasses['Personal Project']}`}>
        {status}
      </span>
    );
  };

  const getPlayButton = (game: Game | FeaturedGame) => {
    switch (game.playLinkStatus) {
      case 'working':
        return (
          <a
            href={game.playLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Play Game
          </a>
        );
      case 'updating':
        return (
          <button className="bg-orange-100 text-orange-800 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 cursor-not-allowed">
            <Clock className="w-5 h-5" />
            Link Updating
          </button>
        );
      case 'missing':
        return (
          <button className="bg-gray-100 text-gray-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 cursor-not-allowed">
            <Download className="w-5 h-5" />
            Demo Available on Request
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <section id="games" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Published Games
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From commercial Android releases to innovative game jam entries, 
            these projects showcase my ability to ship complete gaming experiences 
            across multiple platforms and engines.
          </p>
        </div>

        {/* Featured Game */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Video */}
              <div className="relative bg-black">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${featuredGame.videoId}?controls=1&modestbranding=1&rel=0`}
                    title={featuredGame.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  {getStatusBadge(featuredGame.status)}
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredGame.title}
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  {featuredGame.subtitle}
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredGame.description}
                </p>
                
                {/* Tech Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-gray-500">Role:</span>
                    <div className="font-semibold text-gray-900">{featuredGame.role}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Platform:</span>
                    <div className="font-semibold text-gray-900">{featuredGame.platform}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Engine:</span>
                    <div className="font-semibold text-gray-900">{featuredGame.engine}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Team:</span>
                    <div className="font-semibold text-gray-900">{featuredGame.teamSize}</div>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredGame.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA */}
                <div className="flex gap-4">
                  {getPlayButton(featuredGame)}
                  <a
                    href={`https://www.youtube.com/watch?v=${featuredGame.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherGames.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Video */}
              <div className="relative bg-black">
                <div className="aspect-video">
                  {game.videoType === 'youtube' ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${game.videoId}?controls=1&modestbranding=1&rel=0`}
                      title={game.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={game.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  {getStatusBadge(game.status)}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {game.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {game.description}
                </p>
                
                {/* Tech Info */}
                <div className="text-xs text-gray-500 mb-4">
                  <div>{game.engine} • {game.platform} • {game.teamSize}</div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {game.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA */}
                <div className="flex gap-2">
                  {getPlayButton(game)}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;