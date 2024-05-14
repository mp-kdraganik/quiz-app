import Button from "@/components/Button";

export default function StartBox({changeState}) {
    const handleClick = () => {
        changeState("question");
    }

    return (
        <>
            <h1>Quiz App</h1>
            <Button text="Rozpocznij" handleClick={handleClick}></Button>
        </>
  );
}