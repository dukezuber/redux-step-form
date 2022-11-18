import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { useNavigate } from 'react-router'
import { Education } from '../../../redux/action/user'
import { useDispatch,useSelector } from 'react-redux';
import Container from 'react-bootstrap/esm/Container'


export default function () {
  const navigate = useNavigate()
let [education ,seteducation]=useState({})
const dispatch = useDispatch();
  useEffect(()=>{
    if(education){
      dispatch(Education(education))
    }
  },[education])

  const edu = useSelector((state) => state.Education.dataEdu);
  console.log("edu",edu);


 const  handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    seteducation(values => ({...values, [name]: value}))
  }
  const nextBtn=(e)=>{
    navigate("/summery")

  }


  return (
    <div>
      <Container>
      <Row className="center mb-4">
        <Col><h1>Education details</h1></Col>
      </Row>
      <Row>
        <Col> <div class="mb-3">
          <label class="form-label">School Name:</label>
          <input type="text" name="schoolname" value={education.schoolname} onChange={ (e)=>handleChange(e) } class="form-control" />
          {/* <p className='text-danger'>{errors.firstname}</p> */}
        </div>
        </Col>
        
      </Row>
      <Row>
      <Col ><div class="mb-3">
      <label class="form-label">Address :</label>
      <input type="text" name="address" value={education.ddress}  onChange={(e)=>handleChange(e)} class="form-control"/>
      {/* <p className='text-danger'>{errors.lastname}</p> */}
    </div>
    </Col>
      </Row>
      <Row>
      <Col ><div class="mb-3">
      <label class="form-label">grade :</label>
      <input type="text" name="grade" value={education.grade}  onChange={(e)=>handleChange(e)} class="form-control"/>
      {/* <p className='text-danger'>{errors.lastname}</p> */}
    </div>
    </Col>
      <Col ><div class="mb-3">
      <label class="form-label">passing year:</label>
      <input type="text" name="year" value={education.year}  onChange={(e)=>handleChange(e)} class="form-control"/>
      {/* <p className='text-danger'>{errors.lastname}</p> */}
    </div>
    </Col>
      </Row>
      <button type="submit" onClick={(e)=>nextBtn(e)} class="btn btn-primary">Next</button>
      </Container>
      </div>
      
  )
}
