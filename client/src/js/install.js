const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// Show the install button
window.addEventListener("beforeinstallprompt", (event) => {
    window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // Get the deferred prompt
  const promptEvent = window.deferredPrompt;
  // If there's no prompt, do nothing
  if (!promptEvent) {
    return;
  }
  // Show the prompt
  promptEvent.prompt();
  // Wait for the user to respond to the prompt
  window.deferredPrompt = null;
  // Hide the button
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // Clear the prompt
  window.deferredPrompt = null;
});
