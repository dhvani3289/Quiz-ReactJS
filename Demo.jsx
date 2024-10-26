import { useEffect, useState } from 'react';
import './quiz.css'
import axios from 'axios';
function Quiz() {
    let [questions, setQuestions] = useState([]);
    let result;
    let [currentPage, setCurrentPage] = useState(1);
    let [perPageData, setPerPageData] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    let [selectedAnswer, setSelectedAnswer] = useState({});

    let [choices, setChoices] = useState({});
    let [count, setCount] = useState(1);

    let [finalAnswer, setFinalAnswer] = useState("");
    let [allAnswerArr, setallAnswerArr] = useState([]);


    useEffect(() => {
        getQuizQuestions();
    }, [setQuestions, currentPage])

    useEffect(() => {
        let allAnswersList = [];
        axios.get("http://localhost:3000/QuizQuestions")
            .then((res) => {
                {
                    let allData = res.data.filter((v, i) => {
                        // return v.answer;
                        return setallAnswerArr([...allAnswerArr, v.answer]);

                        // allAnswersList.push(v.answer);
                        // setChoices(v.answer)
                    })
                    console.log(allData)
                }
            })
            .catch((err) => {
                console.log(err);
            })
        // setallAnswerArr(allAnswersList);
    }, [])

    // setallAnswerArr(allAnswersList);
    console.log(allAnswerArr);


    let getQuizQuestions = async () => {
        try {
            let response = await axios.get("http://localhost:3000/QuizQuestions");
            setQuestions(response.data);

            setTotalPages(Math.ceil(response.data.length / perPageData));

            const startIndex = (currentPage - 1) * perPageData;
            const endIndex = startIndex + perPageData;

            let paginationData = response.data.slice(startIndex, endIndex);

            let pageDetails = paginationData ? paginationData : [];
            setQuestions(pageDetails);
        } catch (error) {
            console.log(err);
        }
    }

    const handleNextQuestion = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            setCount(count + 1)
        }
    }

    const handlePreviousQuestion = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setCount(count - 1);
        }
    }

    let handleChange = (e) => {
        let { name, value } = e.target;
        setSelectedAnswer({ ...selectedAnswer, [name]: value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        // console.log(answer);
        // console.log(choices);
        let result = allAnswerArr.filter((v, i) => {
            return v == selectedAnswer.options;
            // console.log(v);
            // console.log(selectedAnswer.options);
            // if (v===selectedAnswer.options) {
            //    return true;
            // }
        })
        console.log(result, "resulllllltttttttt");
        setFinalAnswer(result);
        // console.log(result, "true");
    }


    return (
        <>
            <div className='quiz-box'>
                {
                    questions.map((v, index) => {
                        index = index + 1;
                        // setCount(index);
                        // console.log(count);
                        // console.log(allAnswerArr, "msbs");
                        console.log(finalAnswer, "hegrrtjgrtgfnhw4rbvn");

                        return (
                            <>
                                <form onSubmit={(e) => handleSubmit(e)} action="">
                                    <div key={v.id}>
                                        <h1>Q{count}. {v.question}</h1>
                                        <label htmlFor='optionOne' className='option-wrap'>
                                            <input type="radio" name="options" id="optionOne" value={v.optionOne} onChange={(e) => handleChange(e)} />
                                            {/* {
                                            finalAnswer?
                                            <h2 style={finalAnswer ? { color: "green" } : { color: "red" }} >A. {v.optionOne}</h2>
:
""
                                            } */}
                                            <h2 style={finalAnswer ? { color: "green" } : { color: "red" }} >A. {v.optionOne}</h2>
                                        </label>

                                        <label htmlFor='optionTwo' className='option-wrap'>
                                            <input type="radio" name="options" id="optionTwo" value={v.optionTwo} onChange={(e) => handleChange(e)} />
                                            <h2>B. {v.optionTwo}</h2>
                                        </label>

                                        <label htmlFor='optionThree' className='option-wrap'>
                                            <input type="radio" name="options" id="optionThree" value={v.optionThree} onChange={(e) => handleChange(e)} />
                                            <h2>C. {v.optionThree}</h2>
                                        </label>

                                        <label htmlFor='optionFour' className='option-wrap'>
                                            <input type="radio" name="options" id="optionFour" value={v.optionFour} onChange={(e) => handleChange(e)} />
                                            <h2>D. {v.optionFour}</h2>
                                        </label>
                                    </div>

                                    <input type="submit" value="submit" />

                                    {/* {
                                        finalAnswer ?
                                            <h2>{finalAnswer}</h2>
                                            : ""
                                    } */}

                                    {/* <h1>{finalAnswer}</h1> */}
                                    {/* <h2>{finalAnswer ? "Correct" : "Incorrect"}</h2> */}
                                    {/* <h2>{allAnswerArr[count-1]}</h2> */}

                                    {/* <h2>{!finalAnswer?allAnswerArr[count-1]:"no"}</h2> */}
                                </form>
                            </>
                        )
                    })}

                <div className="navigation">
                    <button disabled={currentPage === 1} onClick={handlePreviousQuestion}>
                        Previous
                    </button>
                    <button disabled={currentPage === totalPages} onClick={handleNextQuestion}>
                        Next
                    </button>
                </div>
            </div >
        </>
    )
}
export default Quiz;
