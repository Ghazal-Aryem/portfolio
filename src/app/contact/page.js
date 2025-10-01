'use client';
import { useState, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        'service_chr77ck', // Replace with your EmailJS service ID
        'template_n136est', // Replace with your EmailJS template ID
        formRef.current,
        '1xBF9fdp7P20pr3JT' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'ghazalmariem911@gmail.com',
      link: 'mailto:ghazalmariem911@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+92-333-5575068',
      link: 'tel:+923335575068'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Sadiqabad, Rawalpindi, Pakistan',
      link: '#'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="max-w-2xl mx-auto mb-8 animate-slide-up">
              <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 flex items-center gap-4">
                <FiCheck className="text-green-400 text-2xl flex-shrink-0" />
                <div>
                  <h3 className="text-green-400 font-semibold text-lg">Message Sent Successfully!</h3>
                  <p className="text-green-300">Thank you for your message. I'll get back to you soon!</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="max-w-2xl mx-auto mb-8 animate-slide-up">
              <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-6 flex items-center gap-4">
                <FiAlertCircle className="text-red-400 text-2xl flex-shrink-0" />
                <div>
                  <h3 className="text-red-400 font-semibold text-lg">Failed to Send Message</h3>
                  <p className="text-red-300">Please try again later or contact me directly at ghazalmariem911@gmail.com</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold mb-8 text-white">Let's Talk</h2>
              <p className="text-gray-300 mb-8 text-lg">
                I'm always interested in hearing about new opportunities and 
                collaborating on exciting projects. Feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-4 p-4 glass-effect rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white/10 group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors duration-300">
                      <info.icon className="text-2xl text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{info.title}</h3>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Response Time</h3>
                <p className="text-gray-300">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  feel free to call or text me directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up mt-31" style={{ animationDelay: '0.2s' }}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-effect rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      placeholder="You Full Name"
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 font-semibold">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-effect rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      placeholder="name@example.com"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2 font-semibold">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-effect rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Project Collaboration"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-semibold">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 glass-effect rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, timeline, and requirements..."
                    disabled={isLoading}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`group w-full text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    isLoading 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 hover:shadow-2xl'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                <p className="text-gray-400 text-sm text-center">
                  * Required fields. Your information is safe and will only be used to respond to your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;