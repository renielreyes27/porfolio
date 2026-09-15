import { useState } from 'react';

import ScrollReveal from '../ui/ScrollReveal';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiFacebook } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\\S+@\\S+\\.\\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    { icon: <FiMail size={20} />, label: 'Email', value: 'reniel.reyes27@gmail.com', link: 'mailto:reniel.reyes27@gmail.com' },
    { icon: <FiPhone size={20} />, label: 'Contact', value: '0936 928 8206', link: 'tel:09369288206' },
    { icon: <FiMapPin size={20} />, label: 'Location', value: 'Jaen, Nueva Ecija, Philippines', link: null },
    { icon: <FiGithub size={20} />, label: 'GitHub', value: 'renielreyes27', link: 'https://github.com/renielreyes27' },
    { icon: <FiFacebook size={20} />, label: 'Facebook', value: 'reniel.alas.reyes', link: 'https://www.facebook.com/reniel.alas.reyes/' },
  ];

  return (
    <section id="contact" className="py-32 bg-surface/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 flex items-center justify-center tracking-tight">
            <div className="h-px bg-surface flex-grow mr-8 hidden md:block opacity-50"></div>
            <span className="text-primary/70 mr-6 text-xl md:text-2xl font-mono font-medium tracking-widest relative -top-1">07.</span> Get in Touch
            <div className="h-px bg-surface flex-grow ml-8 hidden md:block opacity-50"></div>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-text-main text-lg md:text-xl mb-3 font-medium">
              Have a question, opportunity, or just want to connect? Feel free to reach out.
            </p>
            <p className="text-text-muted">
              Currently open to OJT, internship, and learning opportunities.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="bg-surface rounded-3xl border border-surface/90 shadow-2xl shadow-primary/5 overflow-hidden relative p-8 sm:p-10 lg:p-12">
            {/* Subtle soft-purple ambient accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
              {/* Left Column: Short intro + Contact Information & Socials */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h3 className="text-2xl font-extrabold text-text-main mb-3 tracking-tight">
                    Contact Information
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Feel free to reach out through any of the channels below or send a direct message via the form.
                  </p>
                </div>

                <div className="space-y-5">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-11 h-11 bg-background rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xs border border-surface shrink-0">
                        {info.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-text-muted font-medium mb-0.5">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            target={info.link.startsWith('http') ? '_blank' : '_self'} 
                            rel="noopener noreferrer" 
                            className="text-sm text-text-main hover:text-primary transition-colors font-semibold truncate block"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-text-main font-semibold">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-5 bg-background/60 p-6 sm:p-8 rounded-2xl border border-surface/70 shadow-xs">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-main mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-surface border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text-main transition-all ${errors.name ? 'border-red-500' : 'border-surface/80 focus:border-transparent'}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-main mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-surface border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text-main transition-all ${errors.email ? 'border-red-500' : 'border-surface/80 focus:border-transparent'}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text-main mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-4 py-3 bg-surface border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-text-main resize-none transition-all ${errors.message ? 'border-red-500' : 'border-surface/80 focus:border-transparent'}`}
                      placeholder="Your message here..."
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>}
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-3.5 text-white rounded-xl font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary cursor-pointer ${
                      isSuccess 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-primary hover:bg-[#2a0055] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30'
                    } disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0`}
                  >
                    {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent!' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
