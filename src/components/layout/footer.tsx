import Link from "next/link";
// import Image from "next/image";
import { Icon } from "@/components/shared/icon";
import { courses } from "@/data/courses";
import { site } from "@/data/site";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand brand-light">
              {/* <Image
                src="/logos/logo.png"
                alt="Learning Pattern"
                width={42}
                height={42}
              /> */}
              <span>
                learning<span>pattern</span>
                <small>BUILD WHAT&apos;S NEXT</small>
              </span>
            </Link>
            <p>
              Structured learning for people ready to build useful things with
              technology.
            </p>
            <div className="social-links">
              {site.socials.map((s) => (
                <Link key={s.label} href={s.href} aria-label={s.label}>
                  {s.label}
                </Link>
              ))}
            </div>
            <Link className="footer-cta" href="/contact">
              Start a conversation <Icon name="arrow" size={15} />
            </Link>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <Link href="/about">About us</Link>
            <Link href="/courses">All courses</Link>
            <Link href="/trainers">Trainers</Link>
            <Link href="/blogs">Insights</Link>
            <Link href="/pricing">Fees & batches</Link>
          </div>
          <div className="footer-col">
            <h4>Programs</h4>
            {courses.slice(0, 5).map((c) => (
              <Link key={c.slug} href={`/courses/${c.slug}`}>
                {c.title}
              </Link>
            ))}
          </div>
          <div className="footer-col footer-contact">
            <h4>Get in touch</h4>
            <span>
              <Icon name="mail" size={15} />
              {site.email}
            </span>
            <span>
              <Icon name="phone" size={15} />
              {site.phone}
            </span>
            <span>
              <Icon name="pin" size={15} />
              {site.location}
            </span>
            <Link href="/contact">
              Send an enquiry <Icon name="arrow" size={14} />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Learning Pattern. All rights reserved.
          </span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <span>Made for curious minds.</span>
        </div>
      </div>
    </footer>
  );
}
