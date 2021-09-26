import { useState } from "react";
import styles from "../styles/Game.module.css";
import cn from "classnames";
import router, { useRouter } from "next/router";

const questions = [
  "Given the choice of anyone in the world, whom would you want as a dinner guest?",
  "Would you like to be famous? In what way?",
  "Before making a telephone call, do you ever rehearse what you are going to say? Why?",
  "What would constitute a “perfect” day for you?",
  "When did you last sing to yourself? To someone else?",
  "If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?",
  "Do you have a secret hunch about how you will die?",
  "Name three things you and your partner appear to have in common.",
  "For what in your life do you feel most grateful?",
  "If you could change anything about the way you were raised, what would it be?",
  "Take four minutes and tell your partner your life story in as much detail as possible.",
  "If you could wake up tomorrow having gained any one quality or ability, what would it be?",
  "If a crystal ball could tell you the truth about yourself, your life, the future, or anything else, what would you want to know?",
  "Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?",
  "What is the greatest accomplishment of your life?",
  "What do you value most in a friendship?",
  "What is your most treasured memory?",
  "What is your most terrible memory?",
  "If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?",
  "What does friendship mean to you?",
  "What roles do love and affection play in your life?",
  "Alternate sharing something you consider a positive characteristic of your partner. Share a total of five items.",
  "How close and warm is your family? Do you feel your childhood was happier than most other people’s?",
  "How do you feel about your relationship with your mother?",
  "Make three true “we” statements each. For instance, “We are both in this room feeling…",
  "Complete this sentence: “I wish I had someone with whom I could share…”",
  "If you were going to become a close friend with your partner, please share what would be important for them to know.",
  "Tell your partner what you like about them; be very honest this time, saying things that you might not say to someone you’ve just met.",
  "Share with your partner an embarrassing moment in your life.",
  "When did you last cry in front of another person? By yourself?",
  "Tell your partner something that you like about them [already].",
  "What, if anything, is too serious to be joked about?",
  "If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven’t you told them yet?",
  "Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?",
  "Of all the people in your family, whose death would you find most disturbing? Why?",
  "Share a personal problem and ask your partner’s advice on how they might handle it. Also, ask your partner to reflect back to you how you seem to be feeling about the problem you have chosen.",
];

function GamePage() {
  const [count, setCount] = useState(0);
  const [turn, setTurn] = useState(0);
  const [name1, setName1] = useState(null);
  const [name2, setName2] = useState(null);
  const [names, setNames] = useState(["name1", "name2"]);
  const router = useRouter();

  const handleNext = () => {
    if(turn === 1 && count === questions.length - 1){
        router.push('/end');
    }
    if (turn === 1 && count < questions.length - 1) {
      setCount(count + 1);
      setTurn(0);
      return;
    }
    setTurn(1);
    return;
  };

  const handlePrev = () => {
    if (turn === 0 && count - 1 >= 0) {
      setCount(count - 1);
      setTurn(1);
      return;
    }
    setTurn(0);
    return;
  };

  return (
    <div className={cn(styles.container, { [styles.first]: count % 2 === 0 })}>
      <div className={styles.main}>
        <h1 data-player={names[turn % 2]}>Question #{count + 1}</h1>
        <div className={styles.questions}>
          <p>{questions[count]}</p>
        </div>
        <div className={styles.buttons}>
          <div
            className={cn(styles.button, {
              [styles.disabled]: turn === 0 && count === 0,
            })}
            onClick={handlePrev}
          >
            Previous
          </div>
          <div
            className={cn(styles.button, {
              [styles.ended]: turn === 1 && count === questions.length - 1,
            })}
            onClick={handleNext}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
