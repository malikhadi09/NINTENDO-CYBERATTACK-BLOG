
// Get the toggle switches from the DOM
const darkModeToggle = document.getElementById('toggle');
const textOnlyModeToggle = document.getElementById('text-only-mode-toggle');
const batteryOptimizedModeToggle = document.getElementById('battery-optimized-mode-toggle');

// Add event listeners to the toggle switches
darkModeToggle.addEventListener('change', toggleDarkMode);
textOnlyModeToggle.addEventListener('change', toggleTextOnlyMode);
batteryOptimizedModeToggle.addEventListener('change', toggleBatteryOptimizedMode);

// Function to toggle dark mode
function toggleDarkMode() {
  // Toggle a class on the body element to switch between light and dark mode
  document.body.classList.toggle('dark-mode', darkModeToggle.checked);
}

// Function to toggle text only mode
function toggleTextOnlyMode() {
  // Toggle a class on the body element to switch between normal and text only mode
  document.body.classList.toggle('text-only-mode', textOnlyModeToggle.checked);
}

// Function to toggle battery optimized mode
function toggleBatteryOptimizedMode() {
  // Toggle a class on the body element to switch between normal and battery optimized mode
  document.body.classList.toggle('battery-optimized-mode', batteryOptimizedModeToggle.checked);
}



if (navigator.getBattery) {
    navigator.getBattery().then(function(battery) {
        const batterySaverMode = battery.level <= 0.1;
        if (batterySaverMode) {
            document.body.classList.add("battery-saver-mode");
            body.classList.add('dark-mode');
        }
    });
}    