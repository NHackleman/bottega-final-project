import React from "react";

export default function home() {
	return (
		<div className="home-page">
			<h1 className="home-title">Peach Poutine Gaming</h1>
			<img
				className="home-logo"
				src="https://scontent.flnk2-1.fna.fbcdn.net/v/t39.30808-6/315061569_2587449884731396_851618903385961790_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=mCsE_cOgb3gAX915OHN&tn=6mIc5RdBlq3EELHL&_nc_ht=scontent.flnk2-1.fna&oh=00_AfAYbXn9DC92ghLP8ogSFRTbMDimGW7PrdG1VFw27YQWcA&oe=636F7981"
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
