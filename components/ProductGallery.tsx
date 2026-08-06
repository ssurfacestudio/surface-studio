"use client";

import { useState, useRef, MouseEvent } from "react";
import { ZoomIn } from "lucide-react";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [zooming, setZooming] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

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
        className="relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-lg bg-charcoal/5 dark:bg-ivory/5"
        onMouseEnter={() => setZooming(true)}
        onMouseLeave={() => setZooming(false)}
        onMouseMove={handleMouseMove}
      >
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
        {!zooming && (
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
      </div>
    </div>
  );
}
