import { MapPin, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-white to-white" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700 ring-1 ring-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              IoT Engineer • DevOps • Software Developer • Database Management
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Hi, I’m <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              I design, build, and operate end‑to‑end IoT platforms: from embedded firmware and
              edge computing to scalable cloud services, CI/CD pipelines, and data platforms. I split my time
              between Indonesia and Melbourne.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-gray-700">
              <span className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 ring-1 ring-gray-200">
                <MapPin className="h-4 w-4 text-sky-600" /> Indonesia • Melbourne
              </span>
              <a
                href="mailto:youremail@example.com"
                className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-white shadow hover:bg-sky-700"
              >
                <Mail className="h-4 w-4" /> Contact
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 ring-1 ring-gray-200 hover:ring-gray-300"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yourusername/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 ring-1 ring-gray-200 hover:ring-gray-300"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="relative mx-auto grid w-full max-w-sm place-items-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop"
                alt="IoT hardware"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-gray-500">Edge devices • Sensors • Cloud</p>
          </div>
        </div>
      </div>
    </section>
  );
}
