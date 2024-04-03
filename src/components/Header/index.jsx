import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export const Header = () => {
	const navigate = useNavigate();

	return (
		<header>
			<div className="container">
				<h1 className="site-title">
					<a
						href="/"
						onclick={() => {
							navigate(`/`);
						}}
					>
						LeviExpress
					</a>
				</h1>
			</div>
		</header>
	);
};
