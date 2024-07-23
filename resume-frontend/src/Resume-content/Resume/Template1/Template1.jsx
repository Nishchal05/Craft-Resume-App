import React, { useEffect, useState } from 'react';
import { Backendlink } from '../../../Backendlink';
import "./Template1.css";

const Template1 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token'); 
      const response = await fetch(`${Backendlink}/Resume`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      setData(responseData);
      console.log("Received data:", responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="resume">
      <div className="header">
        <h1>{data.name}</h1>
        <p>{data.email}</p>
        <p>{data.mobileNo}</p>
        <a href={data.LinkedIn}><p>{data.LinkedIn}</p></a>
      </div>
      <div className="education">
        <h2>Education</h2>
        <div className="school">
          <h3>{data.degree}</h3>
          <p>{data.orgname}</p>
          <p>{data.orgTimePeriod}</p>
        </div>
      </div>
      <div className="experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>{data.domain}</h3>
          <p>{data.orgExperience}</p>
          <p>{data.expTimeperiod}</p>
          <p>{data.experiencedetail}</p>
        </div>
        <div className="job">
          <h3>{data.domain1}</h3>
          <p>{data.orgExperience1}</p>
          <p>{data.expTimeperiod1}</p>
          <p>{data.experiencedetail1}</p>
        </div>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>{data.Projectname}</h3>
          <p>{data.projectlearn}</p>
          <p><strong>Technologies:</strong> {data.stack}</p>
          <a href={data.projecturl}><p><strong>View:</strong> {data.projecturl}</p></a>
        </div>
        <div className="project">
          <h3>{data.Projectname1}</h3>
          <p>{data.projectlearn1}</p>
          <p><strong>Technologies:</strong> {data.stack1}</p>
          <a href={data.projecturl1}><p><strong>View:</strong> {data.projecturl1}</p></a>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>{data.skill}</li>
        </ul>
      </div>

    </div>
  );
};

export default Template1;

