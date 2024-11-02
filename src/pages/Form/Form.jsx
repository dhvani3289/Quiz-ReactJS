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
                        <h2 className='register'>ADD QUESTION</h2>
                        <input type="text" placeholder='QUESTION' name='question' value={quizQuestionData.question ? quizQuestionData.question : ""} onChange={(e) => handleChange(e)} />
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








