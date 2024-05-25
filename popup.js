document.getElementById("save-url").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    const url = currentTab.url;

    fetch("http://localhost:3000/api/save-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
      });
  });
});

document.getElementById("view-urls").addEventListener("click", () => {
  const savedUrlsDiv = document.getElementById("saved-urls");
  const urlList = document.getElementById("url-list");
  urlList.innerHTML = "";

  fetch("http://localhost:3000/api/get-urls")
    .then((response) => response.json())
    .then((data) => {
      const savedUrls = data.urls;
      savedUrls.forEach((url) => {
        const listItem = document.createElement("li");
        listItem.textContent = url;
        urlList.appendChild(listItem);
      });

      savedUrlsDiv.style.display = "block";
    });
});
