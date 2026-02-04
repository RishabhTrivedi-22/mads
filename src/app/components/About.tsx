import { motion } from "motion/react";
import { Heart, Award, Users, Sparkles } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Heart, value: "98%", label: "Satisfaction Rate" },
  { icon: Sparkles, value: "50+", label: "Expert Staff" },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-[#F8E7C9]/20 to-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8E7C9] rounded-full">
              <Heart className="w-4 h-4 text-[#F5A623]" />
              <span className="text-sm text-black">About MAD's</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Where <span className="text-[#F5A623]">Natural Beauty</span> Meets Elegance
            </h2>

            <p className="text-lg text-gray-600">
              MAD's is a premium beauty salon dedicated to enhancing your natural radiance through high-quality skin and haircare treatments. We believe in the power of self-care and the importance of feeling confident in your own skin.
            </p>

            <p className="text-lg text-gray-600">
              Our team of expert professionals uses only the finest products and latest techniques to deliver exceptional results. Every service is tailored to your unique needs, ensuring a personalized experience that celebrates your individual beauty.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#F5A623] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Natural Beauty Enhancement</h4>
                  <p className="text-gray-600">We focus on bringing out your natural radiance, not hiding it.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#F5A623] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Premium Products & Techniques</h4>
                  <p className="text-gray-600">Only the finest quality products and cutting-edge methods.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#F5A623] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Personalized Care</h4>
                  <p className="text-gray-600">Tailored treatments designed specifically for your needs.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
                >
                  <div className="w-16 h-16 bg-[#F8E7C9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#F5A623]" />
                  </div>
                  <div className="text-4xl font-bold text-black mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
