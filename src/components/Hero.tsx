import React, { useRef, useState } from 'react';
import { Phone, Play, Pause, Volume2, VolumeX, ShieldCheck, CheckCircle2, Star, Award, KeyRound, UserCheck, RotateCcw } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hasEnded, setHasEnded] = useState<boolean>(false);

  const playlist = [
    {
      id: 0,
      title: 'Family Key Handover & Smiles',
      tagline: 'Part 1: Real Client Handover',
      src: '/videos/key-handover.mp4',
      icon: KeyRound,
      badge: 'Client Handover'
    },
    {
      id: 1,
      title: 'In-Office Legal & Document Advisory',
      tagline: 'Part 2: Stamp Duty & Loan Advice',
      src: '/videos/consultant-office.mp4',
      icon: UserCheck,
      badge: 'Office Consultation'
    }
  ];

  const currentVideo = playlist[currentVideoIndex];

  const handleVideoEnded = () => {
    if (currentVideoIndex === 0) {
      setCurrentVideoIndex(1);
      setHasEnded(false);
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      setHasEnded(true);
    }
  };

  const togglePlay = () => {
    if (hasEnded) {
      handleReplayAll();
      return;
    }

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
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

  const handleSelectChapter = (index: number) => {
    setHasEnded(false);
    setCurrentVideoIndex(index);
    setIsPlaying(true);
  };

  const handleReplayAll = () => {
    setHasEnded(false);
    setCurrentVideoIndex(0);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-12 lg:pb-16 bg-gradient-to-b from-[#F7F1EE] via-white to-[#F2EBE8] overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-12 left-10 w-72 h-72 bg-[#BD2A2A]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-48 right-10 w-96 h-96 bg-[#4A0E17]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: HERO TEXT */}
          <div className="lg:col-span-6 space-y-5 text-left">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#4A0E17]/10 border border-[#BD2A2A]/30 text-[#4A0E17] text-xs font-extrabold px-3 py-1 rounded-full shadow-xs">
                <Award className="w-3.5 h-3.5 text-[#BD2A2A]" />
                <span>ESTABLISHED SINCE 2005</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>5.0 ⭐ Google Rated (44 Reviews)</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1617] leading-[1.14] tracking-tight">
              Your Trusted Partner For <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A0E17] via-[#BD2A2A] to-[#4A0E17]">
                Property & Legal Documentation
              </span> <br />
              In Mira Road & Thane
            </h1>

            <p className="text-sm sm:text-base text-[#4A383A] leading-relaxed">
              Contact us for sale & purchase of <strong className="text-[#1C1617]">Flats, Commercial Shops, Row Houses & Rentals</strong>. <br />
              <span className="font-extrabold text-[#BD2A2A] bg-[#F7F1EE] border border-[#EAE0DC] px-2.5 py-0.5 rounded inline-block mt-1">
                SPECIALIST IN STAMP DUTY, REGISTRATION & PROPERTY DOCUMENT WORK
              </span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-[#1C1617]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>100% Legal Title Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Stamp Duty Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Home Loan Document Clearance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>20+ Years Trusted Service</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenConsultation}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#4A0E17] via-[#BD2A2A] to-[#4A0E17] hover:from-[#BD2A2A] hover:to-[#4A0E17] text-white font-extrabold text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow-lg shadow-[#BD2A2A]/25 transition-all transform hover:-translate-y-0.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Book Legal Consultation</span>
              </button>

              <a
                href="tel:09820607688"
                className="flex items-center justify-center gap-2 bg-[#1C1617] hover:bg-[#2A2022] text-white font-extrabold text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 border border-[#3A2D30]"
              >
                <Phone className="w-4 h-4 text-[#BD2A2A]" />
                <span>Call 098206 07688</span>
              </a>

              <a
                href="https://wa.me/919820607688?text=Hello%20Arun%20Property%20Consultancy,%20I%20would%20like%20to%20inquire%20about..."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs sm:text-sm px-4 py-3.5 rounded-xl shadow-md transition-all"
              >
                <WhatsappIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 border-t border-[#EAE3E0] flex items-center justify-between text-left">
              <div>
                <div className="text-xl font-black text-[#1C1617]">20+ Years</div>
                <div className="text-[10px] text-[#6E5D5D] font-bold uppercase">Experience (2005)</div>
              </div>
              <div className="h-8 w-px bg-[#EAE3E0]"></div>
              <div>
                <div className="text-xl font-black text-[#BD2A2A]">5.0 ★</div>
                <div className="text-[10px] text-[#6E5D5D] font-bold uppercase">44 Google Reviews</div>
              </div>
              <div className="h-8 w-px bg-[#EAE3E0]"></div>
              <div>
                <div className="text-xl font-black text-[#1C1617]">Mira Road</div>
                <div className="text-[10px] text-[#6E5D5D] font-bold uppercase">Sheetal Nagar Hub</div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: LANDSCAPE VIDEO PLAYER */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#1C1617] group ring-1 ring-[#BD2A2A]/40">
              
              <div className="relative aspect-video w-full overflow-hidden">
                <video
                  key={currentVideo.src}
                  ref={videoRef}
                  src={currentVideo.src}
                  autoPlay
                  muted={isMuted}
                  playsInline
                  onEnded={handleVideoEnded}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                />

                <div className="absolute top-3 right-3 z-20">
                  <button
                    onClick={toggleMute}
                    className="bg-[#1C1617]/80 hover:bg-[#1C1617] text-white p-2 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-md"
                    title={isMuted ? "Unmute Audio" : "Mute Audio"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-[#BD2A2A]" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                </div>

                <div 
                  className={`absolute inset-0 flex items-center justify-center z-10 bg-[#1C1617]/30 transition-opacity duration-300 ${
                    isPlaying && !hasEnded 
                      ? 'opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto' 
                      : 'opacity-100 pointer-events-auto'
                  }`}
                >
                  {hasEnded ? (
                    <button
                      onClick={handleReplayAll}
                      className="pointer-events-auto bg-[#BD2A2A] hover:bg-[#A82222] text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-2xl flex items-center gap-2 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all border border-white/20"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Replay Video Reel</span>
                    </button>
                  ) : (
                    <button
                      onClick={togglePlay}
                      className="pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#BD2A2A]/90 hover:bg-[#BD2A2A] text-white flex items-center justify-center shadow-2xl backdrop-blur-sm transform group-hover:scale-110 transition-all"
                    >
                      {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1 fill-white" />}
                    </button>
                  )}
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1C1617] via-[#1C1617]/85 to-transparent p-3.5 sm:p-5 text-white z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  
                  <div className="flex items-center gap-2.5">
                    <img src="/arun-logo.png" alt="Arun Logo" className="w-9 h-9 rounded-full border border-white/40 bg-white shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-[#BCA39A] uppercase tracking-wider block">
                        {currentVideo.tagline}
                      </span>
                      <h3 className="font-extrabold text-xs sm:text-sm text-white leading-tight">
                        {currentVideo.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 bg-[#1C1617]/90 p-1 rounded-xl border border-white/20 backdrop-blur-md text-[11px]">
                    {playlist.map((item, idx) => {
                      const isActive = currentVideoIndex === idx;
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelectChapter(idx)}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold transition-all ${
                            isActive 
                              ? 'bg-[#BD2A2A] text-white shadow-sm' 
                              : 'text-[#BCA39A] hover:text-white hover:bg-[#2A2022]'
                          }`}
                        >
                          <Icon className="w-3 h-3" />
                          <span>Part {idx + 1}</span>
                        </button>
                      );
                    })}
                  </div>

                </div>

              </div>

            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-[#6E5D5D] font-semibold px-2">
              <span className="flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${hasEnded ? 'bg-amber-500' : 'bg-emerald-600'}`}></span>
                <span>{hasEnded ? 'Reel finished. Click Replay to watch again.' : 'Hover over video to show play/pause controls.'}</span>
              </span>
              <span>Arun Property Consultancy</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
