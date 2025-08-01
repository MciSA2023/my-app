import React from 'react';

// --- TYPDEFINITIONEN ---
interface SocialLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

interface SocialSidebarProps {
  socialLinks: SocialLink[];
}

// --- DATEN ---
const socialLinksData: SocialLink[] = [
  { name: 'Instagram', href: 'https://www.instagram.com/a.p.visuals_/', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
    )
  },
  { name: 'Vimeo', href: 'https://vimeo.com/your-profile', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-vimeo"><path d="M2.87 18.237a1 1 0 0 1-.689-1.28l1.93-7.584a.5.5 0 0 1 .53-.377L20.254 9.17c.607-.063 1.132.396 1.132.997a.99.99 0 0 1-.789.988l-5.69 1.138c-1.37.273-2.164 1.777-1.442 3.01l1.455 2.477c.307.52.029 1.18-.584 1.34L3.774 19.34a1.002 1.002 0 0 1-.904-1.103z"/></svg>
    )
  },
  { name: 'Twitter', href: 'https://twitter.com/your-profile', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 11.5-13.3 10.1 6.6-8.3 12.1-12.7 13.4-15.5H22z"/></svg>
    )
  },
  { name: 'Facebook', href: 'https://www.facebook.com/your-profile', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    )
  },
];

// SocialSidebar Komponente
const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 p-4 hidden md:flex flex-col items-center space-y-4 z-40">
      {socialLinksData.map((link) => (
        <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-500 transition-colors duration-300">
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
