import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | QuickCart",
  description: "Get in touch with QuickCart. We'd love to hear from you!",
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen pt-14">
      <section className="bg-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="mt-6 text-lg text-gray-100 max-w-3xl mx-auto">
            Have a question, suggestion, or need help with your order? Our team
            is always ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none resize-none focus:border-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-white  hover:border hover:border-black hover:text-black transition text-white py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4 items-start">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="text-blue-600" size={24} />
              </div>

              <div>
                <h3 className="font-bold text-xl">Email Us</h3>
                <p className="text-gray-600 mt-2">
                  support@quickcart.com
                </p>
                <p className="text-gray-600">
                  sales@quickcart.com
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4 items-start">
              <div className="bg-green-100 p-3 rounded-full">
                <Phone className="text-green-600" size={24} />
              </div>

              <div>
                <h3 className="font-bold text-xl">Call Us</h3>
                <p className="text-gray-600 mt-2">
                  +91 98765 43210
                </p>
                <p className="text-gray-600">
                  +91 91234 56789
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4 items-start">
              <div className="bg-red-100 p-3 rounded-full">
                <MapPin className="text-red-600" size={24} />
              </div>

              <div>
                <h3 className="font-bold text-xl">Our Office</h3>
                <p className="text-gray-600 mt-2">
                  QuickCart Headquarters
                </p>
                <p className="text-gray-600">
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-4 items-start">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock className="text-yellow-600" size={24} />
              </div>

              <div>
                <h3 className="font-bold text-xl">Business Hours</h3>
                <p className="text-gray-600 mt-2">
                  Monday - Friday
                </p>
                <p className="text-gray-600">
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-3xl font-bold text-center mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg">
                  How long does delivery take?
                </h3>
                <p className="text-gray-600 mt-2">
                  Most orders are delivered within 3–7 business days depending
                  on your location.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Can I return my order?
                </h3>
                <p className="text-gray-600 mt-2">
                  Yes. We offer a hassle-free return policy for eligible
                  products within the return window.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  How can I track my order?
                </h3>
                <p className="text-gray-600 mt-2">
                  After your order is shipped, you'll receive a tracking link
                  via email or SMS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
