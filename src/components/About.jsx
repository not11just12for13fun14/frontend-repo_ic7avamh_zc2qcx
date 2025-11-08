export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">About</h2>
          <p className="mt-2 text-gray-600">A snapshot of my toolkit and focus areas.</p>
        </div>
        <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">IoT Engineering</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Firmware (ESP32, STM32), MQTT, LoRaWAN, BLE, edge AI, OTA updates, and telemetry pipelines.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">DevOps & Cloud</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Docker, Kubernetes, Terraform, GitHub Actions, monitoring (Prometheus/Grafana), and observability.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">Software Development</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Python, Node.js, Go. APIs, microservices, serverless, and real-time event-driven systems.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900">Data & Databases</h3>
            <p className="mt-2 text-gray-600 text-sm">
              PostgreSQL, MongoDB, TimescaleDB, InfluxDB. Data modeling, pipelines, and dashboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
