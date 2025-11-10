import { motion } from 'motion/react';
import { Code, Smartphone, Brain, Cloud, Radio, CheckCircle, ArrowRight, Tag } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'End-to-end custom software solutions tailored to your unique business requirements.',
      gradient: 'from-[#2563EB] to-[#1E3A8A]',
      problems: [
        'Off-the-shelf software doesn\'t fit your needs',
        'Legacy systems holding back growth',
        'Need for scalable, future-proof solutions',
      ],
      solutions: [
        'Custom-built applications from scratch',
        'System modernization and migration',
        'Scalable architecture design',
        'Ongoing maintenance and support',
      ],
      techStack: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Apps',
      description: 'Beautiful, responsive applications that deliver exceptional user experiences across all platforms.',
      gradient: 'from-[#06B6D4] to-[#2563EB]',
      problems: [
        'Poor user engagement on digital platforms',
        'Inconsistent experience across devices',
        'Need for native mobile performance',
      ],
      solutions: [
        'Progressive Web Applications (PWA)',
        'Native iOS and Android development',
        'Cross-platform React Native apps',
        'Responsive web design',
      ],
      techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Vue.js'],
    },
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Intelligent systems that leverage machine learning to drive insights and automation.',
      gradient: 'from-[#F97316] to-[#2563EB]',
      problems: [
        'Manual processes consuming resources',
        'Unable to extract insights from data',
        'Need for predictive analytics',
      ],
      solutions: [
        'Predictive analytics and forecasting',
        'Natural Language Processing (NLP)',
        'Computer vision applications',
        'Recommendation systems',
      ],
      techStack: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI', 'Hugging Face'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated workflows for optimal performance.',
      gradient: 'from-[#2563EB] to-[#06B6D4]',
      problems: [
        'High infrastructure costs',
        'Slow deployment cycles',
        'Scalability challenges',
      ],
      solutions: [
        'Cloud migration (AWS, Azure, GCP)',
        'CI/CD pipeline implementation',
        'Infrastructure as Code (IaC)',
        'Container orchestration',
      ],
      techStack: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
    },
    {
      icon: Radio,
      title: 'IoT Integration',
      description: 'Connect devices and systems to create intelligent, data-driven ecosystems.',
      gradient: 'from-[#1E3A8A] to-[#F97316]',
      problems: [
        'Disconnected devices and systems',
        'Lack of real-time monitoring',
        'Inefficient resource utilization',
      ],
      solutions: [
        'IoT device integration',
        'Real-time data streaming',
        'Edge computing solutions',
        'Predictive maintenance systems',
      ],
      techStack: ['MQTT', 'Azure IoT', 'AWS IoT', 'LoRaWAN', 'Raspberry Pi'],
    },
    {
      icon: Tag,
      title: 'Annotation Services',
      description:
        'Accurate and scalable data annotation solutions empowering AI and machine learning models with high-quality labeled datasets.',
      gradient: 'from-[#1E3A8A] to-[#F97316]',
      problems: [
        'Inconsistent data labeling reducing model accuracy',
        'Limited scalability for large datasets',
        'Manual processes causing delays and errors',
      ],
      solutions: [
        'Expert human and AI-assisted annotation',
        'Multi-format data labeling (image, text, audio, video)',
        'Quality assurance and validation pipelines',
        'Scalable and secure data management workflow',
      ],
      techStack: ['Label Studio', 'SuperAnnotate', 'CVAT', 'Python', 'AWS SageMaker Ground Truth'],
    },




  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100">
              Comprehensive technology solutions designed to transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="overflow-hidden border-2 border-gray-100 hover:border-[#2563EB]/20 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl text-[#1F2937] mb-3">{service.title}</h2>
                        <p className="text-lg text-gray-600">{service.description}</p>
                      </div>

                      <div>
                        <h3 className="text-xl text-[#1F2937] mb-3">Problems We Solve</h3>
                        <ul className="space-y-2">
                          {service.problems.map((problem, i) => (
                            <li key={i} className="flex items-start space-x-3">
                              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              </div>
                              <span className="text-gray-600">{problem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl text-[#1F2937] mb-3">Our Solution</h3>
                        <ul className="space-y-2">
                          {service.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl text-[#1F2937] mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-lg"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          onClick={() => onNavigate('contact')}
                          className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] cursor-pointer"
                        >
                          Start Your Project
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-3xl p-12 lg:p-16 text-center"
          >
            <h2 className="text-3xl lg:text-5xl text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-white text-[#2563EB] hover:bg-blue-50 cursor-pointer"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => onNavigate('portfolio')}
                variant="outline"
                className="border-2 border-white text-black hover:bg-white/10 cursor-pointer"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
