import style from "@/styles/components/Button.module.css";

export default function Button({ text, handleClick }) {
  return <button className={style.button} onClick={handleClick}>{text}</button>;
}