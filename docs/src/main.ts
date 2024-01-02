import "./style.css";
import "highlight.js/styles/night-owl.css";
import hljs from "highlight.js/lib/common";

hljs.highlightAll();

async function getLatestRelease() {
	const res = await fetch(
		"https://api.github.com/repos/royalfig/share-button/releases/latest",
	);
	const data = await res.json();

	const { html_url, tag_name, published_at } = data;

	const date = new Date(published_at).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	const updatedOn = document.getElementById("updated-on");
	const version = document.getElementById("version") as HTMLAnchorElement;

	if (!updatedOn || !version) {
		return;
	}

	updatedOn.textContent = date;

	version.href = html_url;
	const svg = version.querySelector("svg");
	version.textContent = tag_name;
	svg && version.prepend(svg);
}

getLatestRelease();
