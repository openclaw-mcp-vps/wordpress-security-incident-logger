export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Security Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Log and Analyze WordPress<br />
          <span className="text-[#58a6ff]">Security Incidents Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor your WordPress sites for security events, capture forensic details in real time, and generate compliance-ready reports for insurance claims — all without lifting a finger.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Logging for $12/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Webhook Receiver", desc: "Accepts events from Wordfence, Sucuri, and custom plugins instantly." },
            { title: "Forensic Context", desc: "Captures IP, user agent, payload, and timeline for every incident." },
            { title: "Insurance Reports", desc: "One-click PDF exports formatted for cyber insurance claim submissions." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited WordPress sites",
              "Real-time webhook ingestion",
              "Forensic incident logging",
              "Insurance-ready PDF reports",
              "30-day incident history",
              "Email alerts on critical events"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my WordPress site?",
              a: "Install our lightweight WordPress plugin or configure any security plugin (Wordfence, Sucuri, iThemes) to send webhooks to your unique endpoint. No server access required."
            },
            {
              q: "What counts as a security incident?",
              a: "Failed logins, malware detections, file changes, blocked attacks, admin lockouts, and plugin vulnerabilities are all captured and categorized automatically."
            },
            {
              q: "Are the reports accepted by insurance providers?",
              a: "Our PDF exports follow standard cyber incident documentation formats used by major insurers. You can also export raw JSON logs for custom reporting."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} WP Security Logger. All rights reserved.
      </footer>
    </main>
  );
}
