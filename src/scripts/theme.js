// This script runs before the page loads to prevent flickering
// It sets the theme based on localStorage or system preference
(function () {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (savedTheme === "light") {
    document.documentElement.classList.add("light");
  } else {
    // If no saved preference, check OS preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }
})();
