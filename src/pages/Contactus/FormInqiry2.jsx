import { faBuilding, faComment, faComments, faEnvelope, faEnvelopeOpen, faLocationDot, faMapPin, faMobileAlt, faPerson, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Map from "../../Slider/Map/Map";
import { ErrorMessage, Formik } from 'formik';
import "./Form.css";
import {Countries} from "./Countries.js"
import { useState } from "react";
function FormInquiry2() {
  const [phoneId,setPhoneId]=useState("+02")
  function ChangeMobNumber(n){
    for (let i=0;i<Countries.length;i++){
      if(Countries[i]["name"]==n){
        setPhoneId(Countries[i]["phone"])
 
      }
    }

  }
  return (
    <div className="Formcontainer">
      <h3 className="h3tag">Send Message</h3>

      <div className="container156">
      <Formik
       initialValues={{ email: '', name: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (


        <form>
          <div className="cont2elmnts">
            <div>
              <label htmlFor="fname">Name</label>
              <div className="myinput">
                <FontAwesomeIcon icon={faUser} />
                <input
    
     name="name"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.name}


                  type="text"
           
                   placeholder="Your name.."
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone"  >Phone number:</label>
              <div className="myinput">
                <FontAwesomeIcon icon={faMobileAlt} />

                <input
                onChange= {(e)=>setPhoneId(e.target.value)}
                
                   name="phone"
                  type="tel"
                
                  onKeyDown= {handleChange}
                  onBlur={handleBlur}
                  value={phoneId   }
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
               />
              </div>
              <ErrorMessage name="phone" component="div" />
            </div>
          </div>

          <div className="cont2elmnts">
            <div>
              <label htmlFor="fname">Company</label>
              <div className="myinput">
                <FontAwesomeIcon icon={faBuilding} />
                <input
                  type="text"
                 
                  name="firstname"
                  placeholder="Organization"
                />
              </div>
            </div>
            <div>
              <label htmlFor="country">Country</label>

              <div className="myinput">
                <FontAwesomeIcon icon={faLocationDot} />
                <select id="country" name="country" onChange={(e)=>ChangeMobNumber(e.target.value)}>
                <option  className="option789" value="Egypt">{"Egypt"} </option>
                {Countries.map((c,k)=>{
                  return (
                          <option key={k} className="option789" value={c["name"]}> {c["name"]}</option>
                  )
                })}
            
                </select>
              </div>
            </div>
          </div>

          <label htmlFor="fname">Email</label>
          <div className="myinput">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
     type="text"
     name="email"
     onChange={handleChange}
     onBlur={handleBlur}
     value={values.email}


         
           
            
              placeholder=" Email.."
            />
                 

          </div>   
             <ErrorMessage name="email" component="div" />
          <label htmlFor="fname">Confirm Email</label>
          <div className="myinput">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="text"
            
              name="firstname"
              placeholder="Confirm Email.."
            />
          </div>

          <label htmlFor="subject">Subject</label>
          <div className="myinput">
            <FontAwesomeIcon icon={faComments} style={{alignSelf:"flex-start"}}/>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "100px" ,maxWidth:"100%"}}
            ></textarea>
          </div>   
          
       
  <div style={{position:"relative"}}>
<label htmlFor="images" className="drop-title ">Drop Files Here</label>
      <input  className="drop-container"   type="file" id="images" accept=".jpg , .pdf"   multiple  />

  </div>
 

<div className="check777">
         
            <input type="checkbox"    id="vehicle3" name="vehicle3" value="Boat"/>
<label htmlFor="vehicle3"> Let me subscribe and receive news letters weekly.</label>
          </div>


          <input type="submit" value="Submit" />
        </form>
               )}
               </Formik>
      </div>
      <Map />
    </div>
  );
}

export default FormInquiry2;
