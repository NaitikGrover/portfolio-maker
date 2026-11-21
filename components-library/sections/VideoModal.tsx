import React from 'react';
import { X, Film } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title = 'Project Preview',
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 transition-all duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800">
          <span className="text-white font-semibold text-sm flex items-center gap-2">
            <Film className="w-4 h-4 text-brand-400" />
            <span>{title}</span>
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="aspect-video w-full bg-black">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
