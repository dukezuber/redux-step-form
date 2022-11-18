import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {UserpersonalDetails} from '../../../redux/action/user'
// import {Link} from 'react-router-dom'

function PersonalDetails() {
  const navigate = useNavigate()
  let [name, setName] = useState({})
  const dispatch = useDispatch();
  useEffect(()=>{
    if(name){
      dispatch(UserpersonalDetails(name))
    }
  },[name])

  const data = useSelector((state) => state.PersonalDetails.name);
  console.log("data",data);

    

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setName(values => ({...values, [name]: value}))
  }
  const nextBtn=(e)=>{

    navigate("Education")
  }


  return (
    <Container className="mt-4 pb-4 image">
      <Row className="center mb-4">
        <Col><h1>General Information</h1></Col>
      </Row>
      <Row>
        <Col> <div class="mb-3">
          <label class="form-label">First Name:</label>
          <input type="text" name="firstname" value={name.firstname} onChange={ (e)=>handleChange(e) } class="form-control" />
          {/* <p className='text-danger'>{errors.firstname}</p> */}
        </div>
        </Col>
        <Col ><div class="mb-3">
            <label class="form-label">Last Name:</label>
            <input type="text" name="lastname" value={name.lastname}  onChange={(e)=>handleChange(e)} class="form-control"/>
            {/* <p className='text-danger'>{errors.lastname}</p> */}
          </div>
          </Col>
      </Row>
      <Row>
          <Col><div class="mb-3">
            <label class="form-label">Contact Number:</label>
            <input type="number"  name="contact" value={name.contact}  onChange={(e)=> handleChange(e)} class="form-control"/>
            {/* <p className='text-danger'>{errors.contact}</p> */}
          </div></Col>
        </Row>
        <Row>
          <Col><div class="mb-3">
            <label class="form-label">Address:</label>
            <input type="text" name="address" value={name.address}  onChange={(e)=> handleChange(e)} class="form-control"/>
            {/* <p className='text-danger'>{errors.address}</p> */}
          </div></Col>
        </Row>
        <Row>
          <Col><div class="mb-3">
            <label class="form-label">Date Of Birth:</label>
            <input type="date" name="dob" value={name.dob}  onChange={(e)=> handleChange(e)} class="form-control"/>
            {/* <p className='text-danger'>{errors.dob}</p> */}
          </div></Col>
        </Row >


      <button type="submit" onClick={(e)=>nextBtn(e)} class="btn btn-primary">Next</button>
    </Container>
  );
}

export default PersonalDetails;