"use client";

import { useEffect } from "react";

export default function ProtectContent() {
  useEffect(() => {
    const disableMediaRightClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG" || target.tagName === "VIDEO") {
        e.preventDefault();
      }
    };
    const disableDrag = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG" || target.tagName === "VIDEO") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableMediaRightClick);
    document.addEventListener("dragstart", disableDrag);

    return () => {
      document.removeEventListener("contextmenu", disableMediaRightClick);
      document.removeEventListener("dragstart", disableDrag);
    };
  }, []);

  return null;
}