import React, { useEffect, useState } from "react";
import "./Templatecontainer.css";
import { Backendlink } from "../../Backendlink";
import { Link } from "react-router-dom";

const Templatecontainer = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const [LinkedIn, setLinkedIn] = useState("");
  const [orgname, setorgname] = useState("");
  const [degree, setdegree] = useState("");
  const [orgTimePeriod, setorgTimePeriod] = useState("");
  const [skill, setskill] = useState("");
  const [orgExperience, setorgExperience] = useState("");
  const [domain, setdomain] = useState("");
  const [experiencedetail, setexperiencedetail] = useState("");
  const [expTimeperiod, setexpTimeperiod] = useState("");
  const [orgExperience1, setorgExperience1] = useState("");
  const [domain1, setdomain1] = useState("");
  const [experiencedetail1, setexperiencedetail1] = useState("");
  const [expTimeperiod1, setexpTimeperiod1] = useState("");
  const [Projectname, setprojectname] = useState("");
  const [stack, setstack] = useState("");
  const [projecturl, setprojecturl] = useState("");
  const [projectlearn, setprojectlearn] = useState("");
  const [Projectname1, setprojectname1] = useState("");
  const [stack1, setstack1] = useState("");
  const [projecturl1, setprojecturl1] = useState("");
  const [projectlearn1, setprojectlearn1] = useState("");
  const [data, setdata] = useState([]);

  const userdata = async () => {
    try {
      const response = await fetch(`${Backendlink}/signup`);
      const data = await response.json();
      setdata(data);
    } catch (error) {
      console.error("error in catch");
    }
  };

  useEffect(() => {
    userdata();
  }, []);

  const userid = data._id;

  const SendData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${Backendlink}/Resume`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          mobileNo,
          LinkedIn,
          orgname,
          degree,
          orgTimePeriod,
          skill,
          orgExperience,
          domain,
          experiencedetail,
          expTimeperiod,
          orgExperience1,
          domain1,
          experiencedetail1,
          expTimeperiod1,
          Projectname,
          stack,
          projecturl,
          projectlearn,
          Projectname1,
          stack1,
          projecturl1,
          projectlearn1,
          userid,
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      if (!response.ok) {
        throw new Error("error in response");
      }
      const data = await response.json();
      console.log("Data submitted successfully:", data);
    } catch (error) {
      console.log("error in catch:", error);
    }
  };

  return (
    <div className="resume-info">
      <h1>ATS Friendly Resume</h1>
      <p>
        An ATS-friendly (Applicant Tracking System-friendly) resume is designed
        to be easily read and parsed by ATS software, which is commonly used by
        employers to filter and rank job applications. Here are some key points
        to ensure your resume is ATS-friendly:
      </p>
      <h1>Key Points:-</h1>
      <ul>
        <li>
          <h2>Proper Use of Keywords:-</h2>
          <p>
            Tailor your resume to the job description by including relevant
            keywords. Use industry-specific terms and phrases that match the job
            posting.
          </p>
        </li>
        <li>
          <h2>File Type:-</h2>
          <p>
            Submit your resume as a Word document (.doc or .docx) or in plain
            text format. Some ATS may not parse PDFs correctly.
          </p>
        </li>
        <li>
          <h2>Contact Information:-</h2>
          <p>
            Include your full name, phone number, email address, and LinkedIn
            profile (if applicable). Place contact information at the top of the
            resume.
          </p>
        </li>
        <li>
          <h2>Experience Section:-</h2>
          <p>
            List your work experience in reverse chronological order (most
            recent job first). Include job title, company name, location, and
            dates of employment.
          </p>
        </li>
        <li>
          <h2>Education Section:-</h2>
          <p>
            Include your highest level of education first, with the degree,
            institution name, and graduation date.
          </p>
        </li>
        <li>
          <h2>Skills Section:-</h2>
          <p>
            List relevant skills that match the job description. Use a mix of
            hard and soft skills.
          </p>
        </li>
      </ul>
      <div className="Form">
        <form>
          <div className="contact-edu-skill">
            <div className="Contact-info">
              <h1>Contact Info.</h1>
              <div>
                <label>Name:</label>
                <input
                  type="Text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Email@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Mobile No. :</label>
                <input
                  type="tel"
                  placeholder="Mobile no."
                  value={mobileNo}
                  onChange={(e) => {
                    setmobileNo(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>LinkedIn Url:</label>
                <input
                  type="url"
                  placeholder="LinkedIn Url"
                  value={LinkedIn}
                  onChange={(e) => {
                    setLinkedIn(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="Education-info">
              <h1>Education Info.</h1>
              <div>
                <label>Organization Name:</label>
                <input
                  type="Text"
                  placeholder="Organization name"
                  value={orgname}
                  onChange={(e) => {
                    setorgname(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Degree:</label>
                <input
                  type="Text"
                  placeholder="Degree"
                  value={degree}
                  onChange={(e) => {
                    setdegree(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Time Period:</label>
                <input
                  type="Text"
                  placeholder="EX(AUG 2023-July 2027)"
                  value={orgTimePeriod}
                  onChange={(e) => {
                    setorgTimePeriod(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="Skill">
              <label>Skill's</label>
              <textarea
                placeholder="Markup languages,Javascript,Management etc"
                typeof="text"
                value={skill}
                onChange={(e) => {
                  setskill(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="Experience">
            <h1>Experience's</h1>
            <div className="Experience-section">
              <div>
                <div>
                  <label>Organization Name:</label>
                  <input
                    type="text"
                    placeholder="XYZ organization"
                    value={orgExperience}
                    onChange={(e) => {
                      setorgExperience(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Domain:</label>
                  <input
                    type="text"
                    placeholder="ex(Web Development)"
                    value={domain}
                    onChange={(e) => {
                      setdomain(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Time Period:</label>
                  <input
                    type="text"
                    placeholder="ex(Aug 2023-Dec 2023)"
                    value={expTimeperiod}
                    onChange={(e) => {
                      setexpTimeperiod(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Experience Detail</label>
                  <textarea
                    type="text"
                    placeholder="Detail"
                    value={experiencedetail}
                    onChange={(e) => {
                      setexperiencedetail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label>Organization Name:</label>
                  <input
                    type="text"
                    placeholder="XYZ organization"
                    value={orgExperience1}
                    onChange={(e) => {
                      setorgExperience1(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Domain:</label>
                  <input
                    type="text"
                    placeholder="ex(Web Development)"
                    value={domain1}
                    onChange={(e) => {
                      setdomain1(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Time Period:</label>
                  <input
                    type="text"
                    placeholder="ex(Aug 2023-Dec 2023)"
                    value={expTimeperiod1}
                    onChange={(e) => {
                      setexpTimeperiod1(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Experience Detail</label>
                  <textarea
                    type="text"
                    placeholder="Detail"
                    value={experiencedetail1}
                    onChange={(e) => {
                      setexperiencedetail1(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Experience">
            <h1>Project Detail:</h1>
            <div className="project-section">
              <div>
                <div>
                  <label>Project Name:</label>
                  <input
                    type="text"
                    placeholder="Project Name:"
                    value={Projectname}
                    onChange={(e) => {
                      setprojectname(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Tech stack:</label>
                  <input
                    type="text"
                    placeholder="ex(Reactjs,Angular)"
                    value={stack}
                    onChange={(e) => {
                      setstack(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Project Url:</label>
                  <input
                    type="url"
                    placeholder="Project Url"
                    value={projecturl}
                    onChange={(e) => {
                      setprojecturl(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>What you learn</label>
                  <textarea
                    type="text"
                    placeholder="Detail"
                    value={projectlearn}
                    onChange={(e) => {
                      setprojectlearn(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label>Project Name:</label>
                  <input
                    type="text"
                    placeholder="Project Name:"
                    value={Projectname1}
                    onChange={(e) => {
                      setprojectname1(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Tech stack:</label>
                  <input
                    type="text"
                    placeholder="ex(Reactjs,Angular)"
                    value={stack1}
                    onChange={(e) => {
                      setstack1(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>Project Url:</label>
                  <input
                    type="url"
                    placeholder="Project Url"
                    value={projecturl1}
                    onChange={(e) => {
                      setprojecturl1(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label>What you learn</label>
                  <textarea
                    type="text"
                    placeholder="Detail"
                    value={projectlearn1}
                    onChange={(e) => {
                      setprojectlearn1(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <Link to="/Resume">
            <button className="submit" onClick={SendData}>
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Templatecontainer;
