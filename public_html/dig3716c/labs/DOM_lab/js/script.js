"use strict";

function threeThree() {
    var table = document.getElementById("threeThree").firstElementChild;

    for (var i = 0; i < table.rows.length; i++) {
        var target = table.rows[i];
        target.cells[i].style.backgroundColor = "red";
    }
}

function fiveOne() {
    var list = document.getElementById("fiveOne");

    for (let el of list.querySelectorAll("li")) {
        var title = el.firstChild.data.trim();
        var count = el.getElementsByTagName("li").length;
        console.log(title + ": " + count);
    }
}

function sixOne() {
    var target = document.getElementById("sixOne");
    var el = target.querySelector("[data-widget-name]");
    console.log(el.getAttribute("data-widget-name"));
}

function sixTwo() {
    var target = document.getElementById("sixTwo");

    for (let link of target.querySelectorAll("a")) {
        var href = link.getAttribute("href");
        if (!href || !href.includes("://") || href.startsWith("http://internal.com")) continue;
        link.style.color = "orange";
    }
}

function sevenTwo() {
    var target = document.getElementById("elem").remove();
}

function sevenFour() {
    var target = document.getElementById("sevenFour");
    var list = document.createElement("ul");
    target.append(list);

    while (true) {
        var item = prompt("Enter text new item");

        if (item == "") break;

        var li = document.createElement("li");
        li.textContent = item;
        list.append(li);
    }
}

function sevenFive() {
    let data = {
        "Fish": {
            "trout": {},
            "salmon": {}
        },

        "Tree": {
            "Huge": {
                "sequoia": {},
                "oak": {}
            },
            "Flowering": {
                "apple tree": {},
                "magnolia": {}
            }
        }
    };

    function createTree(container, data) {
        container.append(createBranch(data));
    }

    function createBranch(data) {
        if (!Object.keys(data).length) return;

        var ul = document.createElement("ul");

        for (let key in data) {
            var li = document.createElement("li");
            li.innerHTML = key;

            var childrenUl = createBranch(data[key]);
            if (childrenUl) li.append(childrenUl);
            ul.append(li);
        }

        return ul;
    }

    var container = document.getElementById("sevenFive");
    createTree(container, data);
}

function sevenSix() {
    var target = document.getElementById("sevenSix").getElementsByTagName("li");

    for (let li of target) {
        var cnt = li.getElementsByTagName("li").length;
        if (!cnt) continue;
        li.firstChild.data += " [" + cnt + "]";
    }
}

function sevenSeven() {
    function createCalendar(elem, year, month) {
        var mon = month - 1;
        var d = new Date(year, mon);
        var table = "<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>";

        for (let i = 0; i < getDay(d); i++) {
            table += "<td></td>";
        }

        while (d.getMonth() == mon) {
            table += "<td>" + d.getDate() + "</td>";

            if (getDay(d) % 7 == 6) {
                table += "</tr><tr>";
            }

            d.setDate(d.getDate() + 1);
        }

        if (getDay(d) != 0) {
            for (let i = getDay(d); i < 7; i++) {
                table += "<td></td>";
            }
        }

        table += "</tr></table>";

        document.getElementById(elem).innerHTML = table;
    }

    function getDay(date) {
        let day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
    }

    createCalendar("sevenSeven", 2020, 10)
}

function sevenEight() {
    var timer;

    function run() {
        var date = new Date();

        var hr = date.getHours();
        if (hr < 10) hr = "0" + hr;
        document.getElementById("hour").innerHTML = hr;

        var min = date.getMinutes();
        if (min < 10) min = "0" + min;
        document.getElementById("min").innerHTML = min;

        var sec = date.getSeconds();
        if (sec < 10) sec = "0" + sec;
        document.getElementById("sec").innerHTML = sec;
    }

    function start() {
        timer = setInterval(run, 1000);
        run();
    }

    function stop() {
        clearInterval(timer);
    }

    document.getElementById("clockStart").addEventListener("click", start);
    document.getElementById("clockStop").addEventListener("click", stop);

    start();
}

function sevenNine() {
    var target = document.getElementById("one");
    target.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");

}

function sevenTen() {
    var target = document.getElementById("sevenTen").firstElementChild;
    var sort = Array.from(target.tBodies[0].rows).sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML));
    target.tBodies[0].append(...sort);
}

function eightOne() {

    function showNotification({
        top = 0,
        right = 0,
        className,
        html
    }) {
        var notif = document.createElement("div");
        notif.className = "notification";
        
        if (className) notif.classList.add(className);

        notif.style.top = top + "px";
        notif.style.right = right + "px";

        notif.innerHTML = html;
        document.body.append(notif);
        
        setTimeout(() => notif.remove(), 1500);
    }

    showNotification({
        top: 10,
        right: 10,
        html: "Hello!",
        className: "eightOne"
    });
}

threeThree();
fiveOne();
sixOne();
sixTwo();
sevenTwo();
sevenFour();
sevenFive();
sevenSix();
sevenSeven();
sevenEight();
sevenNine();
sevenTen();
eightOne();
