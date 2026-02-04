import { motion } from "motion/react";
import { Gift } from "lucide-react";

export function PromoBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-6 left-6 z-40 hidden md:block"
    >
      <div className="bg-[#F5A623] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
        <Gift className="w-5 h-5" />
        <div>
          <div className="text-xs opacity-90">Get 20% off your first visit</div>
          <div className="text-sm font-semibold">Code: FIRST20</div>
        </div>
      </div>
    </motion.div>
  );
}
