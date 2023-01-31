/* Pagination */

const ul = document.getElementById("pagination");
const rows = [...document.querySelectorAll(".tutorial__table tbody tr")];
let singlePage = 8;
const total = Math.ceil(rows.length / singlePage);
let active = 1;
const createPages = (current) => {
    ul.innerHTML = "";
    rows.map((a) => a.classList.add("hide"));
    for (let i = (current - 1) * singlePage; i < singlePage * current; i++) {
        rows[i]?.classList.remove("hide");
    }

    current = Number(current);
    let start = current - 2 > 0 ? current - 2 : 1;
    let end = current + 3 <= total ? current + 3 : total;
    if (current > 3) {
        let prev = document.createElement("li")
        prev.innerHTML = "<i class='fa-solid fa-angle-left'></i>"
        ul.append(prev);
        prev.addEventListener("click", () => {
            createPages(current - 2)
        })
    }
    for (let i = start; i <= end; i++) {
        let page = document.createElement("li");
        if (i == current) {
            page.classList.add("active_pagination");
        }
        page.innerText = i;
        page.addEventListener("click", () => {
            createPages(page.innerText);
        })
        ul.append(page);
    }
    if (current + 1 < total) {
        let next = document.createElement("li")
        next.innerHTML = "<i class='fa-solid fa-angle-right'></i>"
        ul.append(next);
        next.addEventListener("click", () => {
            createPages(current + 2)
        })
    }
}
rows.length > 5 && createPages(active)
