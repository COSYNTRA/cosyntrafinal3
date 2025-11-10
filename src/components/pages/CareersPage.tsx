import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  X,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

interface CareersPageProps {
  onNavigate: (page: string) => void;
}

interface JobPosition {
  Title: string;
  Department: string;
  Location: string;
  Type: string;
  Experience: string;
  Description: string;
  Requirements: string[];
}

export function CareersPage({ onNavigate }: CareersPageProps) {
  const [positions, setPositions] = useState<JobPosition[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // ---------- Auto-fetch job positions ----------
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(
          'https://script.google.com/macros/s/AKfycbx7EMVPCcN7pYMehKLWSUXc5-ZgtlpmS3G3TG22ZdKB6O8w9QoH_gd9Pc4DOH6VRGsH/exec?t=' +
            Date.now(),
          { cache: 'no-store' }
        );
        const data = await res.json();
        setPositions(data);
      } catch (err) {
        console.error('Error fetching jobs:', err);
      } finally {
        setLoadingJobs(false);
      }
    };

    fetchJobs();
    const interval = setInterval(fetchJobs, 10000);
    return () => clearInterval(interval);
  }, []);

  // ---------- Benefits ----------
  const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive medical coverage' },
    { icon: '🏖️', title: 'Flexible Time Off', description: 'Generous vacation and leave policy' },
    { icon: '🏠', title: 'Remote Work', description: 'Flexible work-from-home options' },
    { icon: '📚', title: 'Learning Budget', description: 'Annual allowance for courses and conferences' },
    { icon: '🚀', title: 'Career Growth', description: 'Clear paths for advancement' },
    { icon: '🎮', title: 'Fun Culture', description: 'Team events and activities' },
    { icon: '💻', title: 'Latest Tech', description: 'Work with cutting-edge tools' },
  ];

  // ---------- Handle Form Submit ----------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setSubmitted(false);

    const formData = new FormData(formRef.current);
    const file = formData.get('cv') as File;

    if (!file) {
      alert('Please upload your CV.');
      setLoading(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      const payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        jobTitle: selectedJob,
        cv: reader.result,
        cvName: file.name,
        cvType: file.type,
      };

      try {
        await fetch(
          'https://script.google.com/macros/s/AKfycbyefRZ07ydnlJc0ef_FmUZ977BZ7zyNxLuRJsgDYqhE9s8OvcTEcyB8FLOtk4-1uaf8/exec',
          {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          }
        );

        setSubmitted(true);
        formRef.current?.reset();
      } catch (err) {
        console.error('Error submitting form:', err);
        alert('Network error. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen relative">
      {/* ---------- HERO ---------- */}
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
            <h1 className="text-4xl lg:text-6xl text-white mb-6">Grow with COSYNTRA</h1>
            <p className="text-xl text-blue-100 mb-8">
              Join our team of innovators building the future of technology
            </p>
            <Button
              onClick={() =>
                document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-white text-[#2563EB] hover:bg-blue-50 cursor-pointer"
            >
              View Open Positions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ---------- WHY JOIN ---------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-[#1F2937] mb-4">Why Join COSYNTRA?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job — we offer a career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2563EB]/20 h-full relative overflow-hidden group">
                  <div className="relative z-10">
                    <motion.div
                      className="text-4xl mb-4 inline-block"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      {b.icon}
                    </motion.div>
                    <h3 className="text-lg text-[#1F2937] mb-2">{b.title}</h3>
                    <p className="text-sm text-gray-600">{b.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- OPEN POSITIONS ---------- */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-[#1F2937] mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your next career opportunity
            </p>
          </motion.div>

          {loadingJobs ? (
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#2563EB]" />
          ) : positions.length === 0 ? (
            <p className="text-gray-600 text-center">No open positions right now.</p>
          ) : (
            <div className="max-w-5xl mx-auto space-y-6">
              {positions.map((p, i) => (
                <Card
                  key={i}
                  className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2563EB]/20"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h3 className="text-2xl text-[#1F2937]">{p.Title}</h3>
                        <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm">
                          {p.Department}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {p.Location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {p.Type}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {p.Experience}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{p.Description}</p>
                      {p.Requirements && (
                        <>
                          <h4 className="text-sm text-[#1F2937] mb-2">Key Requirements:</h4>
                          <ul className="space-y-1">
                            {p.Requirements.map((r, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5"></div>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col gap-3 lg:min-w-[160px]">
                      <Button
                        className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] w-full cursor-pointer"
                        onClick={() => {
                          setSelectedJob(p.Title);
                          setShowForm(true);
                          setSubmitted(false);
                        }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------- APPLICATION FORM MODAL ---------- */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowForm(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl font-semibold mb-6 text-[#1F2937] text-center">
                  Apply for {selectedJob}
                </h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="jobTitle" value={selectedJob || ''} />
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2563EB] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2563EB] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      required
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2563EB] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Upload CV</label>
                    <input
                      type="file"
                      name="cv"
                      required
                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2563EB] outline-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] text-white py-2 flex justify-center items-center cursor-pointer"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </Button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold text-[#1F2937] mb-2">
                  Application Sent!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for applying. Our team will reach out soon.
                </p>
                <Button
                  onClick={() => setShowForm(false)}
                  className="bg-[#2563EB] text-white px-6"
                >
                  Close
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
