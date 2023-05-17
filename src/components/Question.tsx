type Props = {
  question: string;
  choices: string[];
  onAnswer: (answer: string) => void;
};

function Question({ question, choices, onAnswer }: Props) {
  return (
    <>
      <h2>{question}</h2>
      {choices.map((choice) => (
        <button key={choice} onClick={() => onAnswer(choice)}>
          {choice}
        </button>
      ))}
    </>
  );
}

export default Question;
