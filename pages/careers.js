import React, { useRef, useState, useEffect } from "react";
import Footer from "../Components/Footer";
import carrer_img from "../assets/images/carrer_img.png";
import Careers from "../Components/Careers";
import Image from "next/image";
import Navigation from "../Components/navigationNew";
import useWindowSize from "../utilities/UseWindowSize";
import { landingApiBase } from "../utilities/cons";
import axios from "axios";

export default function Career() {
  const [showPopup, setShowPopup] = useState(false);
  const [showTrail, setShowTrail] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const jobsSectionRef = useRef(null);
  const myRef = useRef(null);
  const homeRef = useRef(null);
  const okrRef = useRef(null);
  const howItWorksRef = useRef(null);
  const awardsRef = useRef(null);

  const executeScroll = () => myRef.current?.scrollIntoView();
  const homerefScroll = () => homeRef.current?.scrollIntoView();
  const okrrefScroll = () => okrRef.current?.scrollIntoView();
  const howItWorksScroll = () => howItWorksRef.current?.scrollIntoView();
  const awardsScroll = () => awardsRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToJobs = () =>
    jobsSectionRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    axios
      .get(`${landingApiBase}/jobs`)
      .then((res) => {
        if (res.data && res.data.success && Array.isArray(res.data.data)) {
          setJobs(res.data.data);
        }
      })
      .catch(() => setJobs([]))
      .finally(() => setJobsLoading(false));
  }, []);

  const isMobile = useWindowSize();

  return (
    <div
      className="mt-5"
      style={{
        height: "100vh",
        overflow: "auto",
        backgroundColor: "#ebe3d5",
      }}
    >
      <Navigation
        showPopup={showPopup}
        executeScroll={executeScroll}
        showDemo={showTrail}
        setShowPopup={() => setShowPopup(false)}
        setShowDemo={setShowTrail}
      />
      <div className="container mt-5">
        <div className="row justify-center align-items-center my-5">
          <div className="col-12 col-md-5 ms-2">
            <h1 className="mb-2 ms-4">Work With Us!</h1>
            <p className="py-1 ms-4">
              To amplify human potential and create the <br />
              next opportunity for people, businesses, and communities.
            </p>
            <button
              className="btn ms-4"
              style={{ background: "#083c61", color: "#fff" }}
              onClick={scrollToJobs}
            >
              View Job Openings
            </button>
          </div>
          <div
            className="col-12 col-md-6 d-flex justify-content-end"
            style={{ paddingRight: "80px", position: "relative" }}
          >
            <Image
              src={carrer_img}
              alt="Career image"
              className="img"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Jobs list + JD & Apply - light section background, white cards, soft shadow */}
      <div
        ref={jobsSectionRef}
        className="col-12"
        style={{
          backgroundColor: "#f8f8f8",
          paddingTop: "48px",
          paddingBottom: "64px",
        }}
      >
        <div className="container">
          {selectedJob ? (
            <>
              <button
                type="button"
                className="btn btn-link mb-3 p-0 text-decoration-none"
                style={{ color: "#083c61", fontWeight: 600 }}
                onClick={() => setSelectedJob(null)}
              >
                ← Back to job openings
              </button>
              <div
                className="bg-white mb-4"
                style={{
                  padding: "28px 24px",
                  borderRadius: "16px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  borderLeft: "4px solid #083c61",
                }}
              >
                <h2 className="mb-2" style={{ color: "#083c61", fontWeight: 600, fontSize: "1.5rem" }}>
                  {selectedJob.title}
                </h2>
                {selectedJob.location && (
                  <p className="mb-2" style={{ color: "#5a6c7d", fontSize: "0.9375rem" }}>
                    Location: {selectedJob.location}
                  </p>
                )}
                <div
                  className="job-description"
                  style={{ whiteSpace: "pre-wrap", lineHeight: 1.6, color: "#5a6c7d", fontSize: "0.9375rem" }}
                >
                  {selectedJob.description || ""}
                </div>
              </div>
              <Careers
                jobId={selectedJob._id}
                jobTitle={selectedJob.title}
                onSuccess={() => setSelectedJob(null)}
              />
            </>
          ) : (
            <>
              <h2
                className="text-center"
                style={{
                  fontWeight: 600,
                  color: "#083c61",
                  fontSize: "1.75rem",
                  marginBottom: "40px",
                  marginTop: 0,
                }}
              >
                Open positions
              </h2>
              {jobsLoading ? (
                <p className="text-center" style={{ color: "#5a6c7d", marginTop: "24px" }}>
                  Loading jobs...
                </p>
              ) : jobs.length === 0 ? (
                <p className="text-center" style={{ color: "#5a6c7d", marginTop: "24px" }}>
                  No open positions at the moment. Check back later.
                </p>
              ) : (
                <div className="row justify-content-center g-4">
                  {jobs.map((job) => (
                    <div
                      key={job._id}
                      className="col-12 col-md-8 col-lg-6 col-xl-5"
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedJob(job)}
                      onKeyDown={(e) => e.key === "Enter" && setSelectedJob(job)}
                      role="button"
                      tabIndex={0}
                    >
                      <div
                        className="bg-white h-100"
                        style={{
                          padding: "28px 24px",
                          borderRadius: "16px",
                          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                          transition: "box-shadow 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
                        }}
                      >
                        <h3
                          className="mb-2"
                          style={{
                            color: "#083c61",
                            fontWeight: 600,
                            fontSize: "1.25rem",
                          }}
                        >
                          {job.title}
                        </h3>
                        {job.location && (
                          <p
                            className="mb-1"
                            style={{
                              color: "#5a6c7d",
                              fontSize: "0.9375rem",
                              fontWeight: 400,
                            }}
                          >
                            Location: {job.location}
                          </p>
                        )}
                        <p
                          className="mb-0 mt-2"
                          style={{
                            color: "#5a6c7d",
                            fontSize: "0.8125rem",
                            fontWeight: 400,
                          }}
                        >
                          Click to view details and apply
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
