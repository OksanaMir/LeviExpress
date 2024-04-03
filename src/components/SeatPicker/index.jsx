import { SeatRow } from '../SeatRow';
import { seatsScheme } from '../seatsScheme';
import { getRow } from '../getRow';
import './style.css';

export const SeatPicker = ({ seats, selectedSeat, onSeatSelected }) => {
	console.log(seats);
	let a = seats;
	return (
		<div className="seat-picker container">
			<h2>Vyberte sedadlo</h2>
			<div className="seats">
				{seats.map((r, i) => (
					<SeatRow
						key={`row${i}`}
						row={r}
						rowSelectedSeat={selectedSeat}
						onSeatSelected={onSeatSelected}
					/>
				))}
			</div>
		</div>
	);
};
{
	/* <SeatRow key={n} seatsArr={getRow(seatsScheme(), n)} /> */
}
