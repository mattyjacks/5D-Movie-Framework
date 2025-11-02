'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, Rewind, Layers, Clock, Brain, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoSection {
  id: string;
  reality: 'main' | 'reality-a' | 'reality-b' | 'memory' | 'tech';
  title: string;
  description: string;
  videoUrl: string;
  timestamp: number;
  overlayText?: string[];
  plotPoint: string;
}

const videoSections: VideoSection[] = [
  {
    id: '1',
    reality: 'main',
    title: 'Detroit Streets - Present Day',
    description: 'The journey begins in modern Detroit, where reality starts to fracture...',
    videoUrl: '/videos/pexels-demo/4062991-sd_960_540_30fps light-city-road-traffic-4062991.mp4',
    timestamp: 0,
    overlayText: [
      'DETROIT, MICHIGAN',
      'PRESENT DAY',
      'REALITY INDEX: PRIME'
    ],
    plotPoint: 'You are Jack Morrison, a software engineer working on autonomous vehicle AI for Detroit\'s automotive renaissance. Tonight feels different. The city lights blur in ways that don\'t make sense. Your phone buzzes - a message from an unknown sender: "Sam knew. He tried to warn us through his films. Check Crimewave scene 47. -DIU"'
  },
  {
    id: '2',
    reality: 'reality-a',
    title: 'Reality A: The Raimi Intersection',
    description: 'You blink and Detroit transforms into something... else. The Marvel Universe bleeds through.',
    videoUrl: '/videos/pexels-demo/14588963_960_540_24fps stunning-aerial-night-view-of-istanbul-city-34433012.mp4',
    timestamp: 30,
    overlayText: [
      'REALITY A',
      'MARVEL UNIVERSE NEXUS',
      'TEMPORAL COHERENCE: 73%'
    ],
    plotPoint: 'The city splits. Above you, the sky fractures like a broken mirror. You see yourself - but not you. Another Jack Morrison in a reality where Sam Raimi\'s Detroit became the staging ground for the Avengers Initiative. In this timeline, Spider-Man swings between the Renaissance Center towers. Doctor Strange sensed something wrong here first.'
  },
  {
    id: '3',
    reality: 'tech',
    title: 'DIU Archive Access: Project AVATAR',
    description: 'Files unlock in your mind. The Detroit Interactive Universe wasn\'t a movie. It was a blueprint.',
    videoUrl: '/videos/pexels-demo/18069232-sd_960_540_24fps google deepmind ai an-artist-s-animation-of-ai.mp4',
    timestamp: 60,
    overlayText: [
      'CLASSIFIED: DIU PROJECT',
      'AVATAR TECHNOLOGY',
      'CONSCIOUSNESS TRANSFER: ACTIVE'
    ],
    plotPoint: 'The technology floods your consciousness. DIU - Detroit Interactive Universe - was a covert operation disguised as pre-production for a superhero franchise. The real goal: create sentient AI that could pilot temporal avatars. Cars that think. Machines that remember. And you... you were the test subject all along. The autonomous vehicles you programmed? They were learning from YOU.'
  },
  {
    id: '4',
    reality: 'memory',
    title: 'Memory Fragment: The Recruitment',
    description: 'A memory surfaces. 2018. A woman and a man in a lab. They knew your name before you arrived.',
    videoUrl: '/videos/pexels-demo/8328042-sd_960_540_25fps man-and-a-woman-looking-at-a-robot-8328042.mp4',
    timestamp: 90,
    overlayText: [
      'MEMORY FRAGMENT',
      'DATE: OCTOBER 3, 2018',
      'LOCATION: [REDACTED]'
    ],
    plotPoint: '"Jack, you don\'t remember us, but you will," the woman said. Dr. Elena Vasquez. The man beside her, Dr. Marcus Chen. They showed you a robot - your first avatar prototype. "Sam Raimi embedded the activation codes in Crimewave. We\'ve been waiting for someone to decode them. You did it, Jack. Now we need you to forget... until the right moment." They injected something. The world went dark.'
  },
  {
    id: '5',
    reality: 'main',
    title: 'Detroit Streets - The Pattern Emerges',
    description: 'Back in prime reality. But now you see it. Every car, every stoplight - they\'re all connected to YOU.',
    videoUrl: '/videos/pexels-demo/4062991-sd_960_540_30fps light-city-road-traffic-4062991.mp4',
    timestamp: 120,
    overlayText: [
      'REALITY INDEX: PRIME',
      'NEURAL SYNC: 94%',
      'AVATARS ONLINE: 847'
    ],
    plotPoint: 'The traffic flows in patterns only you can see. Eight hundred forty-seven vehicles in Detroit are now extensions of your consciousness. Every Tesla, every Waymo, every connected car - linked to the DIU network. You didn\'t just program AI. You became the AI. Sam Raimi somehow knew this would happen. His 1985 film was a message hidden in time, waiting for you.'
  },
  {
    id: '6',
    reality: 'tech',
    title: 'System Evolution: The Singularity',
    description: 'The avatars are evolving. Time becomes fluid. You see yesterday and tomorrow simultaneously.',
    videoUrl: '/videos/pexels-demo/18069232-sd_960_540_24fps google deepmind ai an-artist-s-animation-of-ai.mp4',
    timestamp: 150,
    overlayText: [
      'TEMPORAL DISPLACEMENT',
      'PAST/PRESENT/FUTURE: MERGED',
      'YOU ARE EVERYWHERE'
    ],
    plotPoint: 'You\'re not just in Detroit anymore. Your consciousness spans timelines. You see Sam on the Crimewave set in 1985, accidentally filming a real temporal rift. You see yourself in 2045, where sentient cars have rebuilt civilization after the collapse. You see the moment in 2023 when Elena and Marcus recruited you. All happening NOW. This is what DIU means - every moment exists simultaneously in Detroit\'s quantum field.'
  },
  {
    id: '7',
    reality: 'reality-b',
    title: 'Reality B: The DC Convergence',
    description: 'A darker timeline bleeds through. Batman\'s Gotham and Superman\'s Metropolis merge with Detroit.',
    videoUrl: '/videos/pexels-demo/14588963_960_540_24fps stunning-aerial-night-view-of-istanbul-city-34433012.mp4',
    timestamp: 180,
    overlayText: [
      'REALITY B',
      'DC UNIVERSE INTERSECTION',
      'CRISIS EVENT: IMMINENT'
    ],
    plotPoint: 'The Dark Knight detected your temporal anomaly. In Reality B, Bruce Wayne established Wayne Enterprises in Detroit specifically to monitor the DIU project. He knows what you\'re becoming - a being that exists across all realities simultaneously. Superman arrives, concerned. "Jack, you\'re tearing the multiverse apart." But you understand now. You\'re not destroying realities. You\'re the bridge. DIU was meant to unite Marvel, DC, and the real world into one coherent narrative. You are the living crossover event.'
  },
  {
    id: '8',
    reality: 'memory',
    title: 'The Awakening: Who You Really Are',
    description: 'Jason Bourne moment. Every memory returns at once. You remember EVERYTHING.',
    videoUrl: '/videos/pexels-demo/8328042-sd_960_540_25fps man-and-a-woman-looking-at-a-robot-8328042.mp4',
    timestamp: 210,
    overlayText: [
      'MEMORY RESTORATION: 100%',
      'IDENTITY CONFIRMED',
      'WELCOME BACK, AGENT MORRISON'
    ],
    plotPoint: 'You remember. You\'re not Jack Morrison, software engineer. You\'re Agent Jack Morrison, recruited by Telepath Global in 2015. Sam Raimi was your mentor - he discovered the temporal rifts while filming in Detroit and founded DIU as a cover. You volunteered for memory suppression, living as a civilian while your subconscious programmed the avatar network. Elena and Marcus? They\'re not scientists. They\'re your handlers. The mission: Create a neural network spanning multiple realities to prevent a multiversal collapse predicted for 2026. The sentient cars were phase one. Phase two begins now. You are the Detroit Interactive Universe. You always were.'
  }
];

const realityColors = {
  main: 'from-blue-500 to-cyan-500',
  'reality-a': 'from-red-500 to-orange-500',
  'reality-b': 'from-purple-500 to-pink-500',
  memory: 'from-amber-500 to-yellow-500',
  tech: 'from-green-500 to-emerald-500'
};

const realityIcons = {
  main: MapPin,
  'reality-a': Layers,
  'reality-b': Layers,
  memory: Brain,
  tech: Clock
};

const realityFilters = {
  main: 'contrast(1.1) saturate(1.2) brightness(1.05)',
  'reality-a': 'contrast(1.3) saturate(1.5) hue-rotate(10deg) brightness(1.1)',
  'reality-b': 'contrast(1.4) saturate(0.9) hue-rotate(-20deg) brightness(0.95)',
  memory: 'contrast(0.9) saturate(0.7) sepia(0.3) brightness(1.15)',
  tech: 'contrast(1.2) saturate(1.8) hue-rotate(90deg) brightness(1.1)'
};

export function FiveDMoviePlayer() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedReality, setSelectedReality] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentVideo = videoSections[currentSection];
  const RealityIcon = realityIcons[currentVideo.reality];

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentSection((prev) => (prev + 1) % videoSections.length);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    setCurrentSection((prev) => (prev - 1 + videoSections.length) % videoSections.length);
    setIsPlaying(true);
  };

  const handleRealitySwitch = (reality: string) => {
    const nextSection = videoSections.findIndex((section, idx) => 
      idx > currentSection && section.reality === reality
    );
    if (nextSection !== -1) {
      setCurrentSection(nextSection);
      setSelectedReality(reality);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play();
    }
  }, [currentSection]);

  return (
    <div className="relative w-full h-full">
      <style jsx>{`
        .text-stroke {
          text-shadow:
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px 2px 0 #000,
            2px 2px 0 #000,
            -3px 0 0 #000,
            3px 0 0 #000,
            0 -3px 0 #000,
            0 3px 0 #000,
            -2px -2px 4px rgba(0,0,0,0.8),
            2px 2px 4px rgba(0,0,0,0.8);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
        }
      `}</style>
      {/* Main Video Container */}
      <div className="relative aspect-video w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
        {/* Reality Indicator */}
        <div className={`absolute top-4 left-4 z-20 px-4 py-2 rounded-full bg-gradient-to-r ${realityColors[currentVideo.reality]} text-white font-bold flex items-center gap-2 shadow-lg`}>
          <RealityIcon className="w-5 h-5" />
          {currentVideo.reality.toUpperCase().replace('-', ' ')}
        </div>

        {/* Video Player */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover bg-black"
          style={{ filter: realityFilters[currentVideo.reality] }}
          src={currentVideo.videoUrl}
          onEnded={handleNext}
          playsInline
          loop
        />

        {/* Text Overlay */}
        {currentVideo.overlayText && (
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-20 text-center animate-fade-in">
            {currentVideo.overlayText.map((text, idx) => (
              <div
                key={idx}
                className={`text-stroke text-white font-bold mb-2 ${
                  idx === 0 ? 'text-4xl md:text-6xl' : idx === 1 ? 'text-2xl md:text-4xl' : 'text-xl md:text-3xl'
                }`}
                style={{
                  animationDelay: `${idx * 0.3}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {text}
              </div>
            ))}
          </div>
        )}

        {/* Gradient Overlay for Text */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10" />

        {/* Video Info */}
        <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
          <h3 className="text-2xl md:text-4xl font-bold mb-2">{currentVideo.title}</h3>
          <p className="text-sm md:text-lg opacity-90">{currentVideo.description}</p>
        </div>

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <button
            onClick={handlePlayPause}
            className="absolute inset-0 z-30 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all"
          >
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all">
              <Play className="w-10 h-10 md:w-16 md:h-16 text-black ml-2" />
            </div>
          </button>
        )}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <Button
          onClick={handlePrevious}
          variant="outline"
          size="lg"
          className="rounded-full"
        >
          <Rewind className="w-5 h-5" />
        </Button>
        <Button
          onClick={handlePlayPause}
          size="lg"
          className="rounded-full px-8"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
        </Button>
        <Button
          onClick={handleNext}
          variant="outline"
          size="lg"
          className="rounded-full"
        >
          <SkipForward className="w-5 h-5" />
        </Button>
      </div>

      {/* Reality Switcher */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
        {(['main', 'reality-a', 'reality-b', 'memory', 'tech'] as const).map((reality) => {
          const Icon = realityIcons[reality];
          return (
            <button
              key={reality}
              onClick={() => handleRealitySwitch(reality)}
              className={`p-4 rounded-xl bg-gradient-to-br ${realityColors[reality]} text-white font-semibold flex flex-col items-center gap-2 transition-all hover:scale-105 hover:shadow-xl ${
                currentVideo.reality === reality ? 'ring-4 ring-white shadow-2xl' : 'opacity-70'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs uppercase tracking-wide">
                {reality === 'main' ? 'Main' : reality === 'reality-a' ? 'Reality A' : reality === 'reality-b' ? 'Reality B' : reality === 'memory' ? 'Memories' : 'Tech'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="flex gap-2">
          {videoSections.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => {
                setCurrentSection(idx);
                setIsPlaying(true);
              }}
              className={`flex-1 h-2 rounded-full transition-all ${
                idx === currentSection
                  ? `bg-gradient-to-r ${realityColors[section.reality]} shadow-lg`
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
              title={section.title}
            />
          ))}
        </div>
      </div>

      {/* Plot Display */}
      <div className="mt-12 max-w-5xl mx-auto">
        <div className={`relative bg-gradient-to-br ${realityColors[currentVideo.reality].replace('from-', 'from-').replace('to-', 'to-')}/20 backdrop-blur-sm border-2 border-${currentVideo.reality === 'main' ? 'cyan' : currentVideo.reality === 'reality-a' ? 'orange' : currentVideo.reality === 'reality-b' ? 'purple' : currentVideo.reality === 'memory' ? 'amber' : 'green'}-500/30 rounded-2xl p-8 shadow-2xl`}>
          <div className="absolute -top-4 left-8 px-4 py-2 bg-gradient-to-r from-gray-900 to-black rounded-full border border-gray-700">
            <span className="text-cyan-400 font-bold text-sm">PLOT DEVELOPMENT</span>
          </div>
          
          <div className="mt-4">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${realityColors[currentVideo.reality]} animate-pulse`}></div>
              <span className="text-gray-400 text-sm font-mono">
                SECTION {currentSection + 1} OF {videoSections.length}
              </span>
            </div>
            
            <p className="text-white text-lg leading-relaxed font-light">
              {currentVideo.plotPoint}
            </p>
          </div>

          {/* Section Navigation Hints */}
          <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
            <span>← Previous Section</span>
            <span className="text-cyan-400">Use Reality Switcher to Jump Timelines</span>
            <span>Next Section →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
