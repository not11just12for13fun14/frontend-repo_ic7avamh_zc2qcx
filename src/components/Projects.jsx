import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Cold Chain Monitoring",
    desc: "End‑to‑end IoT solution with ESP32 sensors, MQTT, and cloud analytics dashboard.",
    link: "#",
    tags: ["ESP32", "MQTT", "TimescaleDB", "Grafana"],
  },
  {
    name: "Smart Meter Telemetry",
    desc: "LoRaWAN gateway, edge processing, and scalable ingestion with stream processing.",
    link: "#",
    tags: ["LoRaWAN", "Node-RED", "Kafka", "Kubernetes"],
  },
  {
    name: "DevOps Starter Kit",
    desc: "IaC templates and CI/CD pipelines for containerized services across environments.",
    link: "#",
    tags: ["Terraform", "GitHub Actions", "Docker"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
          <p className="mt-2 text-gray-600">Selected work across IoT, cloud, and data.</p>
        </div>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.name} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow">
            <header>
              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
            </header>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                  {t}
                </li>
              ))}
            </ul>
            <a href={p.link} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800">
              View case study <ExternalLink className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
