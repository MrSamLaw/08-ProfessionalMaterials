const repos = {
    1: {
        title: "",
        description: "",
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "GoogleFonts"],
        repo: "",
        URL: "",
        screenshot: "",
    },
    2: {
        title: "Two",
        description: "",
        tech: "",
        repo: "",
        URL: "",
        screenshot: "",
    },
}

let printRepos = (repo) => {
    for (const key in repo) {
        console.log(`${key}\n Title: ${repo[key].title}`);
        let techString = repo[key].tech = repo[key].tech.join(" | ");
        var repoCard = document.createElement("div");
        repoCard.innerHTML = [
            `<div class="col-md-12 col-lg-6 col-sm-3 my-3">
            <div class="card card-primary text-center">
                <img class="card-img-top"
                    src="${repo[key].screenshot}"
                    alt="Card image cap">
                <div class="card-block">
                    <h4 class="card-title">${repo[key].title}</h4>
                    <p class="card-text">${techString}</p>
                    <p class="card-text">${repo[key].description}</p>
                    <a href="${repo[key].repo}"
                        class="btn btn-primary">GitHub Repository</a> 
                    <a href="${repo[key].URL}"
                        class="btn btn-primary">Deployed Site</a>
                </div>
            </div>
        </div>`
        ];
        document.querySelector("#portfolioCards").appendChild(repoCard);
    }
}

printRepos(repos);