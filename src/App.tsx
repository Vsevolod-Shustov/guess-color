import { useEffect, useState } from 'react'
import './App.css'
import Button from './Button';

function App() {
  const [correctAnswer, setCorrectAnswer] = useState<string>('')
  const [submittedAnswer, setSubmittedAnswer] = useState<string>('')
  const [answers, setAnswers] = useState<string[]>([])

  const getRandomColor = () => {
    return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  }

  const handleButtonClick = (color: string) => {
    setSubmittedAnswer(color);
  }

  useEffect(() => {
    const random = getRandomColor();
    setCorrectAnswer(random);
    setAnswers([random, getRandomColor(), getRandomColor()].sort(() => Math.random() - 0.5));
  }, [])
  return (
    <div className='App'>
      <div className='guess-me' style={{backgroundColor: correctAnswer}}></div>

      <div>
        {answers.map((answer) => (<Button key={answer} color={answer} click={handleButtonClick}></Button>))}
      </div>

      {submittedAnswer &&
      <div>
        {(submittedAnswer===correctAnswer) ? <span>Correct!</span> : <span>Wrong!</span>}
      </div>
      }
    </div>
  )
}

export default App
