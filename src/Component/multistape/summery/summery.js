import React from 'react';
import {useSelector} from 'react-redux'


function Summery() {
    const data = useSelector((state) => state.PersonalDetails.name);
    const edu = useSelector((state) => state.Education.dataEdu);
    return (
        <div>
          
            
            <div>{data.firstname}</div>
            <div>{data.lastname}</div>
            <div>{data.contact}</div>
            <div>{data.address}</div>
            <div>{data.dob}</div>
            <div>{edu.schoolname}</div>
            <div>{edu.address}</div>
            <div>{edu.grade}</div>
            <div>{edu.year}</div>
           
        </div>
    );
}

export default Summery;