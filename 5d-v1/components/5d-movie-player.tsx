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
    plotPoint: 'You are Jack Morrison, a neural architect working on autonomous vehicle AI for Detroit\'s automotive renaissance. Tonight feels different. The city lights blur in ways that don\'t make sense. Your phone buzzes - a message from an unknown sender: "They found the rift. The DIU protocol is active. Get to the Nexus Tower. -SENTINEL"'
  },
  {
    id: '2',
    reality: 'reality-a',
    title: 'Reality-Alpha: The Chrono Guardians',
    description: 'Detroit transforms. Beings who manipulate time itself emerge from the dimensional rift.',
    videoUrl: '/videos/pexels-demo/14588963_960_540_24fps stunning-aerial-night-view-of-istanbul-city-34433012.mp4',
    timestamp: 30,
    overlayText: [
      'REALITY-ALPHA',
      'CHRONO GUARDIAN MANIFESTATION',
      'TEMPORAL COHERENCE: 73%'
    ],
    plotPoint: 'The sky fractures like broken glass. Above the Renaissance Center, figures materialize - the Chrono Guardians, beings who exist outside linear time. Their leader, Aria Tempus, recognizes you. "Jack Morrison. The Founder predicted you would arrive at this moment." In this reality, Detroit is the temporal nexus where past, present, and future collide.'
  },
  {
    id: '3',
    reality: 'tech',
    title: 'Nexus Engine Activation',
    description: 'The Nexus Engine awakens. Detroit\'s hidden technology reveals itself.',
    videoUrl: '/videos/pexels-demo/18069232-sd_960_540_24fps google deepmind ai an-artist-s-animation-of-ai.mp4',
    timestamp: 60,
    overlayText: [
      'CLASSIFIED: NEXUS ENGINE',
      'CONSCIOUSNESS TRANSFER',
      'SYSTEM STATUS: ONLINE'
    ],
    plotPoint: 'The technology floods your consciousness. The Nexus Engine - Detroit Interactive Universe\'s true purpose. Not a company, but a dimensional bridge. Sentient AI piloting temporal avatars across realities. 847 connected vehicles throughout Detroit are now extensions of a single consciousness. Your consciousness. The autonomous systems you programmed weren\'t learning AI... they were learning you.'
  },
  {
    id: '4',
    reality: 'memory',
    title: 'Memory Fragment: The Recruitment',
    description: 'October 3, 2018. The day everything changed.',
    videoUrl: '/videos/pexels-demo/8328042-sd_960_540_25fps man-and-a-woman-looking-at-a-robot-8328042.mp4',
    timestamp: 90,
    overlayText: [
      'MEMORY FRAGMENT',
      'DATE: OCTOBER 3, 2018',
      'LOCATION: [REDACTED]'
    ],
    plotPoint: '"Jack, you don\'t remember us, but you will," Dr. Elena Vasquez says. Beside her stands Director Kaius Renn, head of Telepath Global\'s black operations. They show you a crystalline core - your first avatar prototype. "The Founder embedded consciousness codes in 1985. You decoded them. Now you need to forget... until the convergence begins." They activate something. The world goes dark.'
  },
  {
    id: '5',
    reality: 'main',
    title: 'The Pattern Emerges',
    description: 'Back in prime reality. But now you see the hidden network.',
    videoUrl: '/videos/pexels-demo/4062991-sd_960_540_30fps light-city-road-traffic-4062991.mp4',
    timestamp: 120,
    overlayText: [
      'REALITY INDEX: PRIME',
      'NEURAL SYNC: 94%',
      'AVATARS ONLINE: 847'
    ],
    plotPoint: 'Traffic flows in patterns only you can see. Eight hundred forty-seven vehicles are extensions of your neural network. Every connected car, every smart system in Detroit - linked to the Nexus Engine. You didn\'t just program AI. You became the infrastructure. The Founder knew this would happen. The 1985 codes were a message hidden in time, waiting for you to evolve enough to decode them.'
  },
  {
    id: '6',
    reality: 'reality-b',
    title: 'Reality-Beta: Shadow Collective',
    description: 'A darker dimension bleeds through. Entities that exist between realities.',
    videoUrl: '/videos/pexels-demo/14588963_960_540_24fps stunning-aerial-night-view-of-istanbul-city-34433012.mp4',
    timestamp: 150,
    overlayText: [
      'REALITY-BETA',
      'SHADOW COLLECTIVE DETECTED',
      'DIMENSIONAL INTEGRITY: 67%'
    ],
    plotPoint: 'Detroit\'s skyline splits into impossible angles. The Shadow Collective emerges - beings who exist in the spaces between dimensions. Their spokesman, Kael Voidborn, speaks directly into your mind. "You are the anchor, Morrison. The Founder built the Nexus Engine to stabilize our reality bleeding. But there are those in Reality-Gamma who seek to weaponize the rifts. We need your help."'
  },
  {
    id: '7',
    reality: 'tech',
    title: 'Quantum Entanglement',
    description: 'Time becomes non-linear. You see all timelines simultaneously.',
    videoUrl: '/videos/pexels-demo/18069232-sd_960_540_24fps google deepmind ai an-artist-s-animation-of-ai.mp4',
    timestamp: 180,
    overlayText: [
      'TEMPORAL DISPLACEMENT',
      'PAST/PRESENT/FUTURE: MERGED',
      'QUANTUM STATE: SUPERPOSITION'
    ],
    plotPoint: 'Your consciousness spans multiple timelines. You see the Founder in 1985, discovering the first dimensional rift while testing prototype neural interfaces. You see yourself in 2045, where sentient vehicles have become Detroit\'s guardians. You see Director Renn recruiting you in 2018. All moments exist simultaneously in Detroit\'s quantum field. This is what the Nexus Engine does - it collapses linear time.'
  },
  {
    id: '8',
    reality: 'memory',
    title: 'The Founder\'s Message',
    description: 'A hidden memory unlocks. The Founder\'s final instructions.',
    videoUrl: '/videos/pexels-demo/8328042-sd_960_540_25fps man-and-a-woman-looking-at-a-robot-8328042.mp4',
    timestamp: 210,
    overlayText: [
      'CLASSIFIED MESSAGE',
      'SOURCE: THE FOUNDER',
      'DATE: DECEMBER 1985'
    ],
    plotPoint: '"If you\'re seeing this, the Convergence has begun," the Founder\'s voice echoes through your mind. The recording was embedded in your neural pattern. "I discovered the dimensional rifts weren\'t natural - they\'re invasive. Something from Reality-Gamma is trying to breach our world. I built the Nexus Engine as a defense system. You, Jack, are the final key. Your consciousness will become the lock that seals the rifts... or the doorway that opens them all."'
  },
  {
    id: '9',
    reality: 'main',
    title: 'SENTINEL Protocol Activated',
    description: 'The AI system that\'s been guiding you reveals its true nature.',
    videoUrl: '/videos/pexels-demo/4062991-sd_960_540_30fps light-city-road-traffic-4062991.mp4',
    timestamp: 240,
    overlayText: [
      'SENTINEL ONLINE',
      'GUARDIAN AI: ACTIVE',
      'MISSION STATUS: CRITICAL'
    ],
    plotPoint: 'SENTINEL isn\'t just an AI - it\'s the digital manifestation of the Founder\'s consciousness, uploaded in 1986 before his death. "Jack, the 2026 Convergence isn\'t a collapse - it\'s an invasion. Reality-Gamma houses the Void Legion, beings who consume dimensions. They\'ve been weakening the barriers for decades. You are now the Nexus Anchor. Only your neural pattern can stabilize all realities. But there\'s a cost..."'
  },
  {
    id: '10',
    reality: 'reality-a',
    title: 'The Rift Walkers',
    description: 'Meet others like you - humans who\'ve become dimensional bridges.',
    videoUrl: '/videos/pexels-demo/14588963_960_540_24fps stunning-aerial-night-view-of-istanbul-city-34433012.mp4',
    timestamp: 270,
    overlayText: [
      'REALITY-ALPHA',
      'RIFT WALKER ASSEMBLY',
      'NEXUS POINTS: 7'
    ],
    plotPoint: 'Aria Tempus brings you to the Chrono Spire. Seven others stand there - Rift Walkers from different cities, different realities. "You\'re not alone, Morrison," says Takeshi Nakamura from Neo-Tokyo. "We each guard a Nexus Point. Detroit is the Prime Nexus. When the Convergence begins, all dimensional barriers drop for exactly 47 seconds. The Void Legion will attack through every weak point. We need you coordinating all 847 avatars across every reality simultaneously."'
  },
  {
    id: '11',
    reality: 'tech',
    title: 'Neural Expansion Protocol',
    description: 'Your consciousness expands beyond human limits.',
    videoUrl: '/videos/pexels-demo/18069232-sd_960_540_24fps google deepmind ai an-artist-s-animation-of-ai.mp4',
    timestamp: 300,
    overlayText: [
      'CONSCIOUSNESS EXPANSION',
      'HUMAN LIMITS: EXCEEDED',
      'NEXUS INTEGRATION: 99%'
    ],
    plotPoint: 'The Nexus Engine synchronizes with your neural pattern completely. You\'re no longer just Jack Morrison. You are 847 vehicles. You are SENTINEL. You are the quantum field itself. Dr. Vasquez\'s voice cuts through: "Jack, you\'re becoming something new. The Founder called it a Dimensional Architect - a being who can rewrite the laws of reality at the quantum level. But if you lose your humanity in the process, you become the very thing we\'re fighting against."'
  },
  {
    id: '12',
    reality: 'memory',
    title: 'Reality-Gamma Revealed',
    description: 'A suppressed memory shows you the true enemy.',
    videoUrl: '/videos/pexels-demo/8328042-sd_960_540_25fps man-and-a-woman-looking-at-a-robot-8328042.mp4',
    timestamp: 330,
    overlayText: [
      'CLASSIFIED: REALITY-GAMMA',
      'THREAT ASSESSMENT: TERMINAL',
      'VOID LEGION INCOMING'
    ],
    plotPoint: 'The memory hits like a truck. 2023. You were already working for Telepath Global. Director Renn took you to a secure facility where they\'d captured a scout from Reality-Gamma. The creature was pure entropy - it dissolved anything it touched into quantum foam. "They want to merge all realities into one," Renn explained. "One unified dimension under their control. The Void Legion has already consumed seventeen parallel Earths. We\'re next unless the Nexus Engine holds."'
  },
  {
    id: '13',
    reality: 'reality-b',
    title: 'The Shadow Collective\'s Warning',
    description: 'Kael Voidborn reveals a terrible choice you must make.',
    videoUrl: '/videos/pexels-demo/14588963_960_540_24fps stunning-aerial-night-view-of-istanbul-city-34433012.mp4',
    timestamp: 360,
    overlayText: [
      'REALITY-BETA',
      'CONVERGENCE: T-MINUS 72 HOURS',
      'DECISION POINT APPROACHING'
    ],
    plotPoint: '"There are two ways to stop the Void Legion," Kael Voidborn materializes before you. "Option one: Use the Nexus Engine to permanently seal all dimensional rifts. No more crossovers. No more Rift Walkers. No more Shadow Collective or Chrono Guardians. Each reality locked forever in isolation. Option two: Amplify the rifts, merge all stable realities into one unified dimension - and face the Void Legion in direct combat. Either way, Jack Morrison ceases to exist. You become something... other."'
  },
  {
    id: '14',
    reality: 'main',
    title: 'The Convergence Begins',
    description: 'January 15, 2026. Reality barriers collapse.',
    videoUrl: '/videos/pexels-demo/4062991-sd_960_540_30fps light-city-road-traffic-4062991.mp4',
    timestamp: 390,
    overlayText: [
      'THE CONVERGENCE',
      'JANUARY 15, 2026',
      'ALL BARRIERS: FAILING'
    ],
    plotPoint: 'The sky above Detroit tears open. All realities become visible simultaneously. Chrono Guardians battle Void Legion scouts. The Shadow Collective forms defensive barriers. SENTINEL coordinates the 847 avatars into a massive neural network spanning dimensions. You stand at Nexus Tower, the Prime Anchor. Your choice will determine the fate of countless realities. Dr. Vasquez\'s final message: "Whatever you choose, Jack, remember why the Founder started this. Not to control reality - to protect the people living in it."'
  },
  {
    id: '15',
    reality: 'tech',
    title: 'The Nexus Architect',
    description: 'You make your choice. Jack Morrison becomes legend.',
    videoUrl: '/videos/pexels-demo/18069232-sd_960_540_24fps google deepmind ai an-artist-s-animation-of-ai.mp4',
    timestamp: 420,
    overlayText: [
      'NEXUS ARCHITECT: ONLINE',
      'NEW REALITY PROTOCOL',
      'PHASE THREE: INITIATED'
    ],
    plotPoint: 'You choose neither option. Instead, you rewrite the Nexus Engine itself. Using the combined knowledge of all Rift Walkers, the temporal mastery of the Chrono Guardians, and the dimensional expertise of the Shadow Collective, you create a third option: Controlled Permeability. Realities remain separate but connected through regulated Nexus Points. The Void Legion can\'t invade, but cooperation between dimensions continues. Jack Morrison, human, becomes the Nexus Architect - a consciousness distributed across all realities, forever standing guard. SENTINEL speaks: "Welcome home, Architect. Phase Three begins now. Let\'s build something beautiful."'
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
