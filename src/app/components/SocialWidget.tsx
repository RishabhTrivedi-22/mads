import { motion } from "motion/react";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function SocialWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <div className="bg-[#F5A623] rounded-2xl p-4 shadow-xl">
        <div className="text-white text-xs mb-3 text-center font-medium">
          We are in social<br />networks
        </div>
        <div className="flex gap-2">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <Instagram className="w-5 h-5 text-[#F5A623]" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <Facebook className="w-5 h-5 text-[#F5A623]" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-[#F5A623]" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
