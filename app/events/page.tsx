import QuickLinks from "@/components/QuickLinks";

export default function EventsPage() {
	return (
		<main className="subpage">
			<div className="subpage-container">
				<header className="subpage-banner">
					<img src="/logo.png" alt="Logo" className="banner-logo" />
				</header>

				<QuickLinks />

				<section className="subpage-content events-content">
					<div className="event-item">
						<h3>主日崇拜</h3>
						<p>每周日上午10:00 AM</p>
					</div>

					<div className="event-item">
						<h3>核心教義課程</h3>
						<p>每月第二和第四週，於主日崇拜會後開始</p>
					</div>

					<div className="event-item">
						<h3>週三線上查經</h3>
						<p>查經內容：以弗所書</p>
						<p className="event-details">
							ZOOM：<br />
							連結<br />
							號碼
						</p>
					</div>
				</section>
			</div>
		</main>
	);
}
