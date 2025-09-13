import Logo from "./logo";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="z-20 flex items-center justify-between p-2 fixed top-0 left-0 right-0">
      <Logo />
      <nav></nav>
      <ThemeToggle />
    </header>
  );
}
