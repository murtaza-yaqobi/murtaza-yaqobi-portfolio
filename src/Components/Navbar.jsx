import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-blue-600">Murtaza Yaqobi</h1>
        <nav className="hidden md:flex space-x-6">
          {[
            "home",
            "about",
            "skills",
            "projects",
            "contact",
            <i className="fas fa-moon"></i>,
          ].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover:text-blue-600 capitalize"
            >
              {link}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl hover:cursor-pointer"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {open && (
        <div className="flex flex-col bg-white md:hidden shadow">
          {["home", "about", "skills", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="px-4 py-2 hover:bg-gray-100 capitalize"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
