import Link from "next/link";
import QuickLinks from "@/components/QuickLinks";

export default function LargerCatechismPage() {
	return (
		<main className="subpage">
			<div className="subpage-container">
				<header className="subpage-banner">
				<img src="/logo.png" alt="Logo" className="banner-logo" />

				<QuickLinks />

				<section className="subpage-content about-content">
					<h2>改革宗信仰教育</h2>

					<p>
						《西敏大要理問答》(Westminster Larger Catechism, 1647)
						是改革宗信仰中最重要的教理書之一，由威斯敏斯特會議編撰，共包含196個問答。本頁呈現部分核心內容，完整版本可透過改革宗神學相關資源查閱。
					</p>

					<div style={{ marginTop: "2rem", lineHeight: "1.8" }}>
						<div style={{ marginBottom: "2rem" }}>
							<strong>問1：人最主要、最崇高的目的是什麼？</strong>
							<p style={{ marginTop: "0.5rem" }}>
								答：人最主要、最崇高的目的就是（一）榮耀神、（二）完全以祂為樂，直到永遠。
							</p>
							<p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#666" }}>
								（引文：羅十一36；林前十31）
							</p>
						</div>

						<div style={{ marginBottom: "2rem" }}>
							<strong>問2：如何證明神的存在？</strong>
							<p style={{ marginTop: "0.5rem" }}>
								答：人心中的天然之光和神的作為，都在宣告神的存在；但是，惟獨神的道和聖靈才能充分地、有效地把祂自己啟示給人，使人因而得救。
							</p>
						</div>

						<div style={{ marginBottom: "2rem" }}>
							<strong>問3：神的道是什麼？</strong>
							<p style={{ marginTop: "0.5rem" }}>
								答：新舊約聖經就是神的道，是信仰與順服的惟一準則。
							</p>
						</div>

						<div style={{ marginBottom: "2rem" }}>
							<strong>問5：聖經主要教導的是什麼？</strong>
							<p style={{ marginTop: "0.5rem" }}>
								答：聖經主要教導的是：（一）人對於神所當信的真理，（二）神要人所當盡的本分。
							</p>
						</div>

						<div style={{ marginBottom: "2rem" }}>
							<strong>問7：神是怎樣的一位神？</strong>
							<p style={{ marginTop: "0.5rem" }}>
								答：（一）神是個靈，祂的存有、榮耀、福祉和完全，都是無限無量的；（二）祂是全然充足、永恆、不會改變、無法測度、無所不在、無所不能的；（三）祂知道萬有，極其智慧、極其聖潔、極其公義、極其憐憫、恆久忍耐又有豐盛的恩慈和信實。
							</p>
						</div>

						<div style={{ marginBottom: "2rem" }}>
							<strong>問9：神有幾個位格？</strong>
							<p style={{ marginTop: "0.5rem" }}>
								答：神有三個位格：聖父，聖子，聖靈；但這三個位格是同一信實、永恆的神，只有一個本質，權能相同、榮耀相等；但各有不同的特性。
							</p>
						</div>
					</div>

					<div style={{ marginTop: "3rem", padding: "1.5rem", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
						<h3 style={{ marginTop: 0 }}>西敏大要理問答的主要內容結構</h3>
						<ul style={{ lineHeight: "2" }}>
							<li>
								<strong>問1-60：</strong>
								基礎教義 - 神的性質、聖經、三位一體、選民、救恩、救贖、恩典之約等
							</li>
							<li>
								<strong>問61-90：</strong>
								教會論 - 教會的本質（有形與無形）、聖禮（洗禮與聖餐）、救贖恩惠的應用等
							</li>
							<li>
								<strong>問91-196：</strong>
								道德律與實踐 - 十誡的全面解釋與應用、禱告、主禱文等
							</li>
						</ul>
					</div>

					<div style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#f0f5ff", borderRadius: "8px" }}>
						<p style={{ marginTop: 0, fontSize: "0.95rem" }}>
							<strong>📖 推薦資源：</strong>
						</p>
						<p style={{ fontSize: "0.9rem", marginBottom: 0 }}>
							完整的《西敏大要理問答》中文版本可透過以下方式獲得：
						</p>
						<ul style={{ fontSize: "0.9rem" }}>
							<li>改革宗長老會出版社出版的官方中文版</li>
							<li>改革宗神學院編譯的教學版本</li>
							<li>各大改革宗教會的查經教材</li>
						</ul>
					</div>
				</section>
			</div>
		</main>
	);
}
