import React, { useState } from 'react';
import SignUp from './components/SignUp';
import PersonalInfo from './components/PersonalInfo';
import OtherInfo from './components/OtherInfo';
const MultiStepForm = () => {
  const [page, setPage] = useState(0);
  const formTitles = ['Sign Up', 'Personal Details', 'Additional Details'];
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    age: '0',
    gender: '',
    nationality: '',
    hobbies: '',
  });
  const [isValid, setIsValid] = useState(false);
  //   const pageDisplay = () => {
  //     if (page == 0) {
  //       return <SignUp />;
  //     } else if (page == 1) {
  //       return;
  //     }
  //   };
  return (
    <div>
      <h1>Code Download Form</h1>
      <div className="progressbar">
        <div
          className="activeColor"
          style={{
            width: page === 0 ? '33.33%' : page === 1 ? '66.66%' : '100%',
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="title">
          <h1>{formTitles[page]}</h1>
        </div>
        <div className="midbox">
          {page === 0 && (
            <div>
              <SignUp
                formData={formData}
                setFormData={setFormData}
                setIsValid={setIsValid}
              />
            </div>
          )}
          {page === 1 && (
            <div>
              <PersonalInfo formData={formData} setFormData={setFormData} />
            </div>
          )}
          {page === 2 && (
            <div>
              <OtherInfo formData={formData} setFormData={setFormData} />
            </div>
          )}
        </div>
        <div className="footer">
          <button
            style={{
              display: page == 0 ? 'none' : 'block',
            }}
            onClick={() => setPage((currPage) => currPage - 1)}
          >
            Prev
          </button>
          <button
            style={{ background: page === 2 ? 'green' : '#808135' }}
            disabled={page === 0 && !isValid}
            onClick={() => {
              if (page === formTitles.length - 1) {
                alert('Form Submitted');
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === 2 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
