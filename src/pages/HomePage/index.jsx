import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';
import { SeatPicker } from '../../components/SeatPicker';
import { Button } from '../../components/Button';

export const HomePage = () => {
	const [journey, setJourney] = useState(null);
	const [userSeat, setUserSeat] = useState(null);
	const navigate = useNavigate();

	const handleJourneyChange = data => {
		setJourney(data);
		setUserSeat(data.autoSeat);
	};

	const postReservation = async (
		url = 'https://apps.kodim.cz/daweb/leviexpress/api/reservation'
	) => {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				action: 'create',
				seat: userSeat,
				journeyId: journey.journeyId
			})
		});
		return response.json();
	};
	const handleBuy = e => {
		e.preventDefault();
		// let id;

		postReservation().then(data => {
			let id = data.results.reservationId;
			navigate(`/reservation/${id}`);
		});
		// navigate(`/reservation/${id}`);
	};

	return (
		<main>
			<JourneyPicker onJourneyChange={handleJourneyChange} />
			{journey && (
				<div className="container">
					<p> Nalezeno spojení s id {journey.journeyId} </p>
				</div>
			)}

			{journey && <JourneyDetail detail={journey} />}
			{/* deleted code from previous exercises from part 1  */}
			{journey && <SelectedSeat number={userSeat} />}
			{journey && (
				<SeatPicker
					seats={journey.seats}
					selectedSeat={userSeat}
					onSeatSelected={setUserSeat}
				/>
			)}
			{journey && (
				<Button
					wrapper="controls container"
					buttonName="btn btn--big"
					text="Rezervovat"
					type="button"
					clickHandler={handleBuy}
				/>
			)}
		</main>
	);
};
