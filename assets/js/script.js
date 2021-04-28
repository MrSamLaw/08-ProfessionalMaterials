const repos = {
    1: {
        title: "Workday Scheduler",
        description: "App to display the workday hours where user can save their appointments",
        tech: "HTML, CSS, JavaScript, Bootstrap, GoogleFonts",
        repo: "https://github.com/CatOrmerod/work-day-scheduler",
        URL: "https://catormerod.github.io/work-day-scheduler/",
        screenshot: "<img src='./assets/images/work-day-scheduler-screenshot.png' alt='Image'>",
    },
    2: {
        title: "Two",
        description: "App to display the workday hours where user can save their appointments",
        tech: "HTML, CSS, JavaScript, Bootstrap, GoogleFonts",
        repo: "https://github.com/CatOrmerod/work-day-scheduler",
        URL: "https://catormerod.github.io/work-day-scheduler/",
        screenshot: "<img src='./assets/images/work-day-scheduler-screenshot.png' alt='Image'>",
    },
}

let printRepos = (repo) => {
    for (const key in repo) {
        console.log(`${key}\n Title: ${repo[key].title}`);
    }
}

printRepos(repos);