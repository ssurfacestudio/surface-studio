"use client";

import { useState, useRef, MouseEvent } from "react";
import { ZoomIn, Play } from "lucide-react";

export default function ProductGallery({
  images,
  video,
  name,
}: {
  images: string[];
  video?: string;
  name: string;
}) {
  const items = video ? [...images, video] : images;
  const [active, setActive] = useState(0);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [zooming, setZooming] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const isVideoActive = video && active === items.length - 1;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  }

  return (
    <div>
      <div
        ref={frameRef}
        className={`relative aspect-square w-full overflow-hidden rounded-lg bg-charcoal/5 dark:bg-ivory/5 ${
          isVideoActive ? "" : "cursor-zoom-in"
        }`}
        onMouseEnter={() => !isVideoActive && setZooming(true)}
        onMouseLeave={() => setZooming(false)}
        onMouseMove={!isVideoActive ? handleMouseMove : undefined}
      >
        {isVideoActive ? (
          <video
            src={video}
            controls
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={images[active]}
            alt={`${name} — view ${active + 1}`}
            className="h-full w-full object-cover transition-transform duration-200"
            style={
              zooming
                ? {
                    transform: "scale(2)",
                    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  }
                : undefined
            }
          />
        )}
        {!zooming && !isVideoActive && (
          <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-charcoal/60 px-3 py-1.5 font-body text-[11px] uppercase tracking-[0.1em] text-white backdrop-blur-sm">
            <ZoomIn className="h-3.5 w-3.5" /> Hover to zoom
          </span>
        )}
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={img + i}
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
            className={`aspect-square overflow-hidden rounded-md border-2 transition-colors ${
              active === i ? "border-gold" : "border-transparent"
            }`}
          >
            <img src={img} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
        {video && (
          <button
            onClick={() => setActive(images.length)}
            aria-label="Show video"
            className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-md border-2 bg-charcoal/10 transition-colors dark:bg-ivory/10 ${
              active === images.length ? "border-gold" : "border-transparent"
            }`}
          >
            <Play className="h-6 w-6 text-charcoal dark:text-ivory" strokeWidth={1.5} />
          </button>
        )}
      </div>
    </div>
  );
}