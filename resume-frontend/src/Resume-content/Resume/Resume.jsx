import React, { useContext, useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Template1 from './Template1/Template1';
import Template2 from './Template2/Template2';
import Template3 from './Template3/Template3';
import { Selector } from '../../SelectorTemplate';
import './Resume.css';
import { Backendlink } from '../../Backendlink';

const Resume = () => {
  const { selectedTemplate } = useContext(Selector);
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [Data, setData] = useState([]); 
  const [signdata, setsigndata] = useState([]);
  const templateRef = useRef();

  const userdata = async () => {
    try {
      const response = await fetch(`${Backendlink}/signup`);
      const data = await response.json();
      console.log("Signup data:", data);
      setsigndata(Array.isArray(data) ? data : []); 
    } catch (error) {
      console.error("Error in catch:", error);
    }
  };

  useEffect(() => {
    userdata();
  }, []);

  console.log("Signdata:", signdata);
  const userId = signdata.length > 0 ? signdata[0].name : ''; 

  const fetchReview = async () => {
    try {
      const token = localStorage.getItem('token'); 
      const response = await fetch(`${Backendlink}/Review`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (Array.isArray(data)) {
        setData(data);
      } else {
        console.error('Expected an array but got:', data);
      }
    } catch (error) {
      console.error('Error in fetching reviews:', error);
    }
  };
  

  useEffect(() => {
    fetchReview();
  }, []);

  const submitReview = async () => {
    try {
      const response = await fetch(`${Backendlink}/Review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating,
          review,
          userId,
          selectedTemplate,
        }),
      });

      const data = await response.json();
      fetchReview();
    } catch (error) {
      console.error('Error in submitting review:', error);
    }
  };

  const downloadTemplate = async () => {
    try {
      const element = templateRef.current;
      const canvas = await html2canvas(element, { scrollY: -window.scrollY });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'px', [canvas.width, canvas.height]);
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(`resume-${selectedTemplate.toLowerCase()}.pdf`);
    } catch (error) {
      console.error('Error in downloading template:', error);
    }
  };

  return (
    <div className='Resume'>
      {selectedTemplate === 'Template1' && (
        <div ref={templateRef}>
          <Template1 />
        </div>
      )}
      {selectedTemplate === 'Template2' && (
        <div ref={templateRef}>
          <Template2 />
        </div>
      )}
      {selectedTemplate === 'Template3' && (
        <div ref={templateRef}>
          <Template3 />
        </div>
      )}
      <div className='Reviews'>
        <h1>Reviews</h1>
        {Data.length > 0 ? (
          Data.filter((value) => value.selectedTemplate === selectedTemplate).map((value, index) => (
            <div className='Reviewsection' key={index}>
              <h2>@{value.userId}</h2>
              <p>
                Rating: {value.rating} Review: {value.review}
              </p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
        <div>
          <h1>Add Review</h1>
          <div>
            <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
              <option value={5}>5 - Very Good</option>
              <option value={4}>4 - Good</option>
              <option value={3}>3 - Average</option>
              <option value={2}>2 - Below Average</option>
              <option value={1}>1 - Not Good</option>
            </select>
            <input
              type='text'
              placeholder='Review'
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <button onClick={submitReview}>Post</button>
          </div>
        </div>
      </div>
      <div className='dwnload-edit'>
        <button onClick={downloadTemplate}>Download</button>
        <button
          onClick={() => {
            window.history.back();
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Resume;
