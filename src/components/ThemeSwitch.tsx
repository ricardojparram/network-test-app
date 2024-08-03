if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

export function ThemeSwitch() {
  const toggleTheme = () => {
    const theme = localStorage.theme;
    if (theme === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <div class=" ml-3">
      <input type="checkbox" name="light-switch" class="light-switch sr-only" />
      <label
        class="relative cursor-pointer p-2"
        for="light-switch"
        onClick={toggleTheme}
      >
        <svg
          class="w-10 h-10 hidden dark:block  fill-slate-400 drop-shadow-yellow-lg hover:drop-shadow-yellow-xl hover:scale-105 transition-all"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffe600"
            d="M11.5 8a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"
          />
          <path
            fill="#ffd000"
            fill-rule="evenodd"
            d="M7.5 1.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M3.08 3.08a.75.75 0 0 1 1.062 0l.216.217a.75.75 0 0 1-1.061 1.06l-.216-.216a.75.75 0 0 1 0-1.06m8.839 0a.75.75 0 0 1 0 1.061l-.216.216a.75.75 0 1 1-1.06-1.06l.215-.216a.75.75 0 0 1 1.061 0M1.25 7.5A.75.75 0 0 1 2 6.75h.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m3.108 3.143a.75.75 0 0 1 0 1.06l-.216.216a.75.75 0 0 1-1.061-1.06l.216-.216a.75.75 0 0 1 1.06 0"
            clip-rule="evenodd"
          />
          <path
            fill="white"
            d="M16.286 22C19.442 22 22 19.472 22 16.353c0-2.472-1.607-4.573-3.845-5.338C17.837 8.194 15.415 6 12.476 6C9.32 6 6.762 8.528 6.762 11.647c0 .69.125 1.35.354 1.962a4.351 4.351 0 0 0-.83-.08C3.919 13.53 2 15.426 2 17.765C2 20.104 3.919 22 6.286 22z"
          />
        </svg>

        <svg
          class="w-10 h-10 dark:hidden fill-slate-400 drop-shadow-blue-lg hover:drop-shadow-blue-xl hover:scale-105 transition-all"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"
            opacity=".5"
          />
          <path d="M11.286 22C13.337 22 15 20.42 15 18.47c0-1.544-1.045-2.857-2.5-3.336C12.295 13.371 10.72 12 8.81 12c-2.052 0-3.715 1.58-3.715 3.53c0 .43.082.844.23 1.226a2.949 2.949 0 0 0-.54-.05C3.248 16.706 2 17.89 2 19.353C2 20.815 3.247 22 4.786 22z" />
        </svg>

        <span class="sr-only">Switch to light / dark version</span>
      </label>
    </div>
  );
}
