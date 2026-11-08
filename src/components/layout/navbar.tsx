"use client";
import Link from "next/link";
// import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/shared/icon";
import { courses } from "@/data/courses";
import { site } from "@/data/site";
const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Trainers", "/trainers"],
  ["Blogs", "/blogs"],
  ["Contact", "/contact"],
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  return (
    <>
      <div className="announcement">
        <span className="announcement-dot" /> {site.announcement}{" "}
        <Link href="/contact">
          Request batch details <Icon name="arrow" size={13} />
        </Link>
      </div>
      <header className="site-header">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="Learning Pattern home">
            {/* <Image
              src="/logos/logo.png"
              alt="Learning Pattern"
              width={46}
              height={46}
              priority
            /> */}
            <span>
              learning<span>pattern</span>
              <small>BUILD WHAT&apos;S NEXT</small>
            </span>
          </Link>
          <nav className={`desktop-nav ${open ? "mobile-open" : ""}`}>
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <div
              className="nav-dropdown"
              onMouseEnter={() => setCourseOpen(true)}
              onMouseLeave={() => setCourseOpen(false)}
            >
              <button
                onClick={() => setCourseOpen(!courseOpen)}
                aria-expanded={courseOpen}
              >
                Courses <Icon name="chevron" size={14} />
              </button>
              {courseOpen && (
                <div className="dropdown-panel">
                  <Link
                    href="/courses"
                    className="dropdown-all"
                    onClick={() => setOpen(false)}
                  >
                    Explore all programs <Icon name="arrow" size={14} />
                  </Link>
                  {courses.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/courses/${c.slug}`}
                      onClick={() => {
                        setOpen(false);
                        setCourseOpen(false);
                      }}
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {links.slice(1).map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link className="nav-login" href="/login">
              Login
            </Link>
            <Link className="button button-small" href="/contact">
              Book free demo <Icon name="arrow" size={15} />
            </Link>
          </nav>
          <button
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <Icon name="close" /> : <Icon name="menu" />}
          </button>
        </div>
      </header>
    </>
  );
}
