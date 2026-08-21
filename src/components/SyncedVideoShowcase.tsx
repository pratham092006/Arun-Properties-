import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ShieldCheck, Sparkles, UserCheck, RefreshCw, LayoutGrid, Layers } from 'lucide-react';

export const SyncedVideoShowcase: React.FC = () => {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [activeAudio, setActiveAudio] = useState<'video1' | 'video2' | 'muted'>('video1');
  const [layoutMode, setLayoutMode] = useState<'split' | 'pip'>('split');
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayAll = () => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2) return;

    if (isPlaying) {
      v1.pause();
      v2.pause();
      setIsPlaying(false);
    } else {
      v1.play().catch(() => {});
      v2.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    const v1 = video1Ref.current;
    if (v1 && v1.duration) {
      setProgress((v1.currentTime / v1.duration) * 100);
      setDuration(v1.duration);

      const v2 = video2Ref.current;
      if (v2 && Math.abs(v2.currentTime - v1.currentTime) > 0.3) {
        v2.currentTime = v1.currentTime;
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekPercent = Number(e.target.value);
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;

    if (v1 && duration) {
      const targetTime = (seekPercent / 100) * duration;
      v1.currentTime = targetTime;
      if (v2) v2.currentTime = targetTime;
      setProgress(seekPercent);
    }
  };

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;

    if (v1 && v2) {
      if (activeAudio === 'video1') {
        v1.muted = false;
        v2.muted = true;
      } else if (activeAudio === 'video2') {
        v1.muted = true;
        v2.muted = false;
      } else {
        v1.muted = true;
        v2.muted = true;
      }
    }
  }, [activeAudio]);

  const handleRestartSync = () => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (v1) v1.currentTime = 0;
    if (v2) v2.currentTime = 0;
    if (!isPlaying) togglePlayAll();
  };

  return (
    <section id="videos" className="py-20 bg-[#1C1617] text-white relative overflow-hidden">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#BD2A2A]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#4A0E17]/80 border border-[#BD2A2A]/60 text-[#BCA39A] text-xs font-extrabold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#BD2A2A]" />
            <span>SYNCHRONIZED DUAL VIDEO FORMAT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            See Our Client Experience & <span className="text-[#BD2A2A]">Legal Consultation in Sync</span>
          </h2>
          <p className="mt-3 text-base text-[#BCA39A]">
            Both official videos playing in unified synchronization. Watch real key handovers alongside in-office property documentation advice.
          </p>
        </div>

        {/* Sync Controls Bar */}
        <div className="bg-[#241D1E] border border-[#3A2D30] rounded-2xl p-4 mb-8 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 shadow-xl">
          
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlayAll}
              className="bg-[#BD2A2A] hover:bg-[#A82222] text-white font-extrabold text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-md transition-all"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              <span>{isPlaying ? 'Pause Both Videos' : 'Play Both Videos'}</span>
            </button>

            <button
              onClick={handleRestartSync}
              className="bg-[#1C1617] hover:bg-[#2A2022] text-[#BCA39A] text-xs font-bold p-2.5 rounded-xl border border-[#3A2D30] transition-colors"
              title="Restart Both Videos from Beginning"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 min-w-[200px] flex items-center gap-3">
            <span className="text-xs text-[#BCA39A] font-mono">Sync</span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full h-2 bg-[#1C1617] rounded-lg appearance-none cursor-pointer accent-[#BD2A2A]"
            />
          </div>

          <div className="flex items-center gap-2">
            
            <div className="flex items-center bg-[#1C1617] p-1 rounded-xl border border-[#3A2D30] text-xs font-bold">
              <button
                onClick={() => setActiveAudio('video1')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  activeAudio === 'video1' ? 'bg-[#BD2A2A] text-white' : 'text-[#BCA39A] hover:text-white'
                }`}
                title="Audio from Video 1 (Key Handover)"
              >
                Audio 1
              </button>
              <button
                onClick={() => setActiveAudio('video2')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  activeAudio === 'video2' ? 'bg-[#BD2A2A] text-white' : 'text-[#BCA39A] hover:text-white'
                }`}
                title="Audio from Video 2 (Office Advice)"
              >
                Audio 2
              </button>
              <button
                onClick={() => setActiveAudio('muted')}
                className={`px-2 rounded-lg py-1 transition-colors ${
                  activeAudio === 'muted' ? 'bg-[#4A0E17] text-white' : 'text-[#BCA39A] hover:text-white'
                }`}
                title="Mute Both"
              >
                <VolumeX className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center bg-[#1C1617] p-1 rounded-xl border border-[#3A2D30] text-xs">
              <button
                onClick={() => setLayoutMode('split')}
                className={`p-1.5 rounded-lg transition-colors ${
                  layoutMode === 'split' ? 'bg-[#4A0E17] text-white' : 'text-[#BCA39A]'
                }`}
                title="Dual Side-by-Side Split View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode('pip')}
                className={`p-1.5 rounded-lg transition-colors ${
                  layoutMode === 'pip' ? 'bg-[#4A0E17] text-white' : 'text-[#BCA39A]'
                }`}
                title="Picture-in-Picture Cinema View"
              >
                <Layers className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Synced Videos Container */}
        {layoutMode === 'split' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Video 1 Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#3A2D30] bg-[#1C1617] group hover:border-[#BD2A2A]/60 transition-all">
              <video
                ref={video1Ref}
                src="/videos/key-handover.mp4"
                autoPlay
                loop
                muted={activeAudio !== 'video1'}
                playsInline
                onTimeUpdate={handleTimeUpdate}
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />

              <div className="absolute top-4 right-4 flex items-center z-20 pointer-events-none">
                {activeAudio === 'video1' && (
                  <span className="bg-emerald-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                    <Volume2 className="w-3 h-3" />
                    <span>Active Audio</span>
                  </span>
                )}
              </div>

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1C1617] via-[#1C1617]/85 to-transparent p-5 text-white z-20">
                <h3 className="font-bold text-lg text-white">Delivering Home Dreams</h3>
                <p className="text-xs text-[#BCA39A] mt-1">Families receiving keys after clear title property purchase.</p>
              </div>
            </div>

            {/* Video 2 Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#3A2D30] bg-[#1C1617] group hover:border-[#BD2A2A]/60 transition-all">
              <video
                ref={video2Ref}
                src="/videos/consultant-office.mp4"
                autoPlay
                loop
                muted={activeAudio !== 'video2'}
                playsInline
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />

              <div className="absolute top-4 right-4 flex items-center z-20 pointer-events-none">
                {activeAudio === 'video2' && (
                  <span className="bg-emerald-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                    <Volume2 className="w-3 h-3" />
                    <span>Active Audio</span>
                  </span>
                )}
              </div>

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1C1617] via-[#1C1617]/85 to-transparent p-5 text-white z-20">
                <h3 className="font-bold text-lg text-white">Legal & Paperwork Guidance</h3>
                <p className="text-xs text-[#BCA39A] mt-1">Step-by-step Stamp Duty registration & home loan verification.</p>
              </div>
            </div>

          </div>
        ) : (
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#3A2D30] bg-[#1C1617]">
            <video
              ref={video1Ref}
              src="/videos/key-handover.mp4"
              autoPlay
              loop
              muted={activeAudio !== 'video1'}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-[480px] sm:h-[560px] object-cover"
            />

            <div className="absolute top-6 right-6 w-48 sm:w-64 rounded-2xl overflow-hidden border-2 border-[#BD2A2A] shadow-2xl bg-black">
              <video
                ref={video2Ref}
                src="/videos/consultant-office.mp4"
                autoPlay
                loop
                muted={activeAudio !== 'video2'}
                playsInline
                className="w-full h-32 sm:h-44 object-cover"
              />
              <div className="bg-[#1C1617]/95 p-2 text-center text-[11px] font-bold text-white">
                Synced Office Advisor
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1C1617] via-[#1C1617]/85 to-transparent p-6 text-white z-20">
              <h3 className="font-black text-xl text-white">Synced Dual Video Presentation</h3>
              <p className="text-xs text-[#BCA39A] mt-1">Simultaneous playback of real key handovers and in-office documentation advisory.</p>
            </div>
          </div>
        )}

        <div className="mt-12 bg-[#241D1E] border border-[#3A2D30] rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <div className="flex justify-center items-center gap-2 text-[#BD2A2A] font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-[#BD2A2A]" />
            <span>100% Legal & Documentation Assurance</span>
          </div>
          <p className="text-xs text-[#BCA39A] mt-1.5 leading-relaxed">
            Arun Property Consultancy has been serving Mira Road East & Thane since 2005. Both videos represent our genuine client interactions and office consultations.
          </p>
        </div>

      </div>
    </section>
  );
};
