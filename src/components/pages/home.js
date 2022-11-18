import React from "react";

export default function home() {
	return (
		<div className="home-page">
			<h1 className="home-title">Peach Poutine Gaming</h1>
			<img
				className="home-logo"
				src="https://imgur.com/mB1cGDL"
			/>
			<div className="social-icons-wrapper">
				<a href="https://www.tiktok.com/@peachpoutinegaming">
					<img
						className="social-icon"
						src="./assets/tiktok_icon.png"
					/>
				</a>
				<a href="https://www.youtube.com/channel/UCBPB3kWfpyaZw5J6kg-4fkg">
					<img
						className="social-icon"
						src="./assets/youtube_icon.png"
					/>
				</a>
			</div>
		</div>
	);
}
