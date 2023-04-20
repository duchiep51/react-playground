import { Routes, Route } from "react-router-dom";
import SchoolDetail from "./SchoolDetail";
import Contact from "./Contact";
import JobDetail from "./JobDetail";
import Survey from "./Survey";

export const studentRoute = () => {
  return (
    <>
      <Route path="/form/school-info" element={<SchoolDetail />} />
      <Route path="/form/contact" element={<Contact />} />
    </>
  );
};
export const workerRoute = () => {
  return (
    <>
      <Route path="/form/job-info" element={<JobDetail />} />
      <Route path="/form/survey" element={<Survey />} />
      <Route path="/form/contact" element={<Contact />} />
    </>
  );
};
export const unemployedRoute = () => {
  return (
    <>
      <Route path="/form/contact" element={<Contact />} />
    </>
  );
};
