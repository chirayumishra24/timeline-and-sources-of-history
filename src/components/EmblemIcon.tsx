import React from 'react';
import { EmblemType } from '@/types/team';
import { Scroll, Compass, Hourglass, Landmark, Feather, Sparkles, Sun, Shield } from 'lucide-react';

interface EmblemIconProps {
  emblem: EmblemType;
  className?: string;
}

export const EmblemIcon: React.FC<EmblemIconProps> = ({ emblem, className = 'w-6 h-6' }) => {
  switch (emblem) {
    case 'scroll':
      return <Scroll className={className} />;
    case 'compass':
      return <Compass className={className} />;
    case 'hourglass':
      return <Hourglass className={className} />;
    case 'museum':
      return <Landmark className={className} />;
    case 'quill':
      return <Feather className={className} />;
    case 'artifact':
      return <Sparkles className={className} />;
    case 'sun':
      return <Sun className={className} />;
    case 'shield':
      return <Shield className={className} />;
    default:
      return <Scroll className={className} />;
  }
};
