import "./style.css";

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
	const version = document.getElementById("version");

	if (!updatedOn || !version) {
		return;
	}

	updatedOn.textContent = date;

	const a = document.createElement("a");
	a.href = html_url;
	a.setAttribute("target", "_blank");
	a.textContent = tag_name;

	version.append(a);
}

getLatestRelease();
