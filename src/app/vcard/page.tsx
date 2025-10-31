'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function VCardPage() {
  const [showQRPopup, setShowQRPopup] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [hasShownAutoPopup, setHasShownAutoPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    businessType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Auto-popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownAutoPopup) {
        setShowContactForm(true);
        setHasShownAutoPopup(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasShownAutoPopup]);

  const businessTypes = [
    'Shipping Line',
    'CHA',
    'Freight Forwarder',
    'Importer',
    'Exporter',
    'Manufacturer',
    'Service Provider',
    'Others'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          companyName: '',
          email: '',
          businessType: ''
        });
        setTimeout(() => {
          setShowContactForm(false);
          setSubmitMessage('');
        }, 3000);
      } else {
        setSubmitMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadVCF = () => {
    const link = document.createElement('a');
    link.href = '/images/vcard/vcf';
    link.download = 'nisha-roadways-contact.vcf';
    link.setAttribute('type', 'text/vcard');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919820420924', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+912241632222', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@nisharoadways.com', '_blank');
  };

  const handleDirectionClick = () => {
    window.open('https://maps.app.goo.gl/gZ793K9D3x8ZEVqb6', '_blank');
  };
  return (
    <div className="h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 relative overflow-hidden">
      {/* Fixed Background Pattern */}
      <div 
        className="fixed inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `url('/images/vcard/page-bg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Fixed Geometric Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-pink-500 opacity-30 rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-cyan-400 opacity-30 rotate-12"></div>
          <div className="absolute top-1/2 left-5 w-16 h-16 border-2 border-purple-400 opacity-40 rotate-45"></div>
          <div className="absolute top-1/3 right-5 w-20 h-20 border-2 border-blue-400 opacity-30 rotate-12"></div>
        </div>
      </div>

      {/* Scrollable Main Content */}
      <div className="relative z-10 h-full overflow-y-auto">
        <div className="flex flex-col items-center justify-center min-h-full p-4 py-8">
        {/* Card Container */}
        <div className="relative w-full max-w-md mx-auto">
          {/* Business Card */}
          <div className="relative w-full aspect-[1/1] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 ">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/vcard/nisha-card-bg.webp')`
              }}
            />
            
            {/* Card Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60">
              <div className="flex flex-col justify-between h-full p-6">
                {/* Logo and Company Name */}
                <div className="flex items-center space-x-3 mt-48 -mb-8">
                  <div className="relative w-40 h-40">
                    <Image
                      src="/images/vcard/nisha-logo.png"
                      alt="Nisha Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                 
                </div>

                {/* Contact Icons */}
                <div className="flex justify-center space-x-6 mr-50">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.542"/>
                    </svg>
                  </button>
                  <button 
                    onClick={handleCallClick}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </button>
                  <button 
                    onClick={handleEmailClick}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="mt-6 bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            </div>

            {/* Call Us Section */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Call Us</h4>
              <p className="text-gray-800 text-sm mb-1">+91 22 4163 222</p>
              <p className="text-gray-800 text-sm mb-1">+91 98 2042 0924</p>
              <p className="text-gray-800 text-sm mb-1">+91 93 2008 8518</p>
            </div>

            {/* Email Section */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Email</h4>
              <p className="text-gray-800 text-sm">info@nisharoadways.com</p>
            </div>

            {/* Address Section */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Address</h4>
              <div className="text-gray-800 text-sm">
                <p>809, Mayuresh Cosmos,</p>
                <p>Plot No 57, Sector 11, C.B.D. Belapur,</p>
                <p>Navi Mumbai, Maharashtra, 400614</p>
                <p>India</p>
              </div>
            </div>

            {/* Direction Button */}
            <button 
              onClick={handleDirectionClick}
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Direction</span>
            </button>
          </div>
        </div>

        </div>
      </div>

      {/* QR Button - Bottom Left */}
      <button 
        onClick={() => setShowQRPopup(true)}
        className="fixed bottom-4 left-4 w-16 h-16 bg-white rounded-full p-3 shadow-lg z-20 hover:scale-110 transition-transform duration-200"
      >
        <Image
          src="/images/vcard/qr.webp"
          alt="QR Code"
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </button>

      {/* Add to Contact Button - Bottom Right */}
      <button 
        onClick={handleDownloadVCF}
        className="fixed bottom-4 right-4 bg-white rounded-full mr-10 px-4 py-3 shadow-lg z-20 hover:scale-105 transition-transform duration-200 flex items-center space-x-2"
      >
        <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
        <span className="text-gray-800 font-medium text-sm">Add to Contact</span>
      </button>

      {/* QR Code Full Screen Popup */}
      {showQRPopup && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <button 
            onClick={() => setShowQRPopup(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center">
            <Image
              src="/images/vcard/qr.webp"
              alt="QR Code"
              width={300}
              height={300}
              className="object-contain"
            />
         
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50  z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
              <button 
                onClick={() => setShowContactForm(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name of the Person *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white placeholder-gray-500"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Company Name Field */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white placeholder-gray-500"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email ID *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white placeholder-gray-500"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Business Type Dropdown */}
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Type *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                >
                  <option value="">Select your business type</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`p-3 rounded-md text-sm ${
                  submitMessage.includes('successfully') 
                    ? 'bg-green-100 text-green-700 border border-green-200' 
                    : 'bg-red-100 text-red-700 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}