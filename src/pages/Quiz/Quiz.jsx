import { useEffect, useState } from 'react';
import './quiz.css'
import axios, { all } from 'axios';

function Quiz() {
    let [questions, setQuestions] = useState([]);
    let [count, setCount] = useState(0);
    let [singleQuestion, setSingleQuestion] = useState({});
    let [selectedAnswer, setSelectedAnswer] = useState({});
    let [RightAnswer, setRightAnswer] = useState(0);

    useEffect(() => {
        getQuizQuestions();
    }, [setQuestions])

    let getQuizQuestions = async () => {
        try {
            let response = await axios.get("http://localhost:3000/QuizQuestions");
            setQuestions(response.data);
            setSingleQuestion(response.data[0])
            setCount(0);

        } catch (error) {
            console.log(err);
        }
    }

    const handleNextQuestion = () => {
        
    }

    const handlePreviousQuestion = () => {
        
    }

    let handleChange = (e) => {
        let { name, value } = e.target;
        console.log(value);
       
        setSelectedAnswer({ ...selectedAnswer, [name]: value });
    }

    let handleSubmit = () => {
     
        let data;
        if(selectedAnswer.options == singleQuestion.answer){
            data = RightAnswer+1;
            setRightAnswer(data);
        }
        else{
            data = RightAnswer;
            setRightAnswer(data)
        }
        console.log(data);

        let c = count+1;
        if(questions.length==count){

        }
        else{
            setSingleQuestion(questions[c])

        }
        setCount(c);
    }


    return (
        <>
            <div className='quiz-box'>
              

                
                            <>
                                {questions.length==count?
                                    "over":
                                    <>
                                
                                    <div key={singleQuestion.id}>
                                        <h1>Q {singleQuestion.question}</h1>
                                        <label htmlFor='optionOne' className='option-wrap'>
                                            <input type="radio" name="options" id="optionOne" value={singleQuestion.optionOne} onChange={(e) => handleChange(e)} />
                                            <h2>A. {singleQuestion.optionOne}</h2>
                                            {/* <h2 style={finalAnswer ? { color: "green" } : { color: "red" }} >A. {v.optionOne}</h2> */}
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

                                    <input type="submit" value="submit" onClick={()=>handleSubmit()} />
                                    </>
                                }
                                    
                                
                            </>
                        
                

                {/* <div className="navigation">
                    <button disabled={currentPage === 1} onClick={handlePreviousQuestion}>
                        Previous
                    </button>
                    <button disabled={currentPage === totalPages} onClick={handleNextQuestion}>
                        Next
                    </button>
                </div> */}
            </div >
        </>
    )
}
export default Quiz;





// useEffect(() => {
//     axios.get("http://localhost:3000/QuizQuestions")
//         .then((res) => {
//             {
//                 res.data.map((v, i) => {
//                     // allAnswersList.push(v.answer);
//                     setallAnswerArr([...allAnswerArr, v.answer]);
//                     // setChoices(v.answer)
//                 })
//             }
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     // setallAnswerArr(allAnswersList);
// }, [])

// setallAnswerArr(allAnswersList);
// console.log(allAnswerArr);





//     useEffect(() => {
//         getQuizQuestions();
//     }, []);

// const getQuizQuestions = async () => {
//     try {
//         const response = await axios.get('http://localhost:3000/QuizQuestions');
//         setQuestions(response.data);
//         setTotalPages(Math.ceil(response.data.length / perPageData));
//     } catch (err) {
//         console.error(err);
//     }
// };

//     const handleNextQuestion = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const handlePreviousQuestion = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const getVisibleQuestions = () => {
//         const startIndex = (currentPage - 1) * perPageData;
//         const endIndex = startIndex + perPageData;
//         return questions.slice(startIndex, endIndex);
//     };

//     return (
//         <>
//             <div className='quiz-box'>
//                 {getVisibleQuestions().map((question, index) => (
//                     <div key={question.id}> {/* Add unique key for each question */}
//                         <h1>Q{index + 1}. {question.question}</h1>
//                         <h2>A. {question.optionOne}</h2>
//                         <h2>B. {question.optionTwo}</h2>
//                         <h2>C. {question.optionThree}</h2>
//                         <h2>D. {question.optionFour}</h2>
//                     </div>
//                 ))}

//                 <div className="navigation">
//                     <button disabled={currentPage === 1} onClick={handlePreviousQuestion}>
//                         Previous
//                     </button>
//                     <button disabled={currentPage === totalPages} onClick={handleNextQuestion}>
//                         Next
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Home;




{/* <div className='quiz-box'>
                {
                    questions.map((v, i) => {
                        i += 1;
                        return (
                            <>
                                <h1>Q{i}. {v.question}</h1>
                                <h2>A. {v.optionOne}</h2>
                                <h2>B. {v.optionTwo}</h2>
                                <h2>C. {v.optionFour}</h2>
                                <h2>D. {v.optionThree}</h2>
                            </>
                        )
                    })
                }
            </div> */}
{/* {
                page.map((v, i) => {
                    return (
                        <button onClick={() => setcurrentPage(v)}>{v}</button>
                    )
                })
            } */}




// let pagination = () => {
//     let getQuizData = axios.get("http://localhost:3000/QuizQuestions")
//         .then((res) => {
//             let totalPages = Math.ceil((res.data).length / perPageData);
//             let num = [];
//             for (let i = 1; i <= totalPages; i++) {
//                 num.push(i);
//             }
//             // setPage(num);
//             let lastIndex = currentPage * perPageData;
//             let firstIndex = lastIndex - perPageData;
//             let paginationData = (res.data).slice(firstIndex, lastIndex);
//             // console.log(paginationData);
//             let pageDetails = paginationData ? paginationData : [];
//             setQuestions(pageDetails);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }


// const getVisibleQuestions = () => {

// let totalPages = Math.ceil((res.data).length / perPageData);
// let num = [];
// for (let i = 1; i <= totalPages; i++) {
//     num.push(i);
// }
// setPage(num);


// const startIndex = (currentPage - 1) * perPageData;
// const endIndex = startIndex + perPageData;


// let paginationData = questions.slice(startIndex, endIndex);
// console.log(paginationData);
// let pageDetails = paginationData ? paginationData : [];
// setQuestions(pageDetails);

// return questions.slice(startIndex, endIndex);
// }
