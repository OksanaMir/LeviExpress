import './style.css';
const BusStop = ({ city, station, departure }) => (
	<>
		<div className="bus-stop">
			<div className="bus-stop__bullet"></div>
			<div className="bus-stop__place">
				<div className="bus-stop__city">{city}</div>
				<div className="bus-stop__station">{station}</div>
			</div>
			<div className="bus-stop__departure">{departure}</div>
		</div>
	</>
);

export default BusStop;
