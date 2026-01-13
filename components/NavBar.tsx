"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

const NavBar = () => {
  const handleNavLinkClick = (linkName: string, destination: string) => {
    posthog.capture("nav_link_clicked", {
      link_name: linkName,
      destination: destination,
    });
  };

  return (
    <div>
      <header>
        <nav>
          <Link
            href="/"
            className="logo"
            onClick={() => handleNavLinkClick("logo", "/")}
          >
            <Image src="/icons/logo.png" alt="Logo" width={24} height={24} />

            <p>DevEvent</p>
          </Link>
          <ul>
            <Link
              href="/"
              onClick={() => handleNavLinkClick("Home", "/")}
            >
              Home
            </Link>
            <Link
              href="/events"
              onClick={() => handleNavLinkClick("Events", "/events")}
            >
              Events
            </Link>
            <Link
              href="/create"
              onClick={() => handleNavLinkClick("Create Event", "/create")}
            >
              Create Event
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
