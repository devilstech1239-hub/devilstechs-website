import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111] pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12 items-start">
        {/* Brand */}
        <div className="flex flex-col md:col-span-1">
          <Link href="/" className="z-50 relative flex items-center mb-6 h-[40px] md:h-[50px]">
            <Image src="/devils-brand-new.png" alt="DevilsTechs Logo" width={220} height={70} className="object-contain object-left" priority />
          </Link>
          <p className="text-text-gray leading-relaxed text-sm pr-4">
            We provoke change and create success for premium brands through high-end web development, growth marketing, and digital innovation.
          </p>
          <div className="flex gap-4 mt-8">
            {/* Instagram */}
            <Link href="https://www.instagram.com/devilstech1239/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-dark transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </Link>
            {/* Facebook */}
            <Link href="https://www.facebook.com/profile.php?id=61569093374909" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-dark transition-all duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
            {/* LinkedIn */}
            <Link href="https://www.linkedin.com/in/devil-s-tech-5a334a2b6/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-dark transition-all duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
            {/* X (Twitter) */}
            <Link href="https://x.com/d_tech1239" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-dark transition-all duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 h-[40px] md:h-[50px] flex items-center">Quick Links</h4>
          <ul className="space-y-4">
            {["Home", "About Us", "Services", "Portfolio", "Contact"].map((link) => (
              <li key={link}>
                <Link href="#" className="text-text-gray hover:text-primary transition-colors text-sm font-medium">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 h-[40px] md:h-[50px] flex items-center">Services</h4>
          <ul className="space-y-4">
            {["SEO Optimization", "Performance Marketing", "Web Development", "Social Media", "Authority Backlinks"].map((link) => (
              <li key={link}>
                <Link href="#" className="text-text-gray hover:text-primary transition-colors text-sm font-medium">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 h-[40px] md:h-[50px] flex items-center">Contact Info</h4>
          <ul className="space-y-4 text-sm text-text-gray">
            <li className="flex flex-col gap-1">
              <span className="text-white font-medium uppercase text-xs tracking-wider">Address:</span>
              <span>V3 mall, adajan, surat, gujarat.india</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-white font-medium uppercase text-xs tracking-wider">Phone:</span>
              <span>+918160969105</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-white font-medium uppercase text-xs tracking-wider">Email:</span>
              <span>support@devilstechs.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-text-gray tracking-wider uppercase">
        <p>&copy; 2026 DevilsTechs Digital Marketing Agency. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
