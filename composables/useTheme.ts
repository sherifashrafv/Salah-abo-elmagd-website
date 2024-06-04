// useSetTheme.ts
export type Theme = "light" | "dark";

export default function useTheme() {
  const enabled = useState<boolean | null>("theme", () => null);
  onMounted(() => {
    enabled.value = localStorage.getItem("theme") === "dark" ? true : false;
  });

  function toggleTheme(newTheme: Theme) {
    enabled.value = !enabled.value;
    localStorage.setItem("theme", enabled.value ? "dark" : "light");
    setTheme();
    useColorMode().preference = newTheme;
  }
  function setTheme() {
    const theme = localStorage.getItem("theme");
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("prefers-color").matches)
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }
  return { toggleTheme };
}
