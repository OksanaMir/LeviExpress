import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
// import { Select } from '../Select';
import './style.css';

export const CityOptions = ({ val, name }) => {
	return <option value={val}>{name}</option>;
};
export const DatesOptions = ({ val, name }) => {
	return <option value={val}>{name}</option>;
};

export const JourneyPicker = ({ onJourneyChange }) => {
	const [cities, setCities] = useState([]);
	const [dates, setDates] = useState([]);
	const [fromCity, setFromCity] = useState('');
	const [toCity, setToCity] = useState('');
	const [date, setDate] = useState('');

	useEffect(() => {
		const fetchCities = async () => {
			const response = await fetch(
				'https://apps.kodim.cz/daweb/leviexpress/api/cities'
			);
			const data = await response.json();
			setCities(data.results);
		};
		const fetchDates = async () => {
			const response = await fetch(
				'https://apps.kodim.cz/daweb/leviexpress/api/dates'
			);
			const data = await response.json();
			setDates(data.results);
		};

		fetchCities();
		fetchDates();
	}, []);

	const fetchData = async (from, to, day) => {
		const response = await fetch(
			`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${from}&toCity=${to}&date=${day}`
		);
		const data = await response.json();
		let connectionDetail = data.results;

		return connectionDetail;
	};

	const handleSubmit = event => {
		event.preventDefault();

		fetchData(fromCity, toCity, date).then(data => {
			onJourneyChange(data);
		});
	};

	return (
		<div className="journey-picker container">
			<h2 className="journey-picker__head">Kam chcete jet?</h2>
			<div className="journey-picker__body">
				<form className="journey-picker__form" onSubmit={handleSubmit}>
					<label>
						<div className="journey-picker__label">Odkud: </div>
						<select
							value={fromCity}
							onChange={e => setFromCity(e.target.value)}
						>
							<option key={0} value="">
								Vyberte
							</option>
							{cities.map(city => (
								<CityOptions
									key={city.code}
									val={city.code}
									name={city.name}
								/>
							))}
						</select>
					</label>
					{/* <Select
						label="Odkud:"
						defaultOpt="Vyberte"
						opts={cities}
						chosenOpt={fromCity}
						setChosen={setFromCity}
					>
						{cities &&
							cities.map(city => <CityOptions opts={city} />)}
					</Select> */}
					<label>
						<div className="journey-picker__label">Kam: </div>
						<select
							value={toCity}
							onChange={e => setToCity(e.target.value)}
						>
							<option key={0} value="">
								Vyberte
							</option>
							{cities &&
								cities.map(city => (
									<CityOptions
										key={city.code}
										val={city.code}
										name={city.name}
									/>
								))}
						</select>
					</label>

					{/* <Select
						label="Kam:"
						opts={cities}
						chosenOpt={toCity}
						setChosen={setToCity}
					>
						{cities &&
							cities.map(city => <CityOptions opts={city} />)}
					</Select> */}
					<label>
						<div className="journey-picker__label">Datum: </div>
						<select
							value={date}
							onChange={e => setDate(e.target.value)}
						>
							<option key={0} value="">
								Vyberte
							</option>
							{dates.map(date => (
								<DatesOptions
									key={date.dateBasic}
									val={date.dateBasic}
									name={date.dateCs}
								/>
							))}
						</select>
					</label>

					{/* <Select
						label="Datum:"
						opts={datesArr}
						chosenOpt={date}
						setChosen={setDate}
					/> */}
					<Button
						wrapper="journey-picker__controls"
						buttonName="btn"
						text="Vyhledat spoj"
						type="submit"
						disabled={
							date === '' ||
							toCity === '' ||
							fromCity === '' ||
							toCity === fromCity
						}
					/>
				</form>
				<img
					className="journey-picker__map"
					src={process.env.PUBLIC_URL + '/map.svg'}
				/>
			</div>
		</div>
	);
};
