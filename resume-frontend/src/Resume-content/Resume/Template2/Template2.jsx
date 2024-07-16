import React , {useState,useEffect} from 'react'
import { Backendlink } from '../../../Backendlink';
import "./Template2.css";
const Template2 = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      try {
        const response = await fetch(`${Backendlink}/Resume`);
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
        <p>Email: {data.email}</p>
        <p>Phone: {data.mobileNo}</p>
        <a href={data.LinkedIn}><p>LinkedIn: {data.LinkedIn}</p></a>
      </div>
      <div className="section">
        <h2>Education</h2>
        <div className="item">
          <h3>{data.orgname}</h3>
          <p>{data.degree}</p>
          <p>{data.orgTimePeriod}</p>
        </div>
      </div>
      <div className="section">
        <h2>Experience</h2>
        <div className="item">
          <h3>{data.orgExperience}</h3>
          <p>{data.domain}</p>
          <p>{data.expTimeperiod}</p>
          <ul>
            <li>{data.experiencedetail}</li>
          </ul>
        </div>
        <div className="item">
          <h3>{data.orgExperience1}</h3>
          <p>{data.domain1}</p>
          <p>{data.expTimeperiod1}</p>
          <ul>
            <li>{data.experiencedetail1}</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <h2>Projects</h2>
        <div className="item">
          <h3>{data.Projectname}</h3>
          <p>Description: {data.projectlearn}</p>
          <p>Technologies: {data.stack}</p>
          <p>View: <a href={data.projecturl} target="_blank" rel="noopener noreferrer">{data.projecturl}</a></p>
        </div>
        <div className="item">
          <h3>{data.Projectname1}</h3>
          <p>Description: {data.projectlearn1}</p>
          <p>Technologies: {data.stack1}</p>
          <p>View: <a href={data.projecturl1} target="_blank" rel="noopener noreferrer">{data.projecturl1}</a></p>
        </div>
      </div>
      <div className="section">
        <h2>Skills</h2>
        <ul>
          <li>{data.skill}</li>
        </ul>
      </div>
    </div>
  )
}

export default Template2