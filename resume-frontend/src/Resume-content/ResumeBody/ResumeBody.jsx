import React, { useContext, useState } from 'react'
import resumepic from "./Resumepic.png"
import { TemplateExample } from '../TemplateExample/TemplateExample'
import "./ResumeBody.css"
import { useNavigate } from 'react-router-dom'
import { Selector } from '../../SelectorTemplate'
export const ResumeBody = () => {
    const navigate=useNavigate();
    const Templateselect=()=>{
        navigate("/Templatecontainer")
    }
    const [content,setcontent]=useState(4);
    const { setSelectedTemplate } = useContext(Selector); 
  return (
   <main>
    <section className='Resumebody'>
        <div className='resume-tag'>
            <h1><span>E</span>levate <span>Y</span>our <span>C</span>areer <span>w</span>ith a <span>W</span>inning <span>R</span>esume</h1>
            <p>Your resume is your first impression. Make it count with our user-friendly builder, designed to help you create a compelling and effective resume effortlessly.</p>
            <a href='#build'><div className='Build'>Build Your Resume</div></a>
        </div>
        <img src={resumepic} alt='resumepic' height={700} className='img'/>
    </section>
    <section className='SelectTemplate'>
    <h1>Select Your <span>Template</span>:-</h1>
    <div className='Templates'id='build'>
    {TemplateExample.slice(0,content).map((val,index)=>(
        <div onClick={()=>{
            setSelectedTemplate(val.Id)
        }}>
        <div onClick={Templateselect}><img src={val.Template} alt={val.Id} height={300}/>
        <div className='Templateselction'>{val.Id}</div></div>
        </div>
    ))}
    </div>
    <div onClick={()=>{
            setcontent(content + 4)
    }} className='ViewMore'><h3>view more...</h3></div>
    </section>
   </main>
  )
}
