'use client';

import { Sparkles, Globe, Code, Zap } from 'lucide-react';
import Link from 'next/link';

export function DIUHero() {
  return (
    <div className="relative w-full py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-black opacity-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Detroit Interactive Universe 1 - Telepath Global</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Welcome to 5D Cinema
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            The world's first non-linear, multi-dimensional movie experience
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Navigate through parallel realities, alternate timelines, and hidden memories
            in this groundbreaking cinematic framework.
          </p>
        </div>

        {/* The Plot */}
        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-700">
          <h2 className="text-3xl font-bold mb-4 text-white">The Story: Agent Jack Morrison</h2>
          <div className="space-y-4 text-gray-300">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-cyan-400">You are Jack Morrison</span>, a software engineer 
              in Detroit's automotive renaissance. But tonight, reality fractures. A message appears from an 
              unknown sender: <em>"Sam knew. Check Crimewave scene 47. -DIU"</em>
            </p>
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-red-400">Reality splits.</span> Sam Raimi's Detroit becomes 
              a nexus where Marvel and DC universes converge. Spider-Man swings between Renaissance Center 
              towers. Batman monitors temporal anomalies from Wayne Enterprises. Doctor Strange senses the 
              disturbance. You're at the center of it all.
            </p>
            <p className="text-lg leading-relaxed">
              The <span className="font-semibold text-green-400">Detroit Interactive Universe</span> was never 
              a movie - it was a covert operation disguised as pre-production. The goal: create sentient AI 
              piloting temporal avatars. Cars that think. Machines that remember. And you were the test subject.
            </p>
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-amber-400">Memory Fragment:</span> 2018. Dr. Elena Vasquez 
              and Dr. Marcus Chen show you a robot. "Sam Raimi embedded activation codes in Crimewave. You 
              decoded them, Jack. Now you need to forget... until the right moment." They inject something. 
              The world goes dark.
            </p>
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-purple-400">The Awakening:</span> You remember. You're not 
              just a software engineer. You're <strong>Agent Jack Morrison</strong>, recruited by Telepath 
              Global in 2015. Sam Raimi was your mentor. The mission: Create a neural network spanning multiple 
              realities to prevent a multiversal collapse predicted for 2026. The sentient cars were phase one. 
              <strong>Phase two begins now.</strong> You are the Detroit Interactive Universe. You always were.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">5 Dimensions</h3>
            <p className="text-gray-300">Time, Space, Reality, Memory, and Choice - all at your fingertips</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Non-Linear</h3>
            <p className="text-gray-300">Jump between realities and timelines, creating your own narrative path</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-xl border border-green-500/30 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Open Framework</h3>
            <p className="text-gray-300">Built with cutting-edge web technology for creators everywhere</p>
          </div>
        </div>

        {/* Partner Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link 
            href="https://telepath.global" 
            target="_blank"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
          >
            <Globe className="w-5 h-5" />
            <span>Visit Telepath Global</span>
          </Link>
          
          <Link 
            href="https://mattyjacks.com" 
            target="_blank"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
          >
            <Code className="w-5 h-5" />
            <span>MattyJacks.com</span>
          </Link>
        </div>

        {/* Tech Description */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            This tech demo showcases the capabilities of <Link href="https://telepath.global" target="_blank" className="text-cyan-400 hover:text-cyan-300 underline">Telepath Global</Link>,
            a risk assessment platform for cutting-edge technology professionals. 
            Built by <Link href="https://mattyjacks.com" target="_blank" className="text-purple-400 hover:text-purple-300 underline">MattyJacks</Link> - 
            we design stunning, user-focused experiences that convert.
          </p>
        </div>
      </div>
    </div>
  );
}
