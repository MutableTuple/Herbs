import React, { useEffect } from "react";

const ThemeSwitcher = () => {
  const getStoredTheme = () => localStorage.getItem("theme");
  const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    // Set default theme to 'light'.
    // Possible options: 'dark' or system color mode (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    return "light";
  };

  const setTheme = (theme) => {
    if (
      theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  };

  const showActiveTheme = (theme) => {
    const themeSwitcher = document.querySelector('[data-bs-toggle="mode"]');

    if (!themeSwitcher) {
      return;
    }

    const themeSwitcherCheck = themeSwitcher.querySelector(
      'input[type="checkbox"]'
    );

    if (theme === "dark") {
      themeSwitcherCheck.checked = "checked";
    } else {
      themeSwitcherCheck.checked = false;
    }
  };

  useEffect(() => {
    const storedTheme = getStoredTheme();
    const preferredTheme = getPreferredTheme();

    if (storedTheme && storedTheme !== preferredTheme) {
      setTheme(storedTheme);
      showActiveTheme(storedTheme);
    } else {
      setStoredTheme(preferredTheme);
      setTheme(preferredTheme);
      showActiveTheme(preferredTheme);
    }

    const handleSystemThemeChange = () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        setTheme(getPreferredTheme());
      }
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleSystemThemeChange);

    const handleThemeSwitch = () => {
      const themeSwitcher = document.querySelectorAll(
        '[data-bs-toggle="mode"]'
      );
      themeSwitcher.forEach((toggle) => {
        toggle.addEventListener("click", () => {
          const theme =
            toggle.querySelector('input[type="checkbox"]').checked === true
              ? "dark"
              : "light";
          setStoredTheme(theme);
          setTheme(theme);
          showActiveTheme(theme, true);
        });
      });
    };

    handleThemeSwitch();

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ThemeSwitcher;
