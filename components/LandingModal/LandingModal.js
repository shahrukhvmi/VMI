"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
export default function LandingModal({ open, onClose, children }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center px-4"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative w-full max-w-2xl rounded-[32px] modal-bg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center
      rounded-full border border-white/30 bg-black/40 text-white/80 hover:bg-white/10"
              >
                <FiX size={20} />
              </button>

              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
