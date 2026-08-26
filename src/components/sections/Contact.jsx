import { useState } from 'react';
import profile from '../../data/profile';
import ScrollReveal from '../ui/ScrollReveal';

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
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
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

  return (
    <section id="contact" className="py-32 bg-surface/30">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 flex items-center justify-center tracking-tight">
            <span className="text-primary/70 mr-6 text-xl md:text-2xl font-mono font-medium tracking-widest relative -top-1">05.</span> Get In Touch
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-text-muted mb-10 leading-relaxed text-lg">
            {profile.contactText || "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="text-left space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-main mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-main ${errors.name ? 'border-red-500' : 'border-surface/50 focus:border-transparent'}`}
                placeholder="John Doe"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-main mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-main ${errors.email ? 'border-red-500' : 'border-surface/50 focus:border-transparent'}`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-main mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-text-main resize-none ${errors.message ? 'border-red-500' : 'border-surface/50 focus:border-transparent'}`}
                placeholder="Your message here..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-10 py-4 text-white rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary ${
                isSuccess 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-primary hover:bg-[#2a0055] hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30'
              } disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0`}
            >
              {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
