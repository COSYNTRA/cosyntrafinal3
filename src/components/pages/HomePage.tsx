import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  Code,
  Smartphone,
  Brain,
  Cloud,
  Radio,
  CheckCircle,
  Star,
  ChevronDown,
  Edit3,
  FileText,
  Tag,
  Pointer,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useRef, useState, useEffect } from "react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

// Animated Counter Component
function AnimatedCounter({
  value,
  duration = 2,
}: {
  value: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    if (isInView && numValue) {
      let start = 0;
      const increment = numValue / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= numValue) {
          setCount(numValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, numValue, duration]);

  return (
    <span ref={ref}>
      {count}
      {value.includes("+") ? "+" : ""}
      {value.includes("%") ? "%" : ""}
    </span>
  );
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored solutions built with cutting-edge technologies to meet your unique business needs.",
      gradient: "from-[#2563EB] to-[#1E3A8A]",
    },
    {
      icon: Smartphone,
      title: "Web & Mobile Apps",
      description:
        "Responsive, intuitive applications that deliver exceptional user experiences across all devices.",
      gradient: "from-[#06B6D4] to-[#2563EB]",
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description:
        "Intelligent systems that learn, adapt, and drive data-driven decision making for your business.",
      gradient: "from-[#F97316] to-[#2563EB]",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "Scalable infrastructure and automated workflows for seamless deployment and operations.",
      gradient: "from-[#2563EB] to-[#06B6D4]",
    },
    {
      icon: Radio,
      title: "IoT Integration",
      description:
        "Connect your devices and systems to create smart, interconnected ecosystems.",
      gradient: "from-[#1E3A8A] to-[#F97316]",
    },
    {
      icon: Tag, // you can use another icon like "Edit3" or "FileText" from lucide-react if you prefer
      title: "Annotation Services",
      description:
        "High-quality data annotation for AI and machine learning, ensuring accuracy and efficiency across image, text, and video datasets.",
      gradient: "from-[#1E3A8A] to-[#F97316]",
    },

  ];

  const projects = [
    {
      title: "HealthCare Platform",
      description:
        "AI-powered patient management system serving 50,000+ users",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&q=80&w=1080",
      tags: ["AI/ML", "Healthcare", "Cloud"],
    },
    {
      title: "E-Commerce Solution",
      description: "Scalable platform processing 10M+ transactions monthly",
      image:
        "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?auto=format&q=80&w=1080",
      tags: ["Web", "Mobile", "Payment"],
    },
    {
      title: "Smart City IoT",
      description: "Integrated IoT ecosystem for urban infrastructure",
      image:
        "/IOTTh.jpg",
      tags: ["IoT", "Cloud", "Analytics"],
    },
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "CTO, TechVentures",
      image: "/david_kim.webp",
      quote:
        "COSYNTRA transformed our vision into reality. Their technical expertise and commitment to excellence is unmatched.",
    },
    {
      name: "Olivia Chen",
      role: "Founder, HealthFirst",
      image: "/Olivia_Chen.webp",
      quote:
        "Working with COSYNTRA was seamless. They delivered a robust, scalable solution that exceeded our expectations.",
    },
    {
      name: "Michel Rud",
      role: "Project Manager, Volcano",
      image: "/Michel Rud.webp",
      quote:
        "Partnering with COSYNTRA was an excellent experience. Their team was professional, responsive, and delivered high-quality work.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ✅ Hero Section */}
      {/* ✅ Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#F9FAFB] via-white to-[#F9FAFB]">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
          
        >
          <source src="/herovid.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-0"></div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#2563EB]/10 rounded-full"
            >
              {/* <span className="text-[#2563EB] text-sm font-semibold">
                🚀 Innovating the Future
              </span> */}
              <span className="text-sm font-bold text-white drop-shadow-[0_0_10px_rgba(37,99,235,0.6)]">
                🚀 Innovating the Future
              </span>

            </motion.div>

            {/* Title */}
            <h1 className="text-4xl lg:text-6xl leading-tight font-black text-white drop-shadow-lg">

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block text-5xl lg:text-7xl font-black leading-tight text-white 
             drop-shadow-[0_5px_25px_rgba(0,0,0,0.6)] tracking-tight
             [text-shadow:2px_2px_10px_rgba(255,255,255,0.25),0_0_25px_rgba(255,255,255,0.3)]"

              >
                Empowering Digital Growth Through{" "}
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent inline-block font-extrabold drop-shadow-md"


              >
                Smart Technology
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-2xl lg:text-3xl text-white font-semibold leading-relaxed drop-shadow-lg"
            >
              COSYNTRA builds <span className="font-extrabold">intelligent</span>,{" "}
              <span className="font-extrabold">scalable software solutions</span> that drive
              business transformation and accelerate your digital journey.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => onNavigate("contact")}
                className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] hover:shadow-xl hover:shadow-[#2563EB]/30 transition-all duration-300 group font-semibold cursor-pointer"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => onNavigate("services")}
                variant="outline"
                className="border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/5 font-semibold cursor-pointer"
              >
                Explore Services
              </Button>
            </motion.div>

            {/* Counters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-8 pt-4"
            >
              {[
                { val: "50+", label: "Projects Delivered" },
                { val: "30+", label: "Happy Clients" },
                { val: "99%", label: "Success Rate" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-3xl text-[#2563EB] font-bold">
                    <AnimatedCounter value={item.val} />
                  </div>
                  <div className="text-sm text-white font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-800"
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ✅ Continue with Services, About, Projects, Testimonials, CTA (same structure) */}
      {/* Your sections below remain same — you can copy them directly here */}


      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-[#1F2937] mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2563EB]/20 group relative overflow-hidden">
                  {/* Animated background gradient on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl text-[#1F2937] mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <motion.button
                      onClick={() => onNavigate('services')}
                      className="text-[#2563EB] hover:underline flex items-center cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1"/>
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MDUzMDc5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="COSYNTRA Office"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-[#2563EB]/10 rounded-full">
                <span className="text-[#2563EB] text-sm">About COSYNTRA</span>
              </div>
              <h2 className="text-3xl lg:text-4xl text-[#1F2937]">
                Building Tomorrow's Solutions Today
              </h2>
              <p className="text-gray-600 text-lg">
                We are a passionate team of innovators, engineers, and designers committed to delivering cutting-edge technology solutions that transform businesses.
              </p>
              <ul className="space-y-3">
                {[
                  'Expert team with 10+ years of experience',
                  'Agile methodology for faster delivery',
                  'End-to-end development and support',
                  'Focus on scalability and security',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#2563EB]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => onNavigate('about')}
                className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] cursor-pointer"
              >
                Read About COSYNTRA
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-[#1F2937] mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing our commitment to excellence and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-[#1F2937] mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => onNavigate('portfolio')}
                      className="text-[#2563EB] hover:underline flex items-center cursor-pointer"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-white mb-4">What Our Clients Say</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Trusted by leading companies across industries
            </p>
          </motion.div>

          {/* 👇 Changed grid layout to 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#F97316] text-[#F97316]" />
                      ))}
                    </div>
                    <p className="text-white mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-blue-200 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how COSYNTRA can help you achieve your digital goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => onNavigate('contact')}
                  className="bg-white border-2 border-white text-black hover:bg-white/10 cursor-pointer"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  onClick={() => onNavigate('portfolio')}
                  variant="outline"
                  className="border-2 border-white text-black hover:bg-white/10 cursor-pointer"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
