import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ShieldCheck, CheckCircle2, Video, Sparkles, UserCheck } from 'lucide-react';

export const VideoShowcase: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<'handover' | 'consultant'>('handover');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoList = [
    {
      id: 'handover' as const,
      title: 'Family Key Handover & Happy Smiles',
      subtitle: 'Delivering Dream Homes in Mira Road',
      description: 'Watch the joy of a family receiving their property keys after smooth document verification and registration by Arun Property Consultancy.',
      src: '/videos/key-handover.mp4',
      badge: 'Delivered Home Dreams',
      icon: Sparkles
    },
    {
      id: 'consultant' as const,
      title: 'In-Office Legal & Document Advisory',
      subtitle: 'Professional Real Estate Guidance',
      description: 'See our senior property advisor guiding clients step-by-step through Stamp Duty registration, legal paper verification, and home loan documentation.',
      src: '/videos/consultant-office.mp4',
      badge: 'Legal Paperwork Expert',
      icon: UserCheck
    }
  ];

  const currentVideo = videoList.find(v => v.id === activeVideo)!;

  const handleSelectVideo = (id: 'handover' | 'consultant') => {
    setActiveVideo(id);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="videos" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-800/60 text-red-400 text-xs font-extrabold px-3.5 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            <Video className="w-4 h-4 text-red-400" />
            <span>REAL STORIES & CONSULTATION SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See How We Serve Our Clients in <span className="text-red-500">Mira Road</span>
          </h2>
          <p className="mt-3 text-base text-slate-300">
            From initial legal consultation to final key handover, we make property purchase and paperwork 100% transparent and stress-free.
          </p>
        </div>

        {/* Main Video & Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Video Player Display (8 cols) */}
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-black group">
              
              <video
                key={currentVideo.src}
                ref={videoRef}
                src={currentVideo.src}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-[360px] sm:h-[480px] lg:h-[520px] object-cover"
              />

              {/* Player Header Overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                <span className="bg-red-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <currentVideo.icon className="w-3.5 h-3.5" />
                  <span>{currentVideo.badge}</span>
                </span>

                <button
                  onClick={toggleMute}
                  className="bg-slate-900/80 hover:bg-slate-900 text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>

              {/* Center Play/Pause Trigger */}
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-950/20 group-hover:bg-slate-950/40 transition-all">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-2xl backdrop-blur-md transform group-hover:scale-110 transition-all"
                >
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </button>
              </div>

              {/* Video Info Bottom Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent p-6 text-white z-20">
                <h3 className="text-xl sm:text-2xl font-bold">{currentVideo.title}</h3>
                <p className="text-sm text-slate-300 mt-1">{currentVideo.description}</p>
              </div>

            </div>
          </div>

          {/* Video Selector Tabs & Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-lg font-bold text-slate-200 mb-2">Select Video Experience:</h3>
            
            {videoList.map((item) => {
              const isActive = activeVideo === item.id;
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectVideo(item.id)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                    isActive 
                      ? 'bg-slate-800/90 border-red-500 shadow-lg ring-1 ring-red-500/50' 
                      : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/70 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-red-600 text-white' : 'bg-slate-700 text-slate-300'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                          isActive ? 'bg-red-500/20 text-red-400' : 'bg-slate-700 text-slate-400'
                        }`}>
                          {item.badge}
                        </span>
                      </div>
                      <h4 className="font-bold text-base text-white mt-1.5">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Verification Guarantee Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-red-950/60 to-slate-900 border border-red-900/50 text-left mt-6">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-red-400" />
                <span>100% Legal Paperwork Assurance</span>
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Every deal at Arun Property Consultancy goes through rigorous chain deed verification, society NOC checks, and Maharashtra stamp duty registration.
              </p>
              <div className="mt-3 pt-3 border-t border-red-900/40 flex items-center justify-between text-xs text-amber-400 font-semibold">
                <span>Specialist in Stamp Duty</span>
                <span>Mira Road East</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
