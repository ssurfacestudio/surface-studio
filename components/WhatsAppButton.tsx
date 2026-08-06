"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/utils";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink("Hello Surface Studio, I'd like to enquire about a piece.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 md:bottom-8 md:right-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <MessageCircle className="relative z-10 h-7 w-7" strokeWidth={1.75} />
    </motion.a>
  );
}
