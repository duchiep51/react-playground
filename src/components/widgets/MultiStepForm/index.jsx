import { Form, Formik } from "formik";
import { useState } from "react";
import { Routes, Route, useNavigate, redirect } from "react-router-dom";
import { studentPath } from "./Path";
import { studentRoute, unemployedRoute, workerRoute } from "./Routes";
import UserInfo from "./UserInfo";

const MultiStepsForm = () => {
  const navigate = useNavigate();
  const [steps, setSteps] = useState(studentPath);
  const [activeStep, setActiveStep] = useState(0);

  const initValues = {
    firstName: "",
    lastName: "",
    status: "student",
    address: "",
    city: "",
    likeJob: "",
    jobName: "",
    jobAddress: "",
    schoolName: "",
    schoolAddress: "",
  };

  const handleRoute = (values) => {
    console.log(values.status);
    if (values.status === "student") {
      return studentRoute();
    }
    if (values.status === "worker") {
      return workerRoute();
    }
    if (values.status === "unemployed") {
      return unemployedRoute();
    }
  };

  const next = () => {
    const routeTo = steps[activeStep + 1];
    setActiveStep(activeStep + 1);
    navigate(`/form/${routeTo}`);
  };

  const back = () => {
    const routeTo = steps[activeStep - 1];
    setActiveStep(activeStep - 1);
    navigate(`/form/${routeTo}`);
  };

  const handleSubmit = (values, bag) => {
    if (activeStep + 1 === steps.length) {
      window.confirm(JSON.stringify(values, null, 2));
      console.log("over ");
      setActiveStep(0);
      navigate("/form/user-info");
    } else {
      bag.setTouched({});
      next();
    }
  };

  return (
    <div className="w-1/2 m-auto">
      <p className="text-center">MultiStepsForm</p>
      <Formik initialValues={initValues} onSubmit={handleSubmit}>
        {({ values, isValid }) => (
          <Form className="w-full">
            <Routes>
              <Route
                loader={() => {console.log('loader')}}
                path="user-info"
                element={<UserInfo setSteps={setSteps} />}
              />
              {handleRoute(values)}
            </Routes>
            <div className="flex w-full gap-4 justify-center">
              {activeStep > 0 && (
                <button type="button" onClick={back}>
                  previous
                </button>
              )}
              <button type="submit">
                {activeStep + 1 === steps.length ? "submit" : "next"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepsForm;
