import React, { useEffect, useState } from 'react';
import '../All Project/AllProjectStyle.css';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IoCloseCircleSharp } from "react-icons/io5";

function AllProjects() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { allProject } = useSelector(state => state.allProjects);

  // Function to check if projects are empty and redirect if necessary
  function refreshPage() {
    if (!allProject || allProject.length === 0) {
      navigate('/My_Portfolio/');
    }
  }

  useEffect(() => {
    refreshPage();
    setData(allProject);
  }, [allProject]); // Include allProject as a dependency

  return (
    <div className='t-0'>
      <div className='allProject-navbar '>
        <div className='container nav'>
          <h3 className='nav-tittle'>All Projects</h3>
          <Link to={-1} className='close-button'>
            <IoCloseCircleSharp />
          </Link>
        </div>
      </div>
      <div className='allProject'>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className='text-center'>No</th>
              <th>Project Name</th>
              <th className='text-center'>View Project</th>
            </tr>
          </thead>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <td className='text-center'>{index + 1}</td>
                  <td>{item?.title}</td>
                  <td className='text-center'>
                    <Link to={`/project/${item?.id}`} className='project_links'>
                      View
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <tr>
                <td colSpan="3">Data Loading Problems</td>
              </tr>
            </tbody>
          )}
        </Table>
      </div>
    </div>
  );
}

export default AllProjects;
