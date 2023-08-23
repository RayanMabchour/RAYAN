let serveces,
  indexOf,
  lastIndexOf,
  firstName,
  lastName,
  fullName,
  servecesInHtml = document.querySelector(".serveces");
function Skils() {
  fetch("json/skils.json")
    .then((e) => e.json())
    .then((e) => {
      for (i = 1; i <= Object.keys(e).length; i++)
        -1 !=
        (serveces = {
          servecesName: e[`skil${i}`].substring(0, e[`skil${i}`].indexOf("@")),
          servecesDescreption: e[`skil${i}`].substring(
            e[`skil${i}`].indexOf("@") + 1,
            e[`skil${i}`].lastIndexOf("@")
          ),
          servecesTag: e[`skil${i}`].substring(
            e[`skil${i}`].lastIndexOf("@") + 1,
            e[`skil${i}`].indexOf("[")
          ),
          servecesColor: e[`skil${i}`].substring(
            e[`skil${i}`].indexOf("[") + 1,
            e[`skil${i}`].lastIndexOf("]")
          ),
          servecesProjectsName: e[`skil${i}`].substring(
            e[`skil${i}`].lastIndexOf("]") + 1
          ),
        }).servecesName.indexOf(" ")
          ? ((firstName = serveces.servecesName.substring(
              0,
              serveces.servecesName.indexOf(" ")
            )),
            (lastName = serveces.servecesName.substring(
              serveces.servecesName.indexOf(" ") + 1
            )),
            (servecesInHtml.innerHTML += `<div class="service" style="--color:${
              serveces.servecesColor
            }">
          ${serveces.servecesTag}
          <div>
            <h1>
              <span style="--color:${
                serveces.servecesColor
              }">${firstName.substring(0, 1)}</span>${firstName.substring(1)}
              <span style="--color:${
                serveces.servecesColor
              }">${lastName.substring(0, 1)}</span>${lastName.substring(1)}
            </h1>
            <p>${serveces.servecesDescreption}
            </p>
            <!-- project button-->
            <button style="--color: ${
              serveces.servecesColor
            }" onclick="projects('${
              serveces.servecesProjectsName
            }')">my projects</button>
          </div>
        </div>`))
          : ((fullName = serveces.servecesName),
            (servecesInHtml.innerHTML += `<div class="service" style="--color: rgb(255, 0, 85)">
          ${serveces.servecesTag}
          <div>
            <h1>
              <span style="--color:${
                serveces.servecesColor
              }">${fullName.substring(0, 1)}</span>${fullName.substring(1)}
             </h1>
            <p>${serveces.servecesDescreption}
            </p>
            <!-- project button-->
         <button style="--color:${serveces.servecesColor}" onclick="projects('${
              serveces.servecesProjectsName
            }')">my projects</button></a>
          </div>
        </div>`));
    });
}
let lastOne,
  emptySkil = 0,
  extention,
  lastCondition;
function projects(e) {
  e != lastOne
    ? ("" != document.querySelector(".projects").innerHTML &&
        (document.querySelector(".projects").innerHTML = ""),
      fetch(`json/skils/${e}.json`)
        .then((e) => e.json())
        .then((s) => {
          if (
            ((lastCondition = Object.keys(s).length),
            0 == Object.keys(s).length)
          )
            document.querySelector(".popup").style.setProperty("opacity", "1"),
              document
                .querySelector(".popup")
                .style.setProperty("z-index", "100"),
              document
                .querySelector(".popup")
                .style.setProperty("transform", "translateY(25px)"),
              setTimeout(() => {
                document
                  .querySelector(".popup")
                  .style.setProperty("opacity", "0"),
                  document
                    .querySelector(".popup")
                    .style.setProperty("z-index", "-10"),
                  document
                    .querySelector(".popup")
                    .style.setProperty("transform", "translateY(0)");
              }, 700),
              document
                .querySelector("#projects .text")
                .style.setProperty("visibility", "hidden"),
              emptySkil++;
          else if (
            "jpg" ==
              (extention = s.project1.substring(
                s.project1.indexOf(".") + 1,
                s.project1.indexOf("@")
              )) ||
            "png" == extention ||
            "jpeg" == extention
          )
            for (i = 1; i <= Object.keys(s).length; i++)
              "project" ==
                document.querySelector(".projects#container").className ||
              document.querySelector(".projects#container").className ==
                `projects ${e}`
                ? ((document.querySelector(
                    ".projects"
                  ).innerHTML += ` <div class="p1">
          <img src="${s["project" + i].substring(
            0,
            s["project" + i].indexOf("@")
          )}" alt="" />
          <div class="p1-desc">
             <p>
            ${s["project" + i].substring(
              s["project" + i].indexOf("@") + 1,
              s["project" + i].lastIndexOf("@")
            )}
            </p>
            <a href="${s["project" + i].substring(
              s["project" + i].lastIndexOf("@") + 1
            )}" target="_blank"
              >open project</a>
          
        </div>
        </div>
        `),
                  (document.querySelector(
                    ".projects"
                  ).className = `projects ${e}`),
                  document
                    .querySelector("#projects .text")
                    .style.setProperty("visibility", "visible"))
                : ("" != document.querySelector(".projects").innerHTML &&
                    (document.querySelector(".projects").innerHTML = ""),
                  (document.querySelector(
                    ".projects"
                  ).innerHTML += ` <div class="p1">
          <img src="${s["project" + i].substring(
            0,
            s["project" + i].indexOf("@")
          )}" alt=""/>
          <div class="p1-desc">
            <p>
            ${s["project" + i].substring(
              s["project" + i].indexOf("@") + 1,
              s["project" + i].lastIndexOf("@")
            )}
            </p>
            <a href="${s["project" + i].substring(
              s["project" + i].lastIndexOf("@") + 1
            )}" target="_blank"
              >open project</a>
        </div>
        </div>
        `),
                  (document.querySelector(
                    ".projects"
                  ).className = `projects ${e}`),
                  document
                    .querySelector("#projects .text")
                    .style.setProperty("visibility", "visible"));
          else if ("mp4" == extention)
            for (
              0 == Object.keys(s).length && window.alert("no projects in " + e),
                i = 1;
              i <= Object.keys(s).length;
              i++
            )
              "project" ==
                document.querySelector(".projects#container").className ||
              document.querySelector(".projects#container").className ==
                `projects ${e}`
                ? ((document.querySelector(
                    ".projects"
                  ).innerHTML += ` <div class="p1">
         <video src="${s["project" + i].substring(
           0,
           s["project" + i].indexOf("@")
         )}" type="video/${extention}" autoplay muted loop alt=""/>
          <div class="p1-desc">
             <p>
            ${s["project" + i].substring(
              s["project" + i].indexOf("@") + 1,
              s["project" + i].lastIndexOf("@")
            )}
            </p>
            <a href="${s["project" + i].substring(
              s["project" + i].lastIndexOf("@") + 1
            )}" target="_blank"
              >open project</a>
          
        </div>
        </div>
        `),
                  (document.querySelector(
                    ".projects"
                  ).className = `projects ${e}`),
                  document
                    .querySelector("#projects .text")
                    .style.setProperty("visibility", "visible"))
                : ("" != document.querySelector(".projects").innerHTML &&
                    (document.querySelector(".projects").innerHTML = ""),
                  (document.querySelector(
                    ".projects"
                  ).innerHTML += ` <div class="p1">
          <video src="${s["project" + i].substring(
            0,
            s["project" + i].indexOf("@")
          )}" type="video/${extention}" autoplay muted loop alt=""/>
          <div class="p1-desc">
            <p>
            ${s["project" + i].substring(
              s["project" + i].indexOf("@") + 1,
              s["project" + i].lastIndexOf("@")
            )}
            </p>
            <a href="${s["project" + i].substring(
              s["project" + i].lastIndexOf("@") + 1
            )}" target="_blank"
              >open project</a>
        </div>
        </div>
        `),
                  (document.querySelector(
                    ".projects"
                  ).className = `projects ${e}`),
                  document
                    .querySelector("#projects .text")
                    .style.setProperty("visibility", "visible"));
        }))
    : 0 == lastCondition &&
      (document.querySelector(".popup").style.setProperty("opacity", "1"),
      document.querySelector(".popup").style.setProperty("z-index", "100"),
      document
        .querySelector(".popup")
        .style.setProperty("transform", "translateY(25px)"),
      setTimeout(() => {
        document.querySelector(".popup").style.setProperty("opacity", "0"),
          document.querySelector(".popup").style.setProperty("z-index", "-10"),
          document
            .querySelector(".popup")
            .style.setProperty("transform", "translateY(0)");
      }, 700),
      document
        .querySelector("#projects .text")
        .style.setProperty("visibility", "hidden")),
    (lastOne = e);
}
function toggelList() {
  let e = document.querySelector("div#list-phone"),
    s = document.querySelector("i.listBtn");
  "list-phone on" == e.className
    ? ((e.className = "list-phone off"),
      (s.className = "fa-solid fa-list listBtn"))
    : ((e.className = "list-phone on"),
      (s.className = "fa-solid fa-xmark listBtn"));
}
Skils();
