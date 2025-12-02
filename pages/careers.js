import { useState, useEffect } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { career_url } from "@/config/constants";

export async function getServerSideProps() {
  try {
    const [catRes, jobsRes] = await Promise.all([
      fetch(`${career_url}/categories/active`),
      fetch(`${career_url}/jobs/active?page=1`),
    ]);

    const categoriesData = await catRes.json();
    const jobsData = await jobsRes.json();

    return {
      props: {
        categories: categoriesData?.data || [],
        jobs: jobsData?.jobs || [],
        totalPages: jobsData?.totalPages || 1, // Assuming the API returns total pages
      },
    };
  } catch (error) {
    console.error("SSR Careers Error:", error);

    return {
      props: {
        categories: [],
        jobs: [],
        totalPages: 1,
      },
    };
  }
}

export default function Careers({ categories, jobs, totalPages }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsList, setJobsList] = useState(jobs);
  const [loading, setLoading] = useState(false);
  const [totalPagesCount, setTotalPagesCount] = useState(totalPages);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [noContentFooter, setNoContentFooter] = useState(false);

  console.log(jobs, "jobs");

  const fetchJobs = async (category_id = null, append = false) => {
    setLoading(true);
    let url;
    let method = "GET";
    let body = null;

    if (category_id && category_id !== "All") {
      // Fetch jobs for a specific category (no pagination)
      url = `${career_url}/jobs/search/published`;
      method = "POST";
      body = JSON.stringify({ category_id: String(category_id) });
    } else {
      // Fetch all jobs with pagination (using jobs/active)
      url = `${career_url}/jobs/active?page=${currentPage}`;
    }

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      const data = await res.json();

      if (append) {
        // 👇 Add new jobs below existing ones
        setJobsList((prev) => [...prev, ...(data.jobs || [])]);
      } else {
        // 👇 Replace list (for first page or when category changes)
        setJobsList(data.jobs || []);
      }

      setTotalPagesCount(data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const checkScroll = () => {
    const pageHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (pageHeight <= viewportHeight) {
      setNoContentFooter(true); // No scroll → add class
    } else {
      setNoContentFooter(false); // Scroll exists → remove class
    }
  };

  useEffect(() => {
    checkScroll(); // run on mount
    window.addEventListener("resize", checkScroll);

    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  useEffect(() => {
    checkScroll();
  }, [jobsList]);

  useEffect(() => {
    if (currentPage === 1) {
      // First page → normal load
      fetchJobs(activeCategory === "All" ? null : activeCategory, false);
    } else {
      // Page 2,3,4... → append
      fetchJobs(activeCategory === "All" ? null : activeCategory, true);
    }
  }, [currentPage, activeCategory]);

  const handleCategoryChange = (category_id) => {
    setActiveCategory(category_id);
    setCurrentPage(1); // Reset to first page when category changes
    setJobsList([]);
    setLoading(true);
  };

  const handleLoadMore = () => {
    if (currentPage < totalPagesCount) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const SkeletonJob = () => (
    <div className="flex items-start justify-between border-b pb-10 animate-pulse">
      <div className="w-[80%] space-y-3">
        <div className="h-5 w-2/3 bg-gray-200 rounded"></div>
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
        <div className="flex gap-2 mt-4">
          <div className="h-6 w-32 bg-gray-200 rounded-full"></div>
          <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-[#FBFBFB] !text-gray-900 career-page">
      {/* Header */}
      <header className="w-full bg-white border-b">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <img
                src="/logo-dark.svg"
                alt="Vibrant Media Inc"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm !text-gray-700 poppins-font">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/careers" className="!text-black">
              <span className="border-b">Careers</span>
            </Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>

          {/* Mobile Burger Icon */}
          <button
            className="md:hidden text-3xl !text-black focus:outline-none"
            onClick={() => setMobileNavOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Gradient */}
      <div className="hidden sm:block absolute top-0 right-0 w-[450px] h-[450px] rounded-full blur-[120px] opacity-50 bg-gradient-to-br from-pink-300 via-purple-300 to-yellow-300 pointer-events-none" />

      {/* Header Text */}
      <div className="max-w-6xl mx-auto px-5 pt-20 poppins-font">
        <span className="inline-block text-black border-[2px] border-[#080808]] px-4 py-1 rounded-full text-md poppins-font-medium">
          We're hiring!
        </span>

        <h1 className="text-4xl md:text-5xl mt-6 leading-tight">
          Be part of our mission
        </h1>

        <p className="text-black mt-4 max-w-2xl">
          We’re looking for passionate people to join us. We value flat
          hierarchies, clear communication, and full ownership.
        </p>
      </div>

      {/* MOBILE FULLSCREEN NAV */}
      <div
        className={`
          fixed inset-0 z-50
          transform transition-transform duration-300 ease-in-out
          ${
            mobileNavOpen
              ? "translate-x-0"
              : "translate-x-full pointer-events-none"
          }
        `}
      >
        {/* Dark overlay (click to close) */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileNavOpen(false)}
        />

        {/* Fullscreen white panel */}
        <div className="absolute inset-0 bg-white p-6 pt-4 flex flex-col">
          {/* Top row: logo + close */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/">
              <img
                src="/logo-dark.svg"
                alt="Vibrant Media Inc"
                className="h-10 w-auto"
              />
            </Link>

            <button
              className="text-3xl !text-black focus:outline-none"
              onClick={() => setMobileNavOpen(false)}
            >
              ×
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-10 text-xl text-black poppins-font items-center mt-14">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/careers" className="font-semibold">
              <span className="border-b">Careers</span>
            </Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-6xl mx-auto px-5 mt-12 flex flex-wrap gap-3">
        <div className="sm:hidden w-full">
          <label
            htmlFor="category-dropdown"
            className="block text-sm text-black mb-2 !text-black poppins-font-medium"
          >
            Select Category
          </label>
          <div className="relative">
            <select
              id="category-dropdown"
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="px-4 py-2 rounded-full border-2 border-[#000] text-md !text-black bg-white w-full pr-8 appearance-none poppins-font-medium relative capitalize"
              value={activeCategory}
            >
              <option value="All">All</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex flex-wrap gap-3">
          <button
            onClick={() => handleCategoryChange("All")}
            className={`px-5 py-2 rounded-full border-2 text-sm transition poppins-font-medium capitalize ${
              activeCategory === "All"
                ? "bg-black text-white border-black"
                : "border-black !text-black hover:bg-gray-100"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)} // Pass category_id
              className={`px-5 py-2 rounded-full border-[2px] text-sm transition poppins-font-medium capitalize ${
                activeCategory === cat.id
                  ? "bg-black text-white border-black"
                  : "border-black !text-black hover:bg-gray-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-5 mt-10">
        <div className="mx-auto mt-10 border-t"></div>
      </div>

      {/* Jobs List */}
      <div className="max-w-6xl mx-auto px-5 mt-8 space-y-12 poppins-font">
        {jobsList.length === 0 && !loading ? (
          <div className="text-center text-lg !text-gray-500 capitalize">
            No records found
          </div>
        ) : (
          <>
            {jobsList.map((job, index) => (
              <div
                key={job.id}
                className="flex items-start justify-between border-b pb-10"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="w-[80%]">
                  <h3 className="poppins-font-medium capitalize">
                    <Link
                      className="text-xl cursor-pointer hover:opacity-60 text-black capitalize"
                      href={`/careers/${job.slug}`}
                    >
                      {job.title}
                    </Link>
                  </h3>
                  <div
                    className="text-black mt-2 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  />

                  <div className="flex items-center gap-3 mt-4 flex-wrap">
                    <span className="flex items-center gap-1 text-sm border-2 px-3 py-1 rounded-full poppins-font-medium capitalize">
                      <HiOutlineLocationMarker /> {job.location}
                    </span>

                    {job.jobTags?.map((t) => (
                      <span
                        key={t?.tag?.id}
                        className="text-sm border-2 px-3 py-1 rounded-full poppins-font-medium capitalize"
                      >
                        {t?.tag?.name}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  className="flex items-center gap-1 text-2xl poppins-font-medium cursor-pointer hover:opacity-60"
                  href={`/careers/${job.slug}`}
                >
                  Apply <FiArrowUpRight />
                </Link>
              </div>
            ))}

            {loading &&
              [...Array(3)].map((_, i) => <SkeletonJob key={`sk-${i}`} />)}
          </>
        )}
      </div>

      {/* Pagination Controls */}
      {activeCategory === "All" && currentPage < totalPagesCount && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="bg-black text-white py-2 px-6 rounded-full poppins-font disabled:opacity-60"
            style={{
              background:
                "linear-gradient(90deg,rgb(84, 47, 140),rgb(132, 72, 187))",
            }}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}

      {/* Divider */}
      {/* <div className="max-w-6xl mx-auto px-5 mt-10">
        <div className="mx-auto mt-10 border-t"></div>
      </div> */}

      <div
        className={`max-w-6xl mx-auto px-5 pt-4 pb-6 mt-20 flex flex-col md:flex-row items-center justify-between ${
          noContentFooter ? "no-content-footer" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <Link href="/">
            <img
              src="/logo-dark.svg"
              alt="Vibrant Media Inc"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <div>
          <p className="text-black poppins-font">
            © Vibrant Media Inc. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

Careers.disableLayout = true;
