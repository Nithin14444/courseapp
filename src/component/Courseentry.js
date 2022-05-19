import React, { useState } from 'react'
import Header from './Header'

const Courseentry = () => {
    var [CourseTitle,setTitle]=useState("")
    var [Duration,setDuration]=useState("")
    var [Description,setDescription]=useState("")
    var [venue,setVenue]=useState("")
    var [date,setDate]=useState("")
    
    const subData=()=>{
        const data={"CouseTittle":CourseTitle,"Duration":Duration,"Description":Description,"venue":venue,"date":date}
        console.log(data)
    }
  return (
    <div>
        <Header/>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12">
        <div class="row g-2">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12"><label for="" class="form_label">Course-Title</label>
            <div class="col col-12 col-sm-6 col-md-6 col-lg-6">
            <input type="text" className="form-control" onChange={(e)=>{setTitle(e.target.value)}}/></div>
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12"><label for="" class="form_label">Duration</label>
            <div class="col col-12 col-sm-6 col-md-6 col-lg-6">
            <input type="text" className="form-control" onChange={(e)=>{setDuration(e.target.value)}}/></div>
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12"><label for="" class="form_label">Description</label>
            <div class="col col-12 col-sm-6 col-md-6 col-lg-6">
            <input type="text" className="form-control" onChange={(e)=>{setDescription(e.target.value)}}/></div>
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12"><label for="" class="form_label">Venue</label>
            <div class="col col-12 col-sm-6 col-md-6 col-lg-6">
            <input type="text" className="form-control" onChange={(e)=>{setVenue(e.target.value)}}/></div>
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12"><label for="" class="form_label">Date</label>
            <div class="col col-12 col-sm-6 col-md-6 col-lg-6">
            <input type="text" className="form-control" onChange={(e)=>{setDate(e.target.value)}}/></div>
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12">
            <button className="btn btn-success" onClick={subData}>Register</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
  )
}

export default Courseentry