import React from 'react';
import './style.css';

export const Header = () => (
	<header>
		<div className="container">
			<h1 className="site-title">
				<a href="/" onclick="window.open('/', '_self');">
					LeviExpress
				</a>
			</h1>
		</div>
	</header>
);
