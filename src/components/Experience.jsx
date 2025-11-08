export default function Experience() {
  const items = [
    {
      title: "IoT Platform Engineer",
      company: "Tech Solutions — Indonesia",
      period: "2021 — Present",
      points: [
        "Designed device provisioning, OTA, and telemetry ingestion for 10k+ devices",
        "Built data lake with time‑series storage and real‑time analytics",
        "Implemented CI/CD pipelines and observability for fleet operations",
      ],
    },
    {
      title: "DevOps Engineer",
      company: "Smart City Lab — Melbourne",
      period: "2019 — 2021",
      points: [
        "Managed container orchestration and infra as code",
        "Optimized cost and reliability with autoscaling and caching",
        "Led migration to microservices and GitOps workflows",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Experience</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((role) => (
            <div key={role.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
                <span className="text-sm text-gray-500">{role.period}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{role.company}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {role.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
