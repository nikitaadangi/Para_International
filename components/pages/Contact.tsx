import React from 'react';
import SectionTitle from '../SectionTitle';
import { WhatsappIcon } from '../icons/Icons';

const Contact: React.FC = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact Us" subtitle="Get in Touch" />

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-stone-800 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700">Full Name</label>
                  <input type="text" id="name" className="mt-1 block w-full px-4 py-3 border border-stone-300 rounded-md shadow-sm focus:ring-[#C59A6D] focus:border-[#C59A6D]"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email Address</label>
                  <input type="email" id="email" className="mt-1 block w-full px-4 py-3 border border-stone-300 rounded-md shadow-sm focus:ring-[#C59A6D] focus:border-[#C59A6D]"/>
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stone-700">Subject</label>
                <input type="text" id="subject" className="mt-1 block w-full px-4 py-3 border border-stone-300 rounded-md shadow-sm focus:ring-[#C59A6D] focus:border-[#C59A6D]"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700">Message</label>
                <textarea id="message" rows={5} className="mt-1 block w-full px-4 py-3 border border-stone-300 rounded-md shadow-sm focus:ring-[#C59A6D] focus:border-[#C59A6D]"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full px-8 py-3 bg-[#C59A6D] text-white font-bold rounded-md hover:bg-[#b58e61] transition-colors duration-300 shadow-lg">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5">
            <div className="bg-stone-800 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4 text-stone-300">
                <p>
                  <strong className="text-white">Address:</strong><br/>
                  Udaipur, Rajasthan, India 313001
                </p>
                <p>
                  <strong className="text-white">Email:</strong><br/>
                  <a href="mailto:paraintllp@gmail.com" className="hover:text-[#C59A6D] transition-colors">paraintllp@gmail.com</a>
                </p>
                <p>
                  <strong className="text-white">Phone:</strong><br/>
                  <a href="tel:+91-7726050703" className="hover:text-[#C59A6D] transition-colors">+91-772-605-0703</a>
                </p>
                <a href="https://wa.me/917726050703" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition-colors duration-300">
                  <WhatsappIcon className="h-6 w-6"/>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;