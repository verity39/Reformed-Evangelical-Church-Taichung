import Link from "next/link";
import QuickLinks from "@/components/QuickLinks";

export default function AboutPage() {
	return (
		<main className="subpage">
			<div className="subpage-container">
				<header className="subpage-banner">
					<h1>關於我們</h1>
					<p>ABOUT US</p>
				</header>

				<QuickLinks />

				<section className="subpage-content about-content">
					<h2>《臺中歸正福音教會》簡介</h2>

					<h3>歸正福音運動的精神</h3>
					<ul>
						<li>
							我們相信【歸正福音運動】是當今教會史上最重要的運動之一；此運動為唐崇榮牧師為了回應上帝的呼召，不但是向普世教會所發出的邀請，也盼望現今的世代能一同見證主耶穌基督拯救的福音。
						</li>
						<li>
							歸正，代表不斷歸回正道、不斷歸回聖經的信仰精神。十六世紀興起的宗教改革運動，加爾文、馬丁路德、慈運理等偉大的神學家發起的改革的浪潮，使信徒們正視信仰的問題，看見純正信仰的重要性，並且用生命來捍衛聖經真理；五百年後的今天，宗教改革的精神並未因著時代的變遷而消聲滅跡，我們繼承了加爾文的歸正神學路線，持續不斷地對現今普世教會發出歸回聖經的呼籲與邀請；期許地上的教會能在真理方面向下扎根的同時，也以聖經的真理在各地建立上帝的講台，捍衛福音的純正。
						</li>
						<li>
							福音，代表我們繼承了宗教改革以後所興起的福音運動，追求神學歸正的同時，絕不輕看傳揚福音的工作以及其重要性；我們不僅僅向內重視神學教育的根基，我們也看重以火熱的心向外傳揚主耶穌基督的福音，因為這是主基督所託付給教會的大使命；歸正神學與傳揚福音的熱心合而為一，即是歸正福音運動的精神。
						</li>
					</ul>

					<h3>建立歸正福音教會</h3>
					<ul>
						<li>
							唐崇榮牧師為傳揚主耶穌的福音，於世界各地舉辦無數佈道大會，他也秉持著歸正福音運動的精神，在印尼雅加達建立起印尼歸正福音教會，以歸正神學牧養會眾，以為主奮鬥不懈的心志勇敢無畏地高舉基督的福音；我們繼承了唐牧師的精神與期許，衷心期盼在臺灣的臺中地區建立歸正福音教會，從團契聚會作為開端，將歸正福音運動的精神真正實踐出來，做到以福音光照社會，以信仰挑戰時代的果效。
						</li>
						<li>
							宣揚歸正信仰、傳揚主基督純正福音的同時，衷心盼望那些與我們有相同信仰立場、領受同樣異象和使命的基督徒，同心協力地結出福音的果子，在委身與牧養的事工上，一同為主的緣故付代價；臺中歸正福音教會是由零開始建立的，但因著主的恩典、指引與呼召，我們無所畏懼，只盼望主的旨意行在地上如同行在天上，一切榮耀都歸給主。
						</li>
					</ul>

					<p>
						主僕
						<br />
						彥佑、慧龍
					</p>

					<h2>我們的信仰立場</h2>

					<h3>我們是歸正福音教會（Reformed Evangelical Church）</h3>
					<p>
						臺中歸正福音教會為唐崇榮牧師創辦歸正福音教會之台中分會。我們與印尼總會及全球分會共同作出下列信仰告白：
					</p>
					<ul>
						<li>
							<Link href="/about/confession" className="text-link">
								《歸正福音信仰宣言》
							</Link>
							（Reformed Evangelical Confession of Faith, 20th Century）
						</li>
						<li>
							<Link href="/about/evangelism" className="text-link">
								《佈道信約》
							</Link>
							（Confession of Evangelism, 20th Century）
						</li>
					</ul>
					<p>
						歸正福音教會以歸正神學／改革宗神學（Reformed Theology）為信仰立場，同時強調福音派（Evangelical）的佈道使命。
					</p>

					<h3>我們也是歸正教會／改革宗教會（Reformed Church）</h3>
					<p>
						我們追隨宗教改革運動領袖加爾文（John Calvin）的主張與精神，與全球歸正教會／改革宗教會共同信守歸正／改革宗信仰歷史中最重要的信經、信條：
					</p>
					<ul>
						<li>
							<Link href="/about/westminster" className="text-link">
								《西敏信條》
							</Link>
							（Westminster Confession of Faith, 1646）
						</li>
						<li>
							<Link href="/about/larger-catechism" className="text-link">
								《西敏大要理問答》
							</Link>
							（Westminster Larger Catechism, 1647）
						</li>
						<li>
							<Link href="/about/shorter-catechism" className="text-link">
								《西敏小要理問答》
							</Link>
							（Westminster Shorter Catechism, 1647）
						</li>
						<li>
							<Link href="/about/dort" className="text-link">
								《多特信經》
							</Link>
							（The Canons of Dort, 1619）
						</li>
						<li>
							<Link href="/about/heidelberg" className="text-link">
								《海德堡要理問答》
							</Link>
							（The Heidelberg Catechism, 1563）
						</li>
						<li>
							<Link href="/about/belgic" className="text-link">
								《比利時信條》
							</Link>
							（The Belgic Confession of Faith, 1561）
						</li>
					</ul>
					<p>
						宗教改革運動（Reformation）簡單的說就是回歸聖經的運動。上列信經、信條呼籲教會回歸聖經，同時也修正了當時天主教信仰（Roman Catholic Church）逾越聖經之處，並且充分展現了宗教改革運動之精神－－五個惟獨（Five Solas）：惟獨恩典、惟獨信心、惟獨聖經、惟獨基督、惟獨一切榮耀歸給神。
					</p>
					<p>
						我們推薦改革宗神學院（China Reformed Theological Seminary）對歷史上正統改革宗傳統之神學界限的歸納性解釋－－加爾文、法國胡格諾派、荷蘭歸正宗、蘇格蘭長老會、英國及美國的清教徒、17 世紀歸正正統、美國南方長老會、舊普林斯頓／西敏斯特神學院的傳統。
					</p>

					<h3>我們是普世基督教會的一部分／大公教會的成員</h3>
					<p>我們與普世基督教會共同信守早期教會及大公會議制定的四個信經：</p>
					<ul>
						<li>
							<Link href="/about/chalcedon" className="text-link">
								《迦克墩信經》
							</Link>
							（Chalcedonian Creed, 451）
						</li>
						<li>
							<Link href="/about/athanasian" className="text-link">
								《亞他那修信經》
							</Link>
							（Athanasian Creed, 5th Century）
						</li>
						<li>
							<Link href="/about/nicene" className="text-link">
								《尼西亞信經》
							</Link>
							（Nicene Creed, 325）
						</li>
						<li>
							<Link href="/about/apostles" className="text-link">
								《使徒信經》
							</Link>
							（Apostles' Creed, 2th Century）
						</li>
					</ul>
					<p>
						以上列舉的信經形成了正統基督教會的最大共識。他們都努力地根據聖經述說教義，並按聖經提出了基督教信仰不可妥協的核心（福音之焦點）。這些信經的界限，同時提醒了人們應該提防那少數脫離歷史、誤解聖經的異端教導，例如：耶和華見證人（Jehovah’s Witnesses）、耶穌基督後期聖徒教會（俗稱摩門教，The Church of Jesus Christ of Latter-day Saints）。
					</p>

					<h3>我們否認與正統基督教信仰（聖經）相悖的主張</h3>
					<p>
						西方教會領袖根據改教運動回歸聖經的精神，對當代教會亂象提出針砭，我們嚴肅呼籲基督徒重視這兩個宣言：
					</p>
					<ul>
						<li>《劍橋宣言》（Cambridge Declaration, 1996 ／ 五個惟獨的再強調）</li>
						<li>《芝加哥聖經無誤宣言》（Chicago Statement on Biblical Inerrancy, 1978）</li>
					</ul>
					<p>
						這些宣言一如歷代信經信條，提醒教會不可偏離聖經，警戒亟需匡正之時弊如：自由主義神學（Liberal Christianity）、新正統神學（Neo-orthodoxy）、靈恩運動（Charismatic Movement）、保羅新觀（N.T. Wright, New Perspective on Paul）及非難聖經無誤教義之觀點（以 Peter Enns, Inspiration and Incarnation 為代表）等。我們同時呼籲教會在這些牴觸聖經教導的學說上不要採取模稜兩可的立場。
					</p>
				</section>
			</div>
		</main>
	);
}
