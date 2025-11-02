import { FiveDMoviePlayer } from "@/components/5d-movie-player";
import { DIUHero } from "@/components/diu-hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { AuthButton } from "@/components/auth-button";
import { Film, Github, Sparkles, Globe2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      {/* Navigation */}
      <nav className="w-full border-b border-gray-800 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 px-6">
          <div className="flex gap-6 items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Film className="w-6 h-6 text-cyan-400" />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                5D Framework
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-4 text-sm text-gray-400">
              <Link href="#about" className="hover:text-cyan-400 transition-colors">About DIU</Link>
              <Link href="#experience" className="hover:text-cyan-400 transition-colors">Experience</Link>
              <Link href="https://github.com" target="_blank" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <AuthButton />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about">
        <DIUHero />
      </section>

      {/* Main 5D Movie Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience the 5D Movie
            </h2>
            <p className="text-xl text-gray-400">
              Navigate through realities, memories, and time
            </p>
          </div>
          
          <FiveDMoviePlayer />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            The 5 Dimensions
          </h2>
          
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/20 backdrop-blur-sm">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="text-xl font-bold mb-2 text-cyan-400">Time</h3>
              <p className="text-gray-400 text-sm">Move forward and backward through the narrative timeline</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">Space</h3>
              <p className="text-gray-400 text-sm">Multiple perspectives and camera angles of the same moment</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-xl border border-red-500/20 backdrop-blur-sm">
              <div className="text-4xl mb-3">🔀</div>
              <h3 className="text-xl font-bold mb-2 text-red-400">Reality</h3>
              <p className="text-gray-400 text-sm">Jump between parallel universes and alternate timelines</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 p-6 rounded-xl border border-amber-500/20 backdrop-blur-sm">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-xl font-bold mb-2 text-amber-400">Memory</h3>
              <p className="text-gray-400 text-sm">Explore character memories and flashback sequences</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/20 backdrop-blur-sm">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-green-400">Choice</h3>
              <p className="text-gray-400 text-sm">Your decisions shape the narrative direction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 p-12 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
            <h2 className="text-4xl font-bold mb-4">Ready to Build Your Own?</h2>
            <p className="text-xl text-gray-300 mb-8">
              This framework is open for creators. Start building your own 5D experiences today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://github.com" 
                target="_blank"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full text-white font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </Link>
              <Link 
                href="https://mattyjacks.com" 
                target="_blank"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full text-white font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <Globe2 className="w-5 h-5" />
                Hire Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-3 text-cyan-400">Detroit Interactive Universe</h3>
              <p className="text-gray-400 text-sm">
                The world's first 5D movie experience. A covert operation disguised as cinema.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-purple-400">Partners</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://telepath.global" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Telepath Global
                  </Link>
                </li>
                <li>
                  <Link href="https://mattyjacks.com" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    MattyJacks.com
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-green-400">Technology</h3>
              <p className="text-gray-400 text-sm">
                Built with Next.js, React, TailwindCSS, and Supabase
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2025 Detroit Interactive Universe. A Telepath Global Production.</p>
            <p className="mt-2">
              Designed & Developed by{" "}
              <Link href="https://mattyjacks.com" target="_blank" className="text-purple-400 hover:text-purple-300 underline">
                MattyJacks
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
