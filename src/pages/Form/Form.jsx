import './form.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
    let [quizQuestionData, setQuizQuestionData] = useState({});

    let handleChange = (e) => {
        let { name, value } = e.target
        setQuizQuestionData({ ...quizQuestionData, [name]: value })
    }
    console.log(quizQuestionData);

    let submitData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/QuizQuestions", quizQuestionData)
            .then((res) => {
                toast.success("SUBMITTED")
                console.log(res.data);
            })
            .catch((err) => {
                toast.error("FAILED TO SUBMIT")
                console.log(err);
            })
        setQuizQuestionData({});
    }

    return (
        <>
            <div className='signup-wrap'>
                <form method="post" onSubmit={(e) => submitData(e)}>
                    <div className="box">
                        <h2 className='register'>QUIZ QUESTIONS </h2>
                        <input type="text" placeholder='QUESTION' name='question' value={quizQuestionData.question ? quizQuestionData.question : ""} onChange={(e) => handleChange(e)} />
                        {/* <div className='error'> {validationErrors.username && <p>{validationErrors.username}</p>}</div> */}
                        <input type="text" placeholder='OPTION 1' name='optionOne' value={quizQuestionData.optionOne ? quizQuestionData.optionOne : ""} onChange={(e) => handleChange(e)} />
                        <input type="text" placeholder='OPTION 2' name='optionTwo' value={quizQuestionData.optionTwo ? quizQuestionData.optionTwo : ""} onChange={(e) => handleChange(e)} />
                        <input type="text" placeholder='OPTION 3' name='optionThree' value={quizQuestionData.optionThree ? quizQuestionData.optionThree : ""} onChange={(e) => handleChange(e)} />
                        <input type="text" placeholder='OPTION 4' name='optionFour' value={quizQuestionData.optionFour ? quizQuestionData.optionFour : ""} onChange={(e) => handleChange(e)} />
                        <input type="text" placeholder='ANSWER' name='answer' value={quizQuestionData.answer ? quizQuestionData.answer : ""} onChange={(e) => handleChange(e)} />
                        <button type="submit" className='register-btn'>SUBMIT QUESION</button>
                    </div>
                </form >
            </div >
            <ToastContainer />
        </>
    )
}

export default Form;

























// let [validationErrors, setValidationErrors] = useState({});

// let validation = () => {
//     let validationMessages = {};
//     if (!registerData.username) {
//         validationMessages.username = 'Username is required';
//     }
//     if (!registerData.email) {
//         validationMessages.email = 'Email is required';
//     }
//     else if (!registerData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
//         validationMessages.email = 'You have entered an invalid email address!'
//     }
//     if (!registerData.password) {
//         validationMessages.password = 'Password is required';
//     }
//     else if (!registerData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)) {
//         validationMessages.password = 'Enter a password between 7 to 15 characters which contain at least one numeric digit and a special character.'
//     }
//     if (!registerData.termsAndConditions) {
//         validationMessages.termsAndConditions = 'Please agree to the Terms and Conditions before submitting.';
//     }
//     return validationMessages
// }






// let formErrors = validation();
// if (Object.keys(formErrors).length > 0) {
//     setValidationErrors(formErrors)
// }
// else {
//     let check = await axios.get("http://localhost:3000/users?email=" + registerData.email);
//     console.log(check.data, "check");
//     if (check.data.length == 0) {
//         if (registerData.password === registerData.confirmPassword) {
//             await axios.post("http://localhost:3000/users", registerData);
//         }
//     }
//     else {
//         toast.error("Email already exists");
//     }
// }


