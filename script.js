document.addEventListener("DOMContentLoaded", function() {
    const entryContent = document.getElementById("entry-content");
    const saveButton = document.getElementById("save-button");
    const entryList = document.getElementById("entry-list");

    saveButton.addEventListener("click", function() {
        const content = entryContent.value.trim();
        if (content !== "") {
            const entryItem = document.createElement("li");
            entryItem.textContent = content;
            entryList.appendChild(entryItem);
            entryContent.value = "";
        }
    });

    entryList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.remove();
        }
    });
});