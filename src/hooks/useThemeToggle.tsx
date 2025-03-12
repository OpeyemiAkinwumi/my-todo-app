import { useEffect, useState } from "react";

function useThemeToggle(): [
  "light" | "dark",
  React.Dispatch<React.SetStateAction<"light" | "dark">>
] {
  const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
  const [theme, setTheme] = useState<"light" | "dark">(storedTheme || "dark");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [theme, setTheme];
}

export default useThemeToggle;
