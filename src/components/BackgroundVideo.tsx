'use client';

import React, { useState } from 'react';

interface BackgroundVideoProps {
  enabled: boolean;
  opacity?: number; // 0.05 to 0.35
  videoId?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  enabled,
  opacity = 0.18,
  videoId = 'xDIwPfMbayQ', // "The Royal Archive Beneath the Dust | Ancient Library Ambience"
}) => {
  if (!enabled) return null;

  // YouTube nocookie background loop parameters
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playsinline=1`;

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden w-full h-full"
      aria-hidden="true"
    >
      {/* Scaled iframe to avoid black letterboxing on various aspect ratios */}
      <div className="absolute top-1/2 left-1/2 w-[160vw] h-[160vh] -translate-x-1/2 -translate-y-1/2">
        <iframe
          src={embedUrl}
          className="w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity }}
          allow="autoplay; encrypted-media"
          title="Historical Background Ambience"
          tabIndex={-1}
        />
      </div>

      {/* Warm Parchment Vignette Filter Overlay to maintain readable contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-parchment-50/70 via-transparent to-parchment-50/80 pointer-events-none" />
      <div className="absolute inset-0 bg-parchment-50/40 pointer-events-none" />
    </div>
  );
};
