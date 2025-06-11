'use client';

import { GraduationCap, MapPin, Code, Heart, Target, Coffee, Award, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From QA professional to IndieCade-certified game developer — my journey combines 
            years of software industry experience with a passion for creating immersive 
            gaming experiences that prioritize both quality and player engagement.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Photo Side */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              {/* Profile Image */}
              <div className="relative mb-8">
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src="/images/atharva-profile.jpg"
                    alt="Atharva Sawant"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-500 rounded-full opacity-60"></div>
              </div>

              {/* Quick Facts */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-blue-600" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">Boston, MA (Originally Mumbai, India)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">2+ Years Software Industry Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">IndieCade Game Design Intern</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">M.S. Game Science & Design, Northeastern</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">4+ Published Games</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-blue-50 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Certifications
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="font-semibold text-gray-900">IndieCade 2024</div>
                    <div className="text-blue-600">Game Design Internship Certification</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="font-semibold text-gray-900">GILIVE UNREAL PRO</div>
                    <div className="text-blue-600">Unreal Engine Certification</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-3 space-y-8">
            {/* Origin Story */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Professional Journey</h3>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p>
                  My path to game development began with GTA San Andreas modding and texture modifications, 
                  but it was my professional experience as a Digital Quality Engineer that truly shaped my 
                  approach to game development. For over two years at QualityKiosk Technologies, I honed 
                  my skills in software testing, quality assurance, and critical thinking.
                </p>
                <p>
                  This QA background gives me a unique perspective in game development — I understand not 
                  just how to create beautiful environments and assets, but how to build them with quality, 
                  optimization, and player experience in mind. Every model I create, every environment I design, 
                  is crafted with the rigor and attention to detail that comes from professional software development experience.
                </p>
              </div>
            </div>

            {/* Industry Recognition */}
            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                Industry Recognition
              </h3>
              <div className="text-gray-700">
                <p className="mb-3">
                  <strong>IndieCade Game Design Internship (Summer 2024)</strong> — Selected for a prestigious 
                  game design internship with IndieCade, working on innovative game concepts and gaining 
                  hands-on experience with industry professionals.
                </p>
                <p>
                  This experience validated my transition from software QA to game development and provided 
                  invaluable insights into the creative and technical processes that drive successful game projects.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-600" />
                My Approach to Game Development
              </h3>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "My QA background taught me that quality isn't just about visual appeal — it's about creating 
                experiences that work flawlessly for players. Every environment I build, every asset I model, 
                combines artistic vision with technical precision. I believe great games are born from the 
                intersection of creativity and meticulous attention to detail."
              </blockquote>
            </div>

            {/* Professional Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
              <div className="space-y-6">
                {/* IndieCade */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Game Design Intern</h4>
                    <p className="text-green-600 font-medium">IndieCade • Summer 2024 (3 months)</p>
                    <p className="text-gray-600 mt-2">
                      Selected for prestigious game design internship focusing on innovative game concepts, 
                      player experience design, and collaborative development processes with industry professionals.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Game Design</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Player Experience</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Collaboration</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Innovation</span>
                    </div>
                  </div>
                </div>

                {/* QualityKiosk */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Digital Quality Engineer</h4>
                    <p className="text-purple-600 font-medium">QualityKiosk Technologies • 2021-2023 (2+ years)</p>
                    <p className="text-gray-600 mt-2">
                      Led quality assurance processes for digital products, developed comprehensive test cases, 
                      and collaborated with development teams to ensure software reliability and user experience excellence.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Quality Assurance</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Test Cases</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Critical Thinking</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Process Optimization</span>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">M.S. Game Science & Design</h4>
                    <p className="text-blue-600 font-medium">Northeastern University • 2023-2025</p>
                    <p className="text-gray-600 mt-2">
                      Specialized curriculum combining technical game development skills with artistic design principles. 
                      Focus on 3D environment art, level design, and interactive systems development.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">3D Environment Art</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Level Design</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Interactive Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Unique Value Proposition */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Makes Me Different</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Professional Strengths</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      Quality-first approach from software industry experience
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      Strategic career pivot with clear professional goals
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      IndieCade-validated game design capabilities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      International perspective and cultural adaptability
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technical Edge</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">•</span>
                      Optimization mindset from QA background
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">•</span>
                      Bridge between technical and creative teams
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">•</span>
                      Process-driven approach to asset creation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">•</span>
                      Continuous learning and professional development
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Goals & Future */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for the Next Challenge</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With professional software experience, IndieCade industry recognition, and specialized game development 
              education, I'm uniquely positioned to contribute to innovative game projects. I bring a quality-focused 
              mindset, technical precision, and creative vision to every environment and asset I create.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">Environment Artist</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">3D Modeler</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">Technical Artist</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">QA-Minded Developer</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Build Quality Games Together</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm actively seeking opportunities to bring my unique combination of professional experience, 
            industry recognition, and technical expertise to innovative game development teams. 
            Ready to contribute from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;