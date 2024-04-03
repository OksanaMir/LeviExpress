import BusStop from '../BusStop';
import './style.css';
export const JourneyDetail = ({ detail }) => {
	return (
		// detail && (
		<div className="journey-detail container">
			<h2>Podrobnosti cesty</h2>
			<div className="stops">
				{detail.stops.map(s => (
					<BusStop
						key={s.code}
						city={s.name}
						station={s.station}
						departure={s.time}
					/>
				))}
			</div>
		</div>
		// )
	);
};
