import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Script defer id="">
        var game = new Othello();
      </Script>
    <div id="splash-screen">
		<div className="choice-container">
			<h2>Choose game mode</h2>
			<ul>
				<li><button className="single">Single Player</button></li>
				<li><button className="multi">Multiplayer (Local)</button></li>
			</ul>
		</div>
	</div>
	<div className="notify-container"></div>
	<div className="hover-counter"></div>
	<div className="container">
		<div id="winner-screen">
			<h1>Winner</h1>
			<h3 className="winning-player"></h3>
			<h4 className="winning-score"></h4>
			{/* <button className="again" onClick={() => window.location.reload()}>Play Again</button> */}
			<div className="winner-circle-1"></div>
			<div className="winner-circle-2"></div>
			<div className="winner-circle-3"></div>
			<div className="winner-circle-4"></div>
			<div className="winner-circle-5"></div>
		</div>
		<div className="player black">
			<span>(Human)</span>
			<h2>Black</h2>
			<p>2</p>
		</div>
		<div id="board">
			<div id="board-inner"></div>
		</div>
		<div className="player white">
		<span className="mode-change">(Human)</span>
			<h2>White</h2>
			<p>2</p>
		</div>
	</div>
  </div>
  );
}
