import Link from "next/link";
import QuickLinks from "@/components/QuickLinks";

export default function ShorterCatechismPage() {
	return (
		<main className="subpage">
			<div className="subpage-container">
				<header className="subpage-banner">
			<img src="/logo.png" alt="Logo" className="banner-logo" />
		</header>
				<QuickLinks />

				<section className="subpage-content about-content">
					<h2>改革宗信仰教育</h2>

					<div style={{ marginTop: "2rem", marginBottom: "2rem", padding: "1.5rem", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
						<h3 style={{ marginTop: 0 }}>西敏小要理問答的歷史與重要性</h3>
						<p>
							西敏議會（Westminster Assembly）完成了《西敏公認信條》之後，又完成了《西敏大要理問答》（簡稱《大問答》）和《西敏小要理問答》（簡稱《小問答》）。《大問答》是在1648年完成的，為了當時講台信息的需要，依據信條的內容寫成196個問答。
						</p>
						<p>
							《小問答》雖是《大問答》的摘要，卻較早完成（1647年）；《小問答》共有107條，內容簡短易讀，極受當時人的喜愛。《小問答》原是為孩童及新信徒預備的，但在實際使用時，發現並不適用於兒童的學習，因為內容過於深奧，需要教導者加以解釋說明。
						</p>
						<p>
							《小問答》雖然不像《海德堡要理問答》那麼溫馨、熱情，但是它的字句清晰、邏輯清楚，可作為神學研究的入門。它和《西敏公認信條》一樣，也隨英格蘭、蘇格蘭的移民到達了美洲、澳洲、紐西蘭及南非，成為英語體系長老會（Presbyterian）所遵奉的要理問答，甚至公理會（Congregational Church）也加以採用。
						</p>
					</div>

					<div style={{ marginBottom: "2rem" }}>
						<h3>內容結構</h3>
						<p>
							《大問答》和《小問答》的神學觀點與《西敏公認信條》是一致的，在內容上可分為兩個部分：
						</p>
						<ul style={{ lineHeight: "2" }}>
							<li>
								<strong>第一部分（問1-38）：我們該信什麼</strong>
								<ul style={{ marginTop: "0.5rem" }}>
									<li>神的本性與屬性</li>
									<li>神的創造與護理</li>
									<li>人的創造、墮落與罪惡</li>
									<li>基督的位格與救贖工作</li>
									<li>聖靈的拯救工作與信心</li>
									<li>救恩在今世與死後的益處</li>
								</ul>
							</li>
							<li>
								<strong>第二部分（問39-107）：我們該作什麼</strong>
								<ul style={{ marginTop: "0.5rem" }}>
									<li>道德律與十誡的解釋</li>
									<li>十誡的具體應用（每條誡命的吩咐與禁止）</li>
									<li>律法的刑罰與得救之法</li>
									<li>蒙恩的工具：聖經、聖禮、禱告</li>
									<li>主禱文的完整解釋</li>
								</ul>
							</li>
						</ul>
					</div>

					<div style={{ marginTop: "3rem", marginBottom: "2rem" }}>
						<h3>引言部分</h3>
						<div style={{ marginTop: "1.5rem" }}>
							<div style={{ marginBottom: "1.5rem" }}>
								<strong>問1：人的主要目的是什麼？</strong>
								<p style={{ marginTop: "0.5rem" }}>
									答：人的主要目的就是榮耀上帝，永遠以他為樂。
								</p>
								<p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#666" }}>（林前十：31，詩七十三：25-26）</p>
							</div>

							<div style={{ marginBottom: "1.5rem" }}>
								<strong>問2：上帝曾賜什麼准則，指教我們怎樣榮耀他，以他為樂？</strong>
								<p style={{ marginTop: "0.5rem" }}>
									答：上帝的道，載於新舊兩約聖經，就是惟一的准則，指教我們怎樣榮耀上帝，以他為樂。
								</p>
								<p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#666" }}>（弗二：20，約壹一：3）</p>
							</div>

							<div style={{ marginBottom: "1.5rem" }}>
								<strong>問3：聖經主要教導的是什麼？</strong>
								<p style={{ marginTop: "0.5rem" }}>
									答：聖經主要教導的就是人對於上帝所當信的真理，和上帝所要人當盡的本分。
								</p>
								<p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#666" }}>（提後一：13）</p>
							</div>
						</div>
					</div>

					<div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
						<h3>第一部分：我們該信什麼（節錄）</h3>
						<div style={{ marginTop: "1.5rem" }}>
							<div style={{ marginBottom: "1.5rem" }}>
								<strong>一、上帝是怎樣的上帝</strong>
								<p style={{ marginTop: "0.5rem" }}>
									<strong>問4：</strong>上帝是怎樣的上帝？
								</p>
								<p>
									<strong>答：</strong>上帝是靈；他的本性，智慧，權能，聖潔，公義，恩慈，誠實，都是無限無量，無始無終，永無改變的。
								</p>
								<p style={{ fontSize: "0.9rem", color: "#666" }}>（約四：24，出三：14，詩一四七：5，啟四：8，十五：4，出三十四：6-7）</p>
							</div>

							<div style={{ marginBottom: "1.5rem" }}>
								<strong>Question 6：上帝有幾個位格？</strong>
								<p style={{ marginTop: "0.5rem" }}>
									<strong>答：</strong>上帝有三個位格：就是聖父、聖子、聖靈；就是三位一體真神，本性相同，權能榮耀相等。
								</p>
								<p style={{ fontSize: "0.9rem", color: "#666" }}>（太二十八：19，約壹五：7）</p>
							</div>
						</div>
					</div>

					<div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
						<h3>第二部分：我們該作什麼（十誡簡介）</h3>
						<div style={{ marginTop: "1.5rem" }}>
							<div style={{ marginBottom: "1.5rem" }}>
								<strong>問42：十條誡命的總綱是什麼？</strong>
								<p style={{ marginTop: "0.5rem" }}>
									答：十條誡命的總綱，就是要盡心，盡性，盡意，盡力愛我們的上帝，並且愛人如己。
								</p>
								<p style={{ fontSize: "0.9rem", color: "#666" }}>（太二十二：37-40）</p>
							</div>

							<div style={{ marginBottom: "1.5rem" }}>
								<strong>問43：十條誡命的序言說什麼？</strong>
								<p style={{ marginTop: "0.5rem" }}>
									答：十條誡命的序言說：我是耶和華你的上帝，曾將你從埃及地為奴之家領出來。
								</p>
								<p style={{ fontSize: "0.9rem", color: "#666" }}>（出二十：2）</p>
							</div>

							<div style={{ marginBottom: "1.5rem" }}>
								<strong>問44：十條誡命的序言對我們有什麼教訓？</strong>
								<p style={{ marginTop: "0.5rem" }}>
									答：十條誡命序言的教訓就是：因為耶和華是上帝，也是我們的上帝，又是我們的救主，所以我們應當遵守他一切的誡命。
								</p>
								<p style={{ fontSize: "0.9rem", color: "#666" }}>（申十一：1）</p>
							</div>
						</div>
					</div>

					<div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
						<h3>蒙恩的工具</h3>
						<div style={{ marginTop: "1.5rem" }}>
							<div style={{ marginBottom: "1.5rem" }}>
								<strong>問88：基督設立什麼外部的蒙恩之法，好叫救贖的益處歸於我們？</strong>
								<p style={{ marginTop: "0.5rem" }}>
									答：基督為叫救贖的益處歸於我們，所設立那明顯而常用蒙恩之法是：聖經、聖禮和禱告；這些都有效力叫蒙選的人得救。
								</p>
								<p style={{ fontSize: "0.9rem", color: "#666" }}>（徒二：41-42）</p>
							</div>

							<div style={{ marginBottom: "1.5rem" }}>
								<strong>新約的兩個聖禮：</strong>
								<ul style={{ marginTop: "0.5rem", marginLeft: "1.5rem" }}>
									<li><strong>洗禮：</strong>奉父子聖靈的名，用水一洗，表明且印証我們與耶穌有連屬，可以承受恩約的益處（太二十八：19）</li>
									<li><strong>主的晚餐：</strong>照著基督所規定的，授受餅和酒，以表明主的死，領受者不憑肉體，乃憑信心，分領主的身體和血（路二十二：19-20）</li>
								</ul>
							</div>

							<div style={{ marginBottom: "1.5rem" }}>
								<strong>禱告的要素：</strong>
								<p style={{ marginTop: "0.5rem" }}>
									禱告是奉耶穌的名，又認自己的罪，並誠實感謝上帝諸般的恩慈，向上帝祈求心中所願，而又合乎上帝旨意的事。全部聖經都指教我們怎樣禱告，但基督教導門徒的主禱文，特為我們禱告的准則（約十六：23，太六：9）。
								</p>
							</div>
						</div>
					</div>

					<div style={{ marginTop: "3rem", padding: "1.5rem", backgroundColor: "#f0f5ff", borderRadius: "8px" }}>
						<p style={{ marginTop: 0, fontSize: "0.95rem" }}>
							<strong>📖 推薦資源與特點：</strong>
						</p>
						<ul style={{ fontSize: "0.9rem", marginBottom: 0 }}>
							<li>《西敏小要理問答》共107條，內容精簡易讀</li>
							<li>是除了路德的《小本基督徒要學》和《海德堡要理問答》之外最通用的要理問答</li>
							<li>字句清晰、邏輯清楚，是神學研究的優良入門教材</li>
							<li>廣泛被長老會、公理會及其他改革宗教會採用</li>
							<li>已譯成希伯來文、希臘文、拉丁文及阿拉伯文等多種語言</li>
						</ul>
					</div>

					<div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid #ddd" }}>
						<p style={{ fontSize: "0.9rem", color: "#999" }}>
							完整的《西敏小要理問答》中文版本（全107問）可透過改革宗出版社、改革宗神學院或各大改革宗教會的查經教材查閱。
						</p>
					</div>
				</section>
			</div>
		</main>
	);
}
