document.addEventListener("DOMContentLoaded", () => {
    const dataTeam = document.querySelectorAll("[data-team]");


    dataTeam.forEach((team) => {
        team.addEventListener("click", () => {
            const selectedName = team.dataset.team;
            const modal = document.getElementById("modal")
            modal.classList.remove("hidden");
            modal.classList.add("flex");
            document.body.style.overflow = "hidden";


            const selectedTeam = window.groups
                .flatMap(group => group.teams)
                .find(team => team.name === selectedName);

            document.getElementById("modal-name").textContent = selectedTeam.name;
            document.getElementById("modal-flag").src = selectedTeam.flag.src;
            document.getElementById("modal-world-cups").textContent = selectedTeam.history.worldCups;
            document.getElementById("modal-best-results").textContent = selectedTeam.history.bestResult;
            document.getElementById("modal-memo").textContent = selectedTeam.history.memo;
            document.getElementById("modal-name-country").textContent = selectedTeam.name;
            document.getElementById("modal-legends").textContent = selectedTeam.history.legends.join(", ");
        });
    });
})



