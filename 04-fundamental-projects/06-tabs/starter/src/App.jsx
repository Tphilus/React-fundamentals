import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setJobs(newJobs);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        {/* <h1> loading... </h1> */}
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];
  console.log(jobs[value]);
  return (
    <section className="">
      <div className="title">
        <h2>expierence</h2>
        <div className="title-underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs?.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties?.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"> </FaAngleDoubleRight>
                <p> {duty} </p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};
export default App;
