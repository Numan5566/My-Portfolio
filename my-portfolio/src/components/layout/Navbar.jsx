import { Menubar } from "primereact/menubar";

export default function Navbar() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const items = [
    { label: "Home", icon: "pi pi-home", command: () => scrollToSection("home") },
    { label: "About", icon: "pi pi-user", command: () => scrollToSection("about") },
    { label: "Projects", icon: "pi pi-folder", command: () => scrollToSection("projects") },
    { label: "Tech", icon: "pi pi-cog", command: () => scrollToSection("tech") },
    { label: "Contact", icon: "pi pi-envelope", command: () => scrollToSection("contact") },
  ];

  const start = (
    <div className="logo">
      Muhammad Numan
    </div>
  );

  return (
    <div className="navbar">
      <Menubar model={items} start={start} />
    </div>
  );
}