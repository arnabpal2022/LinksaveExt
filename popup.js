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

document.getElementById('open-localhost').addEventListener('click', () => {
  chrome.tabs.create({ url: 'http://localhost:3000/' });
});
