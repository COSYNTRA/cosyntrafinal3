import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#2563EB] text-white">
        {/* Main Footer */}
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Company Info */}
            <div className="space-y-4">
              <img
                src="/CosyntraNewLogo.png"
                alt="COSYNTRA Logo"
                className="h-20 md:h-28 object-contain transition-transform duration-500 ease-in-out hover:scale-110 drop-shadow-[0_6px_16px_rgba(37,99,235,0.35)]"
              />
              <p className="text-blue-100 text-sm">
                Empowering Digital Growth Through Smart Technology
              </p>
              <div className="flex space-x-3">
                <a href="https://www.linkedin.com/company/106687070" target="_blank" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://x.com/cosyntra" target="_blank" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61577042406771" target="_blank" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/cosyntra/" target="_blank" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['home', 'about', 'services', 'portfolio', 'careers', 'contact'].map((page) => (
                  <li key={page}>
                    <button
                      onClick={() => onNavigate(page)}
                      className="text-blue-100 hover:text-white transition-colors capitalize cursor-pointer"
                    >
                      {page}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>Custom Software Development</li>
                <li>Web & Mobile Apps</li>
                <li>AI/ML Solutions</li>
                <li>Cloud & DevOps</li>
                <li>IoT Integration</li>
              </ul>
            </div>

            {/* Recognition Logos */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl shadow-blue-900/20">
              <h4 className="text-white text-center mb-6 font-semibold text-lg">Recognized On</h4>
              <div className="flex flex-col items-center space-y-6">
                <a
                  href="https://clutch.co/profile/cosyntra-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full"
                >
                  <div className="bg-white rounded-xl p-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center h-20">
                    <img
                      src="/clutch.png"
                      alt="Clutch"
                      className="h-10 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110"
                    />
                  </div>
                </a>

                <a
                  href="https://www.upwork.com/agencies/1946170529518547950/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full"
                >
                  <div className="bg-white rounded-xl p-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center h-20">
                    <img
                      src="/Upwork.png"
                      alt="Upwork"
                      className="h-10 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-blue-100">Email</p>
                <p className="text-sm">info@cosyntra.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-blue-100">Phone</p>
                <p className="text-sm">+91 80171 50467</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-blue-100">Location</p>
                <p className="text-sm">Barrackpore, Phase 2 <br />West Bengal, Kol 700121 <br />India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100 text-center md:text-left">
              <div>
                <p>© 2025 COSYNTRA. All rights reserved.</p>
                <p className="text-xs mt-1 font-semibold text-white tracking-wide">
                  CIN: <span className="font-bold text-blue-200">U62099WB2025PTC283851</span>
                </p>
              </div>
              <div className="flex gap-6">
                <button onClick={() => setShowPrivacy(true)} className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </button>
                <button onClick={() => setShowTerms(true)} className="hover:text-white transition-colors cursor-pointer">
                  Terms & Conditions
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scrollbar + Modals (unchanged below) */}
      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 8px; }
        .custom-scroll::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #2563EB; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #1E40AF; }
      `}</style>

      {/* === Privacy & Terms modals remain unchanged === */}
      {/* (You can keep the modal code you already have) */}


      {/* ======== MODAL BASE STYLES ======== */}
        {/* <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #2563EB;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: #1E40AF;
        }
      `}</style> */}

      {/* ===== PRIVACY POLICY MODAL ===== */}
      {/* <AnimatePresence>
        {showPrivacy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 relative custom-scroll"
            >
              <button
                onClick={() => setShowPrivacy(false)}
                className="sticky top-2 float-right text-gray-600 hover:text-black"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold mb-6 text-center">Privacy & Policies</h2>

              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p><strong>Effective Date:</strong> 1st January, 2021</p>
                <p><strong>1. Information We Collect:</strong> Personal, Technical, and Project information.</p>
                <p><strong>2. How We Use Your Information:</strong> Deliver services, improve UX, send invoices, and ensure legal compliance.</p>
                <p><strong>3. Data Sharing:</strong> Shared only with trusted vendors, legal authorities, or cloud providers.</p>
                <p><strong>4. Cookies:</strong> Used to analyze and personalize your web experience.</p>
                <p><strong>5. Data Security:</strong> Encryption, firewalls, and restricted access for protection.</p>
                <p><strong>6. Your Rights:</strong> Access, correct, delete, or withdraw consent anytime by emailing info.cosyntra@gmail.com.</p>
                <p><strong>7. Third-Party Links:</strong> We are not responsible for external sites.</p>
                <p><strong>8. Policy Updates:</strong> Updated periodically with revised effective dates.</p>
                <p><strong>9. Contact Us:</strong> info.cosyntra@gmail.com | www.cosyntra.com</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
      <AnimatePresence>
         {showPrivacy && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="
          bg-white rounded-2xl shadow-2xl
          w-full max-w-3xl
          max-h-[90vh]
          relative
          flex flex-col
        "
      >
        {/* Close Button */}
        <button
          onClick={() => setShowPrivacy(false)}
          className="
            absolute top-3 right-3 
            text-gray-700 hover:text-black
            z-[10000]
          "
        >
          <X className="w-6 h-6" />
        </button>

        {/* HEADER (no underline) */}
        <div className="p-5">
          <h2 className="text-xl font-bold text-center">Privacy Policy</h2>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div
          className="
            overflow-y-auto 
            px-5 py-4 
            text-gray-700 
            text-sm 
            leading-relaxed
            custom-scroll
            max-h-[70vh]
          "
        >
          <p><strong>Effective Date:</strong> 1st January, 2021</p>
          <p><strong>Website:</strong> www.cosyntra.com</p>
          <p><strong>Company:</strong> COSYNTRA</p>

          <p><strong>1. Information We Collect:</strong> We may collect personal, technical, and usage information when you use our website or services.</p>
          <p><strong>2. How We Use Information:</strong> To provide services, enhance user experience, communicate updates, and maintain security.</p>
          <p><strong>3. Cookies:</strong> We use cookies for analytics, performance, and personalized experiences.</p>
          <p><strong>4. Data Protection:</strong> We follow industry-standard security measures to protect stored and transmitted data.</p>
          <p><strong>5. Third-Party Sharing:</strong> Data may be shared with trusted vendors required for project execution, but never sold.</p>
          <p><strong>6. User Rights:</strong> You can request data access, correction, or deletion by contacting us.</p>
          <p><strong>7. External Links:</strong> We are not responsible for privacy practices of third-party websites.</p>
          <p><strong>8. Policy Updates:</strong> We may update the policy with prior notice.</p>
          <p><strong>9. Contact:</strong> info.cosyntra@gmail.com</p>
        </div>

        {/* FOOTER */}
        <div className="p-3 border-t text-right">
          <button
            onClick={() => setShowPrivacy(false)}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


      {/* ===== TERMS & CONDITIONS MODAL ===== */}
      {/* <AnimatePresence>
        {showTerms && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 relative custom-scroll"
            >
              <button
                onClick={() => setShowTerms(false)}
                className="sticky top-2 float-right text-gray-600 hover:text-black"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold mb-6 text-center">Terms & Conditions</h2>

              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p><strong>Effective Date:</strong> 1st January, 2021</p>
                <p><strong>Website:</strong> www.cosyntra.com</p>
                <p><strong>Company:</strong> COSYNTRA ("we", "us", or "our")</p>

                <p><strong>1. Services Offered:</strong> Website, App, Cloud, Cybersecurity, AI/ML, UI/UX & Software Solutions.</p>
                <p><strong>2. Project Engagement:</strong> Proposals shared post discussion, legal digital agreement post-approval.</p>
                <p><strong>3. Payment Terms:</strong> 40% upfront, 30% prototype, 30% final. Accepted: Bank, Razorpay, UPI, PayPal.</p>
                <p><strong>4. Client Responsibilities:</strong> Provide accurate info, feedback, and secure access credentials.</p>
                <p><strong>5. Intellectual Property:</strong> Ownership transfers after full payment; COSYNTRA may showcase projects.</p>
                <p><strong>6. Confidentiality:</strong> Both parties must maintain confidentiality.</p>
                <p><strong>7. Limitation of Liability:</strong> We're not liable for indirect damages, vendor/API delays, or misuse.</p>
                <p><strong>8. Warranty & Support:</strong> Defined in agreement; extra support billed separately.</p>
                <p><strong>9. Termination:</strong> Either party may terminate with notice. Completed work must be paid for.</p>
                <p><strong>10. Governing Law:</strong> Governed under Indian law. Jurisdiction — Barrackpore, West Bengal.</p>
                <p><strong>11. Amendments:</strong> Terms may be updated anytime with notice.</p>
                <p><strong>📩 Contact:</strong> info.cosyntra@gmail.com | www.cosyntra.com</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
      <AnimatePresence>
  {showTerms && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="
          bg-white rounded-2xl shadow-2xl
          w-full max-w-3xl
          max-h-[90vh]
          relative
          flex flex-col
        "
      >
        {/* Close Button - ALWAYS visible */}
        <button
          onClick={() => setShowTerms(false)}
          className="
            absolute top-3 right-3 
            text-gray-700 hover:text-black
            z-[10000]
          "
        >
          <X className="w-6 h-6" />
        </button>

        {/* HEADER - underline removed */}
        <div className="p-5">
          <h2 className="text-xl font-bold text-center">Terms & Conditions</h2>
        </div>

        {/* BODY - ONLY THIS PART SCROLLS */}
        <div className="
          overflow-y-auto 
          px-5 py-4 
          text-gray-700 
          text-sm 
          leading-relaxed
          custom-scroll
          max-h-[70vh]
        ">
          <p><strong>Effective Date:</strong> 1st January, 2021</p>
          <p><strong>Website:</strong> www.cosyntra.com</p>
          <p><strong>Company:</strong> COSYNTRA</p>

          <p><strong>1. Services Offered:</strong> Website, App, Cloud, Cybersecurity, AI/ML, UI/UX & Software Solutions.</p>
          <p><strong>2. Project Engagement:</strong> Proposals shared post discussion, legal digital agreement post-approval.</p>
          <p><strong>3. Payment Terms:</strong> 40% upfront, 30% prototype, 30% final.</p>
          <p><strong>4. Client Responsibilities:</strong> Provide accurate info, feedback & access.</p>
          <p><strong>5. Intellectual Property:</strong> Ownership after full payment.</p>
          <p><strong>6. Confidentiality:</strong> Both must maintain confidentiality.</p>
          <p><strong>7. Limitation of Liability:</strong> No liability for indirect damages.</p>
          <p><strong>8. Support:</strong> Mentioned in agreement.</p>
          <p><strong>9. Termination:</strong> Work completed must be paid for.</p>
          <p><strong>10. Law:</strong> Indian Law – Barrackpore Jurisdiction.</p>
          <p><strong>11. Updates:</strong> May update with notice.</p>
          <p><strong>Contact:</strong> info.cosyntra@gmail.com</p>
        </div>

        {/* FOOTER (Optional) */}
        <div className="p-3 border-t text-right">
          <button
            onClick={() => setShowTerms(false)}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
}
