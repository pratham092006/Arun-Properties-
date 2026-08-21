import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ShieldCheck, Video, Sparkles, UserCheck } from 'lucide-react';

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
    <section id="videos" className="py-20 bg-black text-white relative overflow-hidden border-b-4 border-black">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FF3000] text-white text-xs font-black px-3.5 py-1.5 uppercase tracking-widest mb-3">
            <Video className="w-4 h-4 text-white" />
            <span>REAL STORIES & CONSULTATION SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter">
            See How We Serve Our Clients in <span className="text-[#FF3000]">Mira Road</span>
          </h2>
          <p className="mt-3 text-base text-zinc-300">
            From initial legal consultation to final key handover, we make property purchase and paperwork 100% transparent.
          </p>
        </div>

        {/* Main Video & Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Video Player Display (8 cols) */}
          <div className="lg:col-span-8">
            <div className="relative border-4 border-white bg-black group">
              
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
                <span className="bg-[#FF3000] text-white text-xs font-black px-3 py-1.5 uppercase tracking-widest border border-white">
                  <currentVideo.icon className="w-3.5 h-3.5 inline mr-1" />
                  <span>{currentVideo.badge}</span>
                </span>

                <button
                  onClick={toggleMute}
                  className="bg-black text-white p-2.5 border-2 border-white transition-colors hover:bg-[#FF3000]"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                </button>
              </div>

              {/* Center Play/Pause Trigger */}
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30 group-hover:bg-black/50 transition-all">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FF3000] hover:bg-black text-white flex items-center justify-center border-2 border-white transition-all"
                >
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1 fill-white" />}
                </button>
              </div>

              {/* Video Info Bottom Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-black/90 p-6 text-white z-20 border-t-2 border-white">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white">{currentVideo.title}</h3>
                <p className="text-sm text-zinc-300 mt-1 font-bold">{currentVideo.description}</p>
              </div>

            </div>
          </div>

          {/* Video Selector Tabs & Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-zinc-300 mb-2">Select Video Experience:</h3>
            
            {videoList.map((item) => {
              const isActive = activeVideo === item.id;
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectVideo(item.id)}
                  className={`p-5 cursor-pointer transition-all border-2 ${
                    isActive 
                      ? 'bg-[#FF3000] text-white border-white' 
                      : 'bg-black text-white border-white/40 hover:border-white'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 bg-white text-black font-black flex items-center justify-center shrink-0 border border-black">
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-black text-white border border-white inline-block mb-1">
                        {item.badge}
                      </span>
                      <h4 className="font-black text-base uppercase text-white leading-tight">{item.title}</h4>
                      <p className="text-xs text-white/90 font-bold mt-1 line-clamp-2">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Verification Guarantee Card */}
            <div className="p-5 bg-black border-2 border-white text-left mt-6">
              <div className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest">
                <ShieldCheck className="w-5 h-5 text-[#FF3000]" />
                <span>100% Legal Paperwork Assurance</span>
              </div>
              <p className="text-xs text-zinc-300 mt-2 leading-relaxed font-bold">
                Every deal at Arun Property Consultancy goes through rigorous chain deed verification, society NOC checks, and Maharashtra stamp duty registration.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
