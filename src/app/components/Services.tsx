import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Scissors, Sparkles, Droplet, Heart, Palette, Star } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Facial Treatments",
    description: "Rejuvenate your skin with our premium facial treatments designed to enhance your natural glow.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGZhY2lhbCUyMHRyZWF0bWVudHxlbnwxfHx8fDE3Njg4NDM2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "From $80",
  },
  {
    id: 2,
    title: "Hair Styling",
    description: "Expert hair styling and coloring services to bring out your unique style and personality.",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1702236240794-58dc4c6895e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhhaXIlMjBzYWxvbnxlbnwxfHx8fDE3Njg4MjkyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "From $100",
  },
  {
    id: 3,
    title: "Skincare Spa",
    description: "Luxurious skincare treatments that nourish and revitalize your skin from within.",
    icon: Droplet,
    image: "https://images.unsplash.com/photo-1700760933574-9f0f4ea9aa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHRyZWF0bWVudCUyMHNwYXxlbnwxfHx8fDE3Njg4NDM2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "From $120",
  },
  {
    id: 4,
    title: "Makeup Artistry",
    description: "Professional makeup services for any occasion, enhancing your natural beauty with elegance.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1698181842119-a5283dea1440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBiZWF1dHl8ZW58MXx8fHwxNzY4ODE2MjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "From $90",
  },
  {
    id: 5,
    title: "Nail Care",
    description: "Premium manicure and pedicure services with the latest trends in nail art and design.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1737214475335-8ed64d91f473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwbWFuaWN1cmV8ZW58MXx8fHwxNzY4ODQzNjQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "From $50",
  },
  {
    id: 6,
    title: "Hair Coloring",
    description: "Transform your look with our expert hair coloring techniques and premium products.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1712213396688-c6f2d536671f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY29sb3JpbmclMjBzYWxvbnxlbnwxfHx8fDE3Njg3NTEyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    price: "From $150",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8E7C9] rounded-full mb-4">
            <Star className="w-4 h-4 text-[#F5A623]" />
            <span className="text-sm text-black">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            The Embodiment of <span className="text-[#F5A623]">Ideal Beauty</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our beauty salon services immerse you in an atmosphere of luxury and comfort, where every detail is carefully thought out for your comfort.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-[#F5A623]" />
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 left-4 bg-[#F5A623] text-white px-4 py-2 rounded-full">
                      {service.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <button
                      onClick={() => {
                        document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-[#F5A623] font-medium hover:underline inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Book Now
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
