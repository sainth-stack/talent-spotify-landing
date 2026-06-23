import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/aboutus", destination: "/about", permanent: true },
      { source: "/contactus", destination: "/contact", permanent: true },
      { source: "/termsandconditions", destination: "/terms", permanent: true },
      { source: "/privacypolicy", destination: "/privacy", permanent: true },
      { source: "/landingpage", destination: "/", permanent: true },
      { source: "/landingpagenew", destination: "/", permanent: true },
      { source: "/pricing", destination: "/#pricing", permanent: true },
      { source: "/okr", destination: "/#product", permanent: true },
      { source: "/rewards", destination: "/#product", permanent: true },
      { source: "/recognition", destination: "/#product", permanent: true },
      { source: "/reviews", destination: "/#product", permanent: true },
      { source: "/swot", destination: "/#product", permanent: true },
      { source: "/whyitworks", destination: "/#fairness", permanent: true },
      { source: "/webinars", destination: "/blog", permanent: true },
      { source: "/webinardetails", destination: "/blog", permanent: true },
      { source: "/press", destination: "/about", permanent: true },
      { source: "/blogdetails", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
