import './style.css';
export const Button = ({
	wrapper,
	buttonName,
	text,
	type,
	disabled,
	submitHandler,
	clickHandler
}) => {
	return (
		<div className={wrapper}>
			<button
				className={buttonName}
				disabled={disabled}
				type={type}
				onClick={clickHandler}
			>
				{text}
			</button>
		</div>
	);
};
