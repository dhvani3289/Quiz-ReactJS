import { useEffect, useState } from 'react';
import './quiz.css'
import axios from 'axios';

function Quiz() {
    let [questions, setQuestions] = useState([]);
    let [count, setCount] = useState(0);
    let [singleQuestion, setSingleQuestion] = useState({});
    let [selectedAnswer, setSelectedAnswer] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);  // setting question numbers
    let [score, setScore] = useState(0);
    const [result, setResult] = useState([]);


    useEffect(() => {
        getQuizQuestions();
    }, [setQuestions])

    let getQuizQuestions = async () => {
        try {
            let response = await axios.get("http://localhost:3000/QuizQuestions");
            setQuestions(response.data);
            setSingleQuestion(response.data[0]);
            setCurrentQuestion(0);
            setCount(0);
        } catch (error) {
            console.log(error);
        }
    }

    let handleChange = (e) => {
        let { name, value } = e.target;
        setSelectedAnswer({ ...selectedAnswer, [name]: value });
    }

    let handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);  //updating question number

        // checking the answer and setting the score(marks)
        if (selectedAnswer.options == singleQuestion.answer) {
            setScore(score + 1);
        }

        // updating question
        let c = count + 1;
        if (questions.length == count) {
            console.log("over");
        }
        else {
            setSingleQuestion(questions[c])
        }
        setCount(c);

        setResult([...result, {
            question: singleQuestion.question,
            correctAnswer: singleQuestion.answer,
            userAnswer: selectedAnswer.options
        }]);
    }

    let handlePreviousQuestion = () => {
        let c = count - 1;
        if (questions.length == 0) {
            console.log("over");
        }
        else {
            setSingleQuestion(questions[c])
        }
        setCount(c);
    }


    const handleRestartQuiz = () => {
        setCurrentQuestion(0);
        setSingleQuestion(questions[0]);
        setSelectedAnswer({});
        setCount(0);
    };

    return (
        <>
            <div className='quiz-box'>
                <>
                    {questions.length == count ?
                        <>
                            <h2>Quiz Completed!</h2>
                            <button onClick={handleRestartQuiz} className='restart-btn'>Restart Quiz</button>
                            <div>
                                <span className='result-heading'>
                                    <h2> Your score {score}</h2>
                                </span>

                                {result.map((val, index) => (
                                    <div key={index} className='result'>
                                        <p>Question {index + 1}: {val.question}</p>
                                        <p className={val.correctAnswer === val.userAnswer ? 'correct' : 'incorrect'}>
                                            Your Answer: {val.userAnswer}
                                        </p>
                                        <p>
                                            Correct Answer: {val.correctAnswer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </>
                        :
                        <>
                            <div key={singleQuestion.id}>
                                <h1 style={{ marginBottom: "20px" }}>Question {currentQuestion + 1} of {questions.length}</h1>
                                <h1>{singleQuestion.question}</h1>
                                <label htmlFor='optionOne' className='option-wrap'>
                                    <input type="radio" name="options" id="optionOne" value={singleQuestion.optionOne} onChange={(e) => handleChange(e)} />
                                    <h2>A. {singleQuestion.optionOne}</h2>
                                </label>

                                <label htmlFor='optionTwo' className='option-wrap'>
                                    <input type="radio" name="options" id="optionTwo" value={singleQuestion.optionTwo} onChange={(e) => handleChange(e)} />
                                    <h2>B. {singleQuestion.optionTwo}</h2>
                                </label>

                                <label htmlFor='optionThree' className='option-wrap'>
                                    <input type="radio" name="options" id="optionThree" value={singleQuestion.optionThree} onChange={(e) => handleChange(e)} />
                                    <h2>C. {singleQuestion.optionThree}</h2>
                                </label>

                                <label htmlFor='optionFour' className='option-wrap'>
                                    <input type="radio" name="options" id="optionFour" value={singleQuestion.optionFour} onChange={(e) => handleChange(e)} />
                                    <h2>D. {singleQuestion.optionFour}</h2>
                                </label>
                            </div>

                            <div className="navigation">
                                <button disabled={currentQuestion === 0} onClick={() => handlePreviousQuestion()}>
                                    Previous
                                </button>
                                <button onClick={() => handleNextQuestion()}>
                                    Next
                                </button>
                            </div>

                        </>
                    }
                </>

            </div >
        </>
    )
}
export default Quiz;


