import QuickLinks from "@/components/QuickLinks";

const apostlesText = `使徒信經
《使徒信經》（Apostles’ Creed）是最簡短、也是今天教會最普遍使用的一份信經（creed），全篇共十二條。

據說在五旬節後，當十二使徒就要分散前往各地傳道時，為確保真理的合一，臨行前制定了這份信經；由十二使徒每人各提供一段，所以共有十二條。這種說法雖然不足採信，但是這份信經的內容與精神，確實符合使徒的信仰與教導，所以稱做〈使徒信經〉。最早曾在愛任紐（Irenaeus, 130-202）第二世紀的著作中發現，但是現在所呈現的形式，大約是在第七世紀間形成的。

〈使徒信經〉是根據教會的需要而制定的。早期教會的信徒在受洗加入教會之前，所需接受的基本真理教導，就是以這份信經為準則，並且在受洗時宣認。一般教會的教導也以它為根基。而要看一個教會的信仰是否純正，也以「是否符合這份信經的教導」為考核標準。早期教會受逼迫時，信徒都暗中信守這份信經，直到逼迫結束。至於這份信經什麼時候成為公共崇拜的一部分，則已經不可考。

有人認為〈使徒信經〉具有辯證的性質：因為撒伯流派（Sabellianism）宣稱聖父、聖子、聖靈（Holy Spirit）只是獨一神之三種不同顯示，所以這份信經特別按照聖父、聖子、聖靈三個位格分成三部分。而馬吉安（Marcion, 100-165）否定基督道成肉身（Incarnation）及復活（Resurrection），諾斯底派（Gnosticism）不承認基督有身體，所以信經說：「耶穌基督……因著聖靈成孕，從童女馬利亞所生；在本丟彼拉多手下受難，被釘在十字架上，死了，葬了，下到陰間（descent into hades）；第三天從死裡復活。」還有多納徒主義（Donatism）不接納大公（catholic）教會，所以這份信經以「我信……神聖而大公的基督教會，聖徒相通（communion of saints）」回應。所以，〈使徒信經〉清楚指出當時各派之錯誤教導。〈使徒信經〉可分為三段：第一段宣認「父神為創造之主」；第二段宣認「基督為神也為人」，並承認祂救贖的工作；第三段宣認「聖靈、大公教會及信徒成聖（sanctification）之生活」。〈使徒信經〉不是對抽象的教義作一番邏輯的陳述，而是宣認真實的救贖事實。歷代教父（fathers of the church）都尊崇這份信經，路德（Luther, Martin）、加爾文（Calvin, John）更是欽佩它對信仰與聖經所作的簡短清晰、卻又真實準確的陳述與摘要。直到今天，它仍然為各宗派接納，成為眾教會彼此相通的基礎。


信經正文

我信上帝，全能的父，創造天地的主。
我信我主耶穌基督，上帝的獨生子；
因著聖靈成孕，由童貞女馬利亞所生；
在本丢彼拉多手下受難，被釘於十字架，受死，埋葬；
降在陰間；第三天從死人中復活；
升天，坐在全能父上帝的右邊；
將來必從那裡降臨，審判活人，死人。
我信聖靈；
我信聖而公之教會；我信聖徒相通；
我信罪得赦免，
我信身體復活；
我信永生。阿們！

轉載自《歷代教會信條精選》，台北：改革宗出版社。
尊重著作權，請勿重製、散播或銷售。
https://www.crtsbooks.net/product/ecumenicalcreedsandreformedconfessionspaper.aspx
`;

export default function ApostlesPage() {
	return (
		<main className="subpage">
			<div className="subpage-container">
				<header className="subpage-banner">
				<img src="/logo.png" alt="Logo" className="banner-logo" />

				<QuickLinks />

				<section className="subpage-content about-content">
					<div style={{ whiteSpace: "pre-wrap", lineHeight: "1.9" }}>{apostlesText}</div>
				</section>
			</div>
		</main>
	);
}
