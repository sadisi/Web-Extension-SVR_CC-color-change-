document.getElementById('colorPicker').addEventListener('input', function(event) {
    const color = event.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: changeBackgroundColor,
        args: [color]
      });
    });
  });
  
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  