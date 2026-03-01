import Link from "next/link";
import Image from "next/image";
import { companyTagline, companyAddress, companyCity, footerLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="bn">
            <Image
              src="/logo.png"
              alt="Lone Tree Companies"
              height={28}
              width={176}
              style={{ height: 28, width: "auto", filter: "brightness(0) invert(1)" }}
            />
          </div>
          <p>{companyTagline}</p>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          {footerLinks.company.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h5>Partners</h5>
          {footerLinks.partners.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>

        <div className="footer-col">
          <h5>Connect</h5>
          {footerLinks.connect.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
          <span style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,.55)", marginBottom: 12, fontWeight: 400 }}>
            {companyAddress}
          </span>
          <span style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,.55)", fontWeight: 400 }}>
            {companyCity}
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Lone Tree Companies</span>
        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
