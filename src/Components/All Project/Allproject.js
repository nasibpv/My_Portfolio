import React, { useEffect, useState } from 'react'
import '../All Project/Style.css'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { restList } from '../../action/restaction';
import { Link } from 'react-router-dom';

function Allproject() {
  const dispatch=useDispatch()
  const [datas,setDatas]=useState([])
  const {dataList}=useSelector(state=>state.projects)
    console.log(dataList);

  useEffect(()=>{
    dispatch(restList())
  },[])
  return (
    <div className=''>
<div className='allProject-navbar'>
        <div className='container nav'>
          <h3 className='nav-tittle'>Project</h3>
          <a href='/My_Portfolio/'>X</a>
        </div>
      </div>
<div className='allProject'>
    <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>View Project</th>
                </tr>
              </thead>
     {
      dataList?.map((item,index)=>(
      
              <tbody>
                <tr>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td><Link type='button' to={`/project/${item.id}`} >View Project</Link></td>
                </tr>
              </tbody>
            
      ))
    
      }
      </Table>
</div>

{/* <p >
Admin Module:

Dashboard: Provides an overview of key metrics and activities within the institute.
User Management: Enables the admin to manage user accounts, roles, and permissions.
Course Management: Allows the admin to create, update, and delete courses offered by the institute.
Class Management: Facilitates the scheduling of classes, allocation of classrooms, and assignment of instructors.
Student Enrollment: Handles the admission process, including registration, fee payment, and enrollment in courses.
Staff Management: Manages the information of teaching and non-teaching staff, including recruitment, attendance, and performance evaluation.
Financial Management: Tracks fee collection, generates invoices, and manages financial transactions.
Reporting: Generates various reports such as student attendance, academic performance, financial summaries, etc.
Settings: Configurable settings for the system, including academic calendars, grading systems, and notification preferences.
Staff Module:

Dashboard: Provides personalized information relevant to the staff member's role, such as class schedules, tasks, and announcements.
Attendance Management: Allows staff to mark attendance for their classes and view attendance reports.
Grading and Assessment: Facilitates the grading of assignments, quizzes, and exams, and provides insights into student performance.
Communication: Enables communication with students, parents, and other staff members through messaging or announcements.
Resource Management: Manages teaching materials, textbooks, and other resources required for classes.
Calendar and Schedule: Displays personal schedules, meetings, and deadlines.
Student Module:

Dashboard: Provides students with an overview of their academic progress, upcoming events, and announcements.
Course Registration: Allows students to register for courses, view their enrolled courses, and drop courses if necessary.
Attendance Tracking: Enables students to view their attendance records for each class.
Assignment Submission: Facilitates the submission of assignments, projects, and other course-related tasks.
Grades and Results: Provides access to grades, exam results, and overall academic performance.
Communication: Allows students to communicate with instructors, access course materials, and receive announcements.
Profile Management: Enables students to update personal information, view fee payments, and access academic transcripts.
</p> */}
    </div>
  )
}

export default Allproject