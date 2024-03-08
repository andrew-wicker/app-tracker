document.getElementById('login').addEventListener('click', () => {
  chrome.identity.getAuthToken({ interactive: true }, (token) => {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError);
      return;
    }
    console.log('Token acquired: ', token);
  });
});
