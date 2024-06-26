document.getElementById('colorPicker').addEventListener('input', function(event) {
    const color = event.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { color: color });
    });
  });
  