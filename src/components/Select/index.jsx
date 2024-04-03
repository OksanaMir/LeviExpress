export const Select = ({ label, children, chosenOpt, setChosen }) => {
	return (
		<label>
			<div className="journey-picker__label">{label}</div>
			<select value={chosenOpt} onChange={e => setChosen(e.target.value)}>
				<option key={0} value="">
					Vyberte
				</option>
				{children}
			</select>
		</label>
	);
};
