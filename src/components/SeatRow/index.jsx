import { Seat } from '../Seat';
import './style.css';

export const SeatRow = ({ row, rowSelectedSeat, onSeatSelected }) => {
	return (
		<div className="seat-row">
			{row.map(s => (
				<Seat
					key={s.number}
					occupied={s.isOccupied}
					number={s.number}
					selected={s.number === rowSelectedSeat}
					onSelect={onSeatSelected}
				/>
			))}
		</div>
	);
};

// export const SeatRow = ({ seatsArr }) => {

// props row according to task
//array from seatRow props(function
{
	/* {seatsArr.map(s => ( */
}

{
	/* <Seat
					key={s.id}
					selected={s.n === 26 ? true : false}
					occupied={s.available}
					number={s.n}
				/> */
}
