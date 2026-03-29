import QuickLinks from "@/components/QuickLinks";

export default function SubscribePage() {
	return (
		<main className="subpage">
			<div className="subpage-container">
				<header className="subpage-banner">
			<img src="/logo.png" alt="Logo" className="banner-logo" />
		</header>
				<QuickLinks />

				<section className="subpage-content about-content">
					<h2>訂閱與關注</h2>
					<p>歡迎訂閱並關注我們：</p>
					<p>
						<a
							href="https://www.facebook.com/p/%E8%87%BA%E4%B8%AD%E6%AD%B8%E6%AD%A3%E7%A6%8F%E9%9F%B3%E6%95%99%E6%9C%83-61567725549761/"
							className="text-link"
							target="_blank"
							rel="noreferrer"
						>
							Facebook
						</a>
					</p>
				</section>
			</div>
		</main>
	);
}
