import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const categories = [
  "All",
  "Development",
  "Design",
  "Marketing",
  "Customer Service",
  "Operations",
  "Finance",
  "Management",
];

const careersList = [
  {
    id: 1,
    title: "Product Designer",
    desc: "We're looking for a mid-level product designer to join our team.",
    category: "Design",
    type: "Full-time",
    remote: true,
  },
  {
    id: 2,
    title: "Engineering Manager",
    desc: "We're looking for an experienced engineering manager to join our team.",
    category: "Development",
    type: "Full-time",
    remote: true,
  },
  {
    id: 3,
    title: "Customer Success Manager",
    desc: "We're looking for a customer success manager to join our team.",
    category: "Customer Service",
    type: "Full-time",
    remote: true,
  },
  {
    id: 4,
    title: "Account Executive",
    desc: "We're looking for an account executive to join our team.",
    category: "Operations",
    type: "Full-time",
    remote: true,
  },
  {
    id: 5,
    title: "SEO Marketing Manager",
    desc: "We're looking for an experienced SEO marketing manager to join our team.",
    category: "Marketing",
    type: "Full-time",
    remote: true,
  },
];

export default function Careers() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCareers =
    activeCategory === "All"
      ? careersList
      : careersList.filter((c) => c.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-[#FBFBFB] text-gray-900 pb-20">
      {/* Careers Page Header */}
      <header className="w-full bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700 !text-black">
            <a href="#" className="!text-black">
              Home
            </a>
            <a href="#" className="!text-black">
              Pricing
            </a>
            <a href="#" className="!text-black">
              How it works
            </a>
            <a href="#" className="!text-black">
              Resources
            </a>
            <a href="#" className="!text-black">
              Company
            </a>
          </nav>
        </div>
      </header>

      {/* Gradient Patch */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full blur-[120px] opacity-50 bg-gradient-to-br from-pink-300 via-purple-300 to-yellow-300 pointer-events-none" />

      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-5 pt-20">
        <span className="inline-block bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">
          We're hiring!
        </span>

        <h1 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight !text-black">
          Be part of our mission
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl !text-black">
          We’re looking for passionate people to join us on our mission. We
          value flat hierarchies clear communication and full ownership.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-5xl mx-auto px-5 mt-10 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border text-sm transition ${
              activeCategory === cat
                ? "bg-black text-white border-black"
                : "border-gray-300 !text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* List Divider */}
      <div className="max-w-5xl mx-auto px-5 mt-10 border-t"></div>

      {/* Jobs List */}
      <div className="max-w-5xl mx-auto px-5 mt-8 space-y-12">
        {filteredCareers.map((job) => (
          <div
            key={job.id}
            className="flex items-start justify-between border-b pb-10"
          >
            <div>
              <h3 className="text-xl font-semibold !text-black">{job.title}</h3>
              <p className="text-gray-600 mt-2 !text-black">{job.desc}</p>

              <div className="flex items-center gap-3 mt-4">
                <span className="flex items-center gap-1 text-sm border px-3 py-1 rounded-full">
                  <HiOutlineLocationMarker />{" "}
                  {job.remote ? "100% remote" : "On-site"}
                </span>

                <span className="text-sm border px-3 py-1 rounded-full">
                  {job.type}
                </span>
              </div>
            </div>

            <a className="flex items-center gap-1 text-sm font-medium text-gray-900 cursor-pointer hover:opacity-60 !text-black">
              Apply <FiArrowUpRight />
            </a>
          </div>
        ))}
      </div>

      {/* Testimonial Section */}
      <div className="max-w-4xl mx-auto px-5 mt-20 text-center">
        <p className="text-2xl md:text-3xl font-medium leading-relaxed !text-black">
          Untitled truly values work-life balance. We work hard and deliver but
          at the end of the day you can switch off.
        </p>

        <div className="mt-10">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="w-14 h-14 rounded-full mx-auto"
          />
          <p className="mt-3 font-semibold !text-black">Frankie Sullivan</p>
          <p className="text-gray-500 text-sm !text-black">
            Web Developer, Untitled
          </p>
        </div>
      </div>
    </div>
  );
}

Careers.disableLayout = true;
