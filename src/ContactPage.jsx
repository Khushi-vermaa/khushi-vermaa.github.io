import React, { useState } from "react";
import Button from "./button";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for reaching out! Our stylists will contact you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 via-amber-50 to-amber-100 text-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-amber-500 to-orange-400 bg-clip-text text-transparent drop-shadow">
              Contact GlamPlaza
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Have a question about your order or need style advice? Our team is
              here to help you shine!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-pink-600 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form and our stylists will get back to you soon.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Status</option>
                    <option value="styling">Styling Advice</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="collab">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-pink-500 to-amber-400 hover:from-pink-600 hover:to-orange-500 text-white py-3 font-semibold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-pink-600 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-pink-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        Email Us
                      </h4>
                      <p className="text-gray-600">support@glamplaza.com</p>
                      <p className="text-gray-600">collab@glamplaza.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        Call Us
                      </h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-gray-600">+91 91234 56789</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        Visit Us
                      </h4>
                      <p className="text-gray-600">
                        101 Fashion Street
                        <br />
                        Mumbai, Maharashtra
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        Business Hours
                      </h4>
                      <p className="text-gray-600">
                        Mon - Sat: 10:00 AM - 7:00 PM
                      </p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-pink-500 to-amber-400 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Quick Help?</h3>
                <p className="mb-6 text-pink-50">
                  For urgent queries, chat with us or request a callback.
                </p>
                <div className="space-y-4">
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-pink-600 hover:bg-pink-50 font-semibold"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Live Chat
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-pink-600"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Request a Callback
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-pink-600 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about orders, returns, and more.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-800 mb-2">
                How do I track my order?
              </h3>
              <p className="text-gray-600">
                Once your order is shipped, you’ll receive a tracking link via
                email and SMS. You can also track your order in your GlamPlaza
                account.
              </p>
            </div>
            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-800 mb-2">
                What is your return policy?
              </h3>
              <p className="text-gray-600">
                We offer easy 7-day returns on most products. Items must be
                unworn, unwashed, and with original tags.
              </p>
            </div>
            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-800 mb-2">
                Can I get styling advice?
              </h3>
              <p className="text-gray-600">
                Absolutely! Use the contact form or live chat to connect with
                our stylists for personalized recommendations.
              </p>
            </div>
            <div className="bg-pink-50 rounded-lg p-6">
              <h3 className="font-semibold text-slate-800 mb-2">
                Do you ship internationally?
              </h3>
              <p className="text-gray-600">
                Yes, we deliver worldwide. Shipping charges and delivery times
                vary by location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
