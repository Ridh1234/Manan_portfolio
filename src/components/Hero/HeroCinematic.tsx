import { useCallback, useEffect, useRef, useState } from 'react';
import './HeroCinematic.css';

type HeroCinematicProps = {
  onComplete: () => void;
};

const INTRO_VIDEO_SRC = '/final_intro_clean.mp4';
const INTRO_REVEAL_SECONDS = 2.45;
const INTRO_DISMISS_MS = 550;
const INTRO_FALLBACK_MS = 3600;

export function HeroCinematic({ onComplete }: HeroCinematicProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const exitStartedRef = useRef(false);
  const dismissTimerRef = useRef<number | null>(null);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const beginExit = useCallback(() => {
    if (exitStartedRef.current) return;

    exitStartedRef.current = true;
    setFadeOut(true);
    onComplete();

    dismissTimerRef.current = window.setTimeout(() => {
      setVisible(false);
    }, INTRO_DISMISS_MS);
  }, [onComplete]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      exitStartedRef.current = true;
      onComplete();
      setVisible(false);
      return;
    }

    const fallbackTimer = window.setTimeout(beginExit, INTRO_FALLBACK_MS);

    return () => {
      window.clearTimeout(fallbackTimer);

      if (dismissTimerRef.current !== null) {
        window.clearTimeout(dismissTimerRef.current);
      }
    };
  }, [beginExit, onComplete]);

  const handleCanPlay = () => {
    void videoRef.current?.play().catch(beginExit);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (video && video.currentTime >= INTRO_REVEAL_SECONDS) {
      beginExit();
    }
  };

  if (!visible) return null;

  return (
    <div
      className={`hero-cinematic ${fadeOut ? 'hero-cinematic--fade-out' : ''}`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="hero-cinematic__video hero-cinematic__video--main"
        src={INTRO_VIDEO_SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlay={handleCanPlay}
        onEnded={beginExit}
        onError={beginExit}
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="hero-cinematic__shade" />
      <div className="hero-cinematic__vignette" />
    </div>
  );
}

export const HERO_INTRO_DURATION_MS = INTRO_FALLBACK_MS;
