/* =========================================================
   CHANGES.OS — LAUNCHER
   JavaScript leve
   ========================================================= */

const systemApps = document.querySelectorAll(".system-app");

systemApps.forEach(function (app) {
    app.addEventListener("click", function (event) {
        event.preventDefault();

        const action = app.dataset.action;
        handleSystemAction(action);
    });
});

function handleSystemAction(action) {
    switch (action) {
        case "files":
            showUnavailableMessage(
                "Arquivos",
                "A integração com o gerenciador de arquivos será adicionada ao ChangeOS."
            );
            break;

        case "terminal":
            showUnavailableMessage(
                "Terminal",
                "A integração com o terminal será adicionada ao ChangeOS."
            );
            break;

        case "settings":
            showUnavailableMessage(
                "Configurações",
                "A integração com as configurações será adicionada ao ChangeOS."
            );
            break;

        default:
            console.log("Ação desconhecida:", action);
    }
}

function showUnavailableMessage(title, message) {
    alert(title + "\n\n" + message);
}
