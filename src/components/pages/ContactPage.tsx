import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = "service_wwh3nvm";
    const templateId = "template_gq1697o";
    const publicKey = "hgNYXOz9KeYR6mcBx"; // replace with your public key

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log('✅ SUCCESS!', response.status, response.text);
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              message: '',
            });
          }, 3000);
        },
        (error) => {
          console.error('❌ FAILED...', error);
          alert('Something went wrong. Please try again later.');
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'info@cosyntra.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+91 80171 50467',
      subdetal: 'Mon-Fri 9AM-6PM IST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'Barrackpore, Phase 2, West Bengal - Kol 700121 , India',
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
              Let's Build Something Exceptional Together
            </h1>
            <p className="text-xl text-blue-100">
              Have a project in mind? Get in touch and let's make it happen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2563EB]/20">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] flex items-center justify-center mx-auto mb-6">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl text-[#1F2937] mb-3">{info.title}</h3>
                  <p className="text-[#2563EB] mb-1">{info.detail}</p>
                  <p className="text-sm text-gray-500">{info.subdetal}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-2 border-gray-100">
                <h2 className="text-3xl text-[#1F2937] mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl text-[#1F2937] mb-3">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {['name','email','phone','company','message'].map((field, i) => {
                      const isTextarea = field === 'message';
                      const label = field.charAt(0).toUpperCase() + field.slice(1) + (field==='name'||field==='email'||field==='message'?' *':'');
                      return (
                        <motion.div
                          key={field}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i*0.1 }}
                        >
                          <label htmlFor={field} className="block mb-2 text-[#1F2937]">{label}</label>
                          {isTextarea ? (
                            <Textarea
                              id={field}
                              name={field}
                              value={(formData as any)[field]}
                              onChange={handleChange}
                              required
                              placeholder="Tell us about your project..."
                              rows={6}
                              className="w-full"
                            />
                          ) : (
                            <Input
                              id={field}
                              name={field}
                              type={field==='email'?'email':field==='phone'?'tel':'text'}
                              value={(formData as any)[field]}
                              onChange={handleChange}
                              required={field==='name'||field==='email'||field==='message'}
                              placeholder={field==='name'?'Your full name':field==='email'?'your.email@example.com':field==='phone'?'+91 98765 43210':'Your company name'}
                              className="w-full"
                            />
                          )}
                        </motion.div>
                      )
                    })}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] hover:shadow-lg hover:shadow-[#2563EB]/30 transition-all duration-300 group cursor-pointer"
                      >
                        Send Message
                        <motion.div
                          className="inline-block ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Send className="w-4 h-4" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="overflow-hidden h-80 border-2 border-gray-100">
                <iframe
                  src="https://www.google.com/maps?q=Barrackpore%20Phase%20II,%20Kolkata%20700121,%20India&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="COSYNTRA Location"
                ></iframe>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-[#F9FAFB] to-white border-2 border-gray-100">
                <h3 className="text-2xl text-[#1F2937] mb-6">Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-[#2563EB]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-[#2563EB]">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-[#1F2937] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { question: 'What is your typical project timeline?', answer: 'Project timelines vary based on scope, but typically range from 2-6 months for most applications.' },
              { question: 'Do you offer maintenance and support?', answer: 'Yes, we provide ongoing maintenance, support, and enhancement services for all our projects.' },
              { question: 'What industries do you serve?', answer: 'We work across healthcare, education, fintech, retail, manufacturing, and more.' },
              { question: 'How do you charge for projects?', answer: 'We offer flexible pricing models including fixed-price, time & material, and dedicated teams.' },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg text-[#1F2937] mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

