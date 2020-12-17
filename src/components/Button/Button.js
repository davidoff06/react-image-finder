import s from './Button.module.css';

const Button = ({ onButtonClick }) => {
  return (
    <button type="button" className={s.Button} onClick={onButtonClick}>
      Load more
    </button>
  );
};

export default Button;
