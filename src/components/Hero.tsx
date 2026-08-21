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
    <section id="hero" className="relative pt-20 sm:pt-28 pb-10 lg:pb-16 bg-gradient-to-b from-[#F7F1EE] via-white to-[#F2EBE8] overflow-hidden">
      
      {/* Background Accent Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-8 left-4 w-60 h-60 bg-[#BD2A2A]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-48 right-4 w-72 h-72 bg-[#4A0E17]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: HERO TEXT */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1 bg-[#4A0E17]/10 border border-[#BD2A2A]/30 text-[#4A0E17] text-[11px] sm:text-xs font-extrabold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-xs">
                <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#BD2A2A]" />
                <span>ESTABLISHED SINCE 2005</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 text-[11px] sm:text-xs font-extrabold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-500 text-amber-500" />
                <span>5.0 ⭐ Google Rated (44 Reviews)</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1C1617] leading-[1.18] tracking-tight">
              Your Trusted Partner For <br className="hidden sm:inline" />
              <span className="text-[#BD2A2A]">
                Property & Legal Documentation
              </span> <br />
              In Mira Road & Thane
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base text-[#4A383A] leading-relaxed">
              Contact us for sale & purchase of <strong className="text-[#1C1617]">Flats, Commercial Shops, Row Houses & Rentals</strong>. <br />
              <span className="font-extrabold text-[#BD2A2A] bg-[#F7F1EE] border border-[#EAE0DC] px-2 py-0.5 rounded inline-block mt-1">
                SPECIALIST IN STAMP DUTY, REGISTRATION & PROPERTY DOCUMENT WORK
              </span>
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs font-bold text-[#1C1617]">
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={onOpenConsultation}
                className="flex items-center justify-center gap-2 bg-[#BD2A2A] hover:bg-[#A82222] text-white font-extrabold text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow-lg transition-all transform active:scale-98"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Book Legal Consultation</span>
              </button>

              <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3">
                <a
                  href="tel:09820607688"
                  className="flex items-center justify-center gap-2 bg-[#1C1617] hover:bg-[#2A2022] text-white font-extrabold text-xs sm:text-sm px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl shadow-md transition-all border border-[#3A2D30] active:scale-98"
                >
                  <Phone className="w-4 h-4 text-[#BD2A2A]" />
                  <span>Call Us</span>
                </a>

                <a
                  href="https://wa.me/919820607688?text=Hello%20Arun%20Property%20Consultancy..."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs sm:text-sm px-4 py-3 sm:px-4 sm:py-3.5 rounded-xl shadow-md transition-all active:scale-98"
                >
                  <WhatsappIcon className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Stats Footer */}
            <div className="pt-4 border-t border-[#EAE3E0] grid grid-cols-3 text-center sm:text-left gap-2">
              <div>
                <div className="text-base sm:text-xl font-black text-[#1C1617]">20+ Yrs</div>
                <div className="text-[9px] sm:text-[10px] text-[#6E5D5D] font-bold uppercase">Exp (2005)</div>
              </div>
              <div className="border-x border-[#EAE3E0] px-2">
                <div className="text-base sm:text-xl font-black text-[#BD2A2A]">5.0 ★</div>
                <div className="text-[9px] sm:text-[10px] text-[#6E5D5D] font-bold uppercase">44 Reviews</div>
              </div>
              <div>
                <div className="text-base sm:text-xl font-black text-[#1C1617]">Mira Rd</div>
                <div className="text-[9px] sm:text-[10px] text-[#6E5D5D] font-bold uppercase">Sheetal Nagar</div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: LANDSCAPE VIDEO PLAYER */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-[#1C1617] group ring-1 ring-[#BD2A2A]/40">
              
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

                <div className="absolute top-2.5 right-2.5 z-20">
                  <button
                    onClick={toggleMute}
                    className="bg-[#1C1617]/80 hover:bg-[#1C1617] text-white p-1.5 sm:p-2 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-md active:scale-95"
                    title={isMuted ? "Unmute Audio" : "Mute Audio"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#BD2A2A]" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />}
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
                      className="pointer-events-auto bg-[#BD2A2A] hover:bg-[#A82222] text-white font-extrabold text-xs px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-all border border-white/20 active:scale-95"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Replay Reel</span>
                    </button>
                  ) : (
                    <button
                      onClick={togglePlay}
                      className="pointer-events-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#BD2A2A]/90 hover:bg-[#BD2A2A] text-white flex items-center justify-center shadow-2xl backdrop-blur-sm transform group-hover:scale-110 transition-all active:scale-95"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 sm:w-7 sm:h-7" /> : <Play className="w-5 h-5 sm:w-7 sm:h-7 ml-0.5 fill-white" />}
                    </button>
                  )}
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1C1617] via-[#1C1617]/85 to-transparent p-2.5 sm:p-5 text-white z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
                  
                  <div className="flex items-center gap-2">
                    <img src="/arun-logo.png" alt="Arun Logo" className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-white/40 bg-white shrink-0" />
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-bold text-[#BCA39A] uppercase tracking-wider block">
                        {currentVideo.tagline}
                      </span>
                      <h3 className="font-extrabold text-xs sm:text-sm text-white leading-tight">
                        {currentVideo.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-[#1C1617]/90 p-0.5 sm:p-1 rounded-lg sm:rounded-xl border border-white/20 backdrop-blur-md text-[10px] sm:text-[11px] self-end sm:self-auto">
                    {playlist.map((item, idx) => {
                      const isActive = currentVideoIndex === idx;
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelectChapter(idx)}
                          className={`flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg font-bold transition-all ${
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

            <div className="mt-2.5 flex items-center justify-between text-[10px] sm:text-[11px] text-[#6E5D5D] font-semibold px-1">
              <span className="flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${hasEnded ? 'bg-amber-500' : 'bg-emerald-600'}`}></span>
                <span>{hasEnded ? 'Reel finished. Click Replay.' : 'Tap video to play/pause.'}</span>
              </span>
              <span>Arun Property Consultancy</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
