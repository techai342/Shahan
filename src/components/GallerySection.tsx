import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Image as ImageIcon } from 'lucide-react';

interface GallerySectionProps {
  images: string[];
}

export default function GallerySection({ images }: GallerySectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-4">
            Visual Gallery
          </h2>
          <p className="text-blue-200/70 max-w-lg mx-auto">
            Click the folder below to explore my collection of visual assets and creative works.
          </p>
        </motion.div>

        {/* Clickable 3D Folder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -10 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer group"
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-colors duration-500"></div>
          <motion.img 
            src="https://ik.imagekit.io/19imy4f1u/lite_1775631331974_J6dMWTqQc.webp" 
            alt="3D Folder Gallery"
            className="w-48 sm:w-64 md:w-80 h-auto drop-shadow-[0_0_40px_rgba(59,130,246,0.4)] animate-[float_6s_ease-in-out_infinite] relative z-10"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-900/80 border border-blue-500/50 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 whitespace-nowrap z-20">
            <ImageIcon className="w-4 h-4" />
            Open Gallery
          </div>
        </motion.div>
      </div>

      {/* Gallery Modal */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-[#020617]/90 backdrop-blur-xl"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-6xl max-h-[90vh] flex flex-col glass-panel rounded-2xl sm:rounded-[2rem] border border-blue-500/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden bg-[#0a1930]/95"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-blue-500/20 bg-black/20">
                  <div className="flex items-center gap-3">
                    <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    <h3 className="text-lg sm:text-xl font-medium text-white">Image Gallery</h3>
                    <span className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-500/30">
                      {images.length} items
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-800/50 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Content - Image Grid */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
                  <div className="columns-2 sm:columns-3 md:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                    {images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="relative rounded-xl overflow-hidden group border border-blue-500/20 bg-black/40 break-inside-avoid"
                      >
                        <img 
                          src={img} 
                          alt={`Gallery item ${idx + 1}`} 
                          className="w-full h-auto block transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                          <span className="text-white text-xs font-medium truncate">Image {idx + 1}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
