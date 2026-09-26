'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface ShowreelSectionProps {
    readonly videoSrc?: string;
    readonly videoMobileSrc?: string;
    readonly posterSrc?: string;
    readonly posterMobileSrc?: string;
}

export default function ShowreelSection({
    videoSrc = '/showreel.mp4',
    videoMobileSrc = '/showreel-mobile.mp4',
    posterSrc = '/poster.jpg',
    posterMobileSrc = '/poster-mobile.jpg',
}: Readonly<ShowreelSectionProps>) {
    const desktopVideoRef = useRef<HTMLVideoElement>(null);
    const mobileVideoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleMute = () => {
        const newMuted = !isMuted;
        if (desktopVideoRef.current) desktopVideoRef.current.muted = newMuted;
        if (mobileVideoRef.current) mobileVideoRef.current.muted = newMuted;
        setIsMuted(newMuted);
    };

    const togglePlay = () => {
        const activeRef = window.innerWidth >= 768 ? desktopVideoRef.current : mobileVideoRef.current;
        if (!activeRef) return;

        if (isPlaying) {
            desktopVideoRef.current?.pause();
            mobileVideoRef.current?.pause();
            setIsPlaying(false);
        } else {
            activeRef.play();
            setIsPlaying(true);
        }
    };

    return (
        <section className="relative w-full bg-[#050505] overflow-hidden border-b border-[var(--border)]">
            {/* ========================================================
                DESKTOP / TABLET VERSION (Widescreen 21:9 Cinematic View)
                ======================================================== */}
            <div className="hidden md:flex relative w-full aspect-[21/9] min-h-[480px] max-h-[75vh] items-center justify-center">
                {/* Desktop Video */}
                <video
                    ref={desktopVideoRef}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    poster={posterSrc}
                    onClick={togglePlay}
                    className="w-full h-full object-cover cursor-pointer"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>

                {/* Subtle Cinematic Vignette */}
                <div 
                    onClick={togglePlay}
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/40" 
                />

                {/* Scanlines Effect (Cinematic TV) */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.15), rgba(255,255,255,0.15) 1px, transparent 1px, transparent 2px)',
                        backgroundSize: '100% 2px',
                    }}
                />

                {/* Top Badge: Brand & Rec Status */}
                <div className="absolute top-6 left-6 md:left-10 z-10 flex items-center gap-3 pointer-events-none">
                    <span className="flex items-center gap-2 mono text-xs text-[#00754B] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 tracking-widest uppercase">
                        <span className="w-2 h-2 rounded-full bg-[#00754B] animate-pulse" />
                        3Monkeys Showreel
                    </span>
                    <span className="mono text-[10px] text-white/50 tracking-wider">
                        4K UHD • 24FPS
                    </span>
                </div>

                {/* Play Overlay indicator when paused */}
                {!isPlaying && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={togglePlay}
                        aria-label="Riproduci showreel"
                        className="absolute z-20 w-20 h-20 rounded-full bg-[#00754B]/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-md hover:scale-110 transition-transform"
                    >
                        <Play className="w-8 h-8 ml-1" fill="white" />
                    </motion.button>
                )}

                {/* Desktop Controls */}
                <div className="absolute bottom-6 right-6 md:right-10 z-10 flex items-center gap-3">
                    <button
                        onClick={togglePlay}
                        aria-label={isPlaying ? 'Pausa video' : 'Riproduci video'}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/15 backdrop-blur-md transition-all hover:scale-105"
                    >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" fill="white" />}
                    </button>

                    <button
                        onClick={toggleMute}
                        aria-label={isMuted ? 'Attiva audio' : 'Disattiva audio'}
                        className="flex items-center gap-2 px-3.5 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/15 backdrop-blur-md transition-all hover:scale-105 mono text-xs tracking-wider"
                    >
                        {isMuted ? (
                            <>
                                <VolumeX className="w-4 h-4 text-white/70" />
                                <span className="text-white/70">Audio Off</span>
                            </>
                        ) : (
                            <>
                                <Volume2 className="w-4 h-4 text-[#00754B]" />
                                <span className="text-[#00754B]">Audio On</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* ========================================================
                MOBILE VERSION (Native 9:16 Vertical Reel Experience)
                ======================================================== */}
            <div className="md:hidden relative w-full px-4 py-8 flex flex-col items-center justify-center bg-[#050505]">
                <div className="relative w-full max-w-[360px] aspect-[9/16] max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black flex items-center justify-center">
                    {/* Mobile Video */}
                    <video
                        ref={mobileVideoRef}
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        poster={posterMobileSrc}
                        onClick={togglePlay}
                        className="w-full h-full object-cover cursor-pointer"
                    >
                        <source src={videoMobileSrc} type="video/mp4" />
                    </video>

                    {/* Subtle Vignette */}
                    <div
                        onClick={togglePlay}
                        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-transparent to-black/30"
                    />

                    {/* Scanlines Effect */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-[0.03]"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.15), rgba(255,255,255,0.15) 1px, transparent 1px, transparent 2px)',
                            backgroundSize: '100% 2px',
                        }}
                    />

                    {/* Top Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 pointer-events-none">
                        <span className="flex items-center gap-1.5 mono text-[10px] text-[#00754B] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00754B] animate-pulse" />
                            Showreel
                        </span>
                        <span className="mono text-[9px] text-white/50 tracking-wider">
                            9:16 Vertical HD
                        </span>
                    </div>

                    {/* Play Button Indicator when paused */}
                    {!isPlaying && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={togglePlay}
                            aria-label="Riproduci showreel"
                            className="absolute z-20 w-16 h-16 rounded-full bg-[#00754B]/90 text-white flex items-center justify-center shadow-2xl backdrop-blur-md"
                        >
                            <Play className="w-6 h-6 ml-1" fill="white" />
                        </motion.button>
                    )}

                    {/* Mobile Controls */}
                    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                        <button
                            onClick={togglePlay}
                            aria-label={isPlaying ? 'Pausa video' : 'Riproduci video'}
                            className="flex items-center justify-center w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/15 backdrop-blur-md"
                        >
                            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" fill="white" />}
                        </button>
                        <button
                            onClick={toggleMute}
                            aria-label={isMuted ? 'Attiva audio' : 'Disattiva audio'}
                            className="flex items-center justify-center w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/15 backdrop-blur-md"
                        >
                            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/70" /> : <Volume2 className="w-3.5 h-3.5 text-[#00754B]" />}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
