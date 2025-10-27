export default function StatsSection() {
  return (
    <section className="relative flex justify-center items-center overflow-hidden bg-no-repeat bg-center bg-full md:bg-full bg-[url('/second-ring.png')] pt-120 pb-50 second-ring-css">
      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl px-6 md:px-12 py-48 flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left - V Logo + Text */}
        <div className="flex flex-col items-start max-w-md text-center md:text-left">
          <div className="text-vibrant text-6xl font-bold drop-shadow-glow animate-pulse mb-4">
            V
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            Vibrant Media Inc. is not just a service provider—we're your partner
            in growth. From trend-sensitive design and cutting-edge development
            to strategic campaign planning and customized digital marketing, we
            offer a comprehensive suite of solutions tailored to your unique
            mission. Whether you're looking to enhance your brand, engage your
            audience, or scale your business, we're here to turn your vision
            into reality.
          </p>
        </div>

        {/* Right - Stats */}
        <div className="relative flex justify-center items-center w-full max-w-md">
          <div className="flex flex-col items-center gap-6 z-10">
            <StatCard value="500+" label="Brands Delivered" />
            <StatCard value="250+" label="Satisfied Clients" />
            <StatCard value="70+" label="Industries Covered" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="bg-[#1e1633] border border-white/10 text-white px-6 py-4 rounded-xl shadow-md w-[200px] text-center">
      <div className="text-3xl font-bold text-vibrant">{value}</div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  );
}
