import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // For this static portfolio we simply show a success banner.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Get in touch</h2>
            <p className="mt-2 text-gray-600">
              Let’s talk about IoT, DevOps, or data platforms. I’m available for collaborations in
              Indonesia and Melbourne.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-gray-700">
              <Mail className="h-4 w-4 text-sky-600" /> youremail@example.com
            </p>
          </div>

          <div className="md:col-span-2">
            {submitted ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
                Thanks! Your message has been noted.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:outline-none"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:outline-none"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:outline-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-700">
                  <Send className="h-4 w-4" /> Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
