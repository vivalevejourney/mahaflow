"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [firstLoaded, setFirstLoaded] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Load first image immediately, rest lazily
  useEffect(() => {
    if (images.length === 0) return;

    // Load first image with high priority
    const firstImg = new Image();
    firstImg.src = images[0];
    (firstImg as any).fetchPriority = "high";
    firstImg.onload = () => {
      setLoadedImages([images[0]]);
      setFirstLoaded(true);
    };
    firstImg.onerror = () => {
      setFirstLoaded(true);
    };

    // Lazy load remaining images after first is ready
    if (images.length > 1) {
      const loadRest = () => {
        const remaining = images.slice(1);
        const loadPromises = remaining.map((image) => {
          return new Promise<string>((resolve, reject) => {
            const img = new Image();
            img.src = image;
            img.onload = () => resolve(image);
            img.onerror = reject;
          });
        });

        Promise.all(loadPromises)
          .then((loaded) => {
            setLoadedImages([images[0], ...loaded]);
          })
          .catch((error) => console.error("Failed to load images", error));
      };

      // Delay loading rest until first image is shown
      const timer = setTimeout(loadRest, 100);
      return () => clearTimeout(timer);
    }
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: ReturnType<typeof setInterval> | undefined;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious]);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0] as const,
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {firstLoaded && children}
      {firstLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}

      {firstLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex] || images[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
            alt="Hero background"
          />
        </AnimatePresence>
      )}
    </div>
  );
};
