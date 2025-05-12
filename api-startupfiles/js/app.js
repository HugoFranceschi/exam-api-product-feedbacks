async function feedback() {
	const resulte = await fetch("http://51.38.232.174:3002/v1/feedbacks", {
		method: "GET",
	});

	const data = await resulte.json();

	for (let i = 0; i < data.length; i++) {
		info(
			data[i].votes,
			data[i].title,
			data[i].description,
			data[i].category,
			data[i].comments
		);
	}

	console.log(data);
}
feedback();

const sort = document.getElementById("filter-sort");

const btn = document.getElementById("search");
btn.addEventListener("click", (e) => {
	e.preventDefault();
	const sup = document.querySelector(".feedback-wrapper");
	sup.remove();
	feedback();
});

const sup = document.querySelector(".feedback-wrapper");
sup.remove();

const wrapper = document.createElement("section");
const main = document.querySelector(".feedback-page");

wrapper.classList.add("feedback-wrapper");

main.appendChild(wrapper);
function info(vote, title, description, category, comment) {
	const item = document.createElement("div");
	item.classList.add("feedback-item");

	const votes = document.createElement("div");
	votes.classList.add("feedback-item-votes");

	const svg1 = document.createElementNS("https://www.w3.org/2000/svg", "svg");

	svg1.setAttribute("viewBox", "0 0 24 24");

	const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path1.setAttribute(
		"d",
		"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
	);
	path1.style.fill = "currentColor";

	const span1 = document.createElement("span");
	span1.classList.add("text-regular-3");
	span1.textContent = vote;

	const text = document.createElement("div");
	text.classList.add("feedback-item-text");

	const h3 = document.createElement("h3");
	h3.classList.add("heading-3");
	h3.textContent = title;

	const p = document.createElement("p");
	p.textContent = description;

	const chip = document.createElement("div");
	chip.classList.add("feedback-chip");
	chip.classList.add("text-regular-3");
	chip.textContent = category;

	const comments = document.createElement("div");
	comments.classList.add("feedback-item-comments");

	const svg2 = document.createElement("svg");
	svg2.setAttribute("viewBox", "0 0 24 24");
	svg2.classList.add("grey-lighten-1-text");

	const path2 = document.createElement("path");
	path2.setAttribute("fill", "currentcolor");
	path2.setAttribute(
		"d",
		"M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"
	);

	const span2 = document.createElement("span");
	span2.classList.add("bold");
	span2.textContent = comment;

	wrapper.appendChild(item);
	item.appendChild(votes);
	votes.appendChild(svg1);
	svg1.appendChild(path1);
	votes.appendChild(span1);
	item.appendChild(text);
	text.appendChild(h3);
	text.appendChild(p);
	text.appendChild(chip);
	item.appendChild(comments);
	comments.appendChild(svg2);
	svg2.appendChild(path2);
	comments.appendChild(span2);
}
