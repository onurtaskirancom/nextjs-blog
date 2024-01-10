import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { ModeToggle } from '@/components/mode-toggle';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Onur Taskiran Blog Web Site',
  description:
    "Onur Taskiran's personal blog web site. I share posts in software, design, video game, cinema, sports, etc.",
  keywords:
    'Personal blog, onur taşkıran, javascript, react, web, game, cinema, software, onur taskiran, web developer',
  author: 'onur taskiran',
  twitter: {
    card: 'summary_large_image',
    title: 'Onur Taskiran Blog Web Site',
    description:
      "Onur Taskiran's personal blog web site. I share posts in software, design, video game, cinema, sports, etc",
    creator: '@onurtskrncom',
    url: 'https://onurtaskiran.com',
    images: ['https://onurtaskiran.com/images/default.jpeg'],
  },
  icons: {
    icon: [
      { url: '/images/icon.png' },
      new URL('/images/icon.png', 'https://onurtaskiran.com'),
      { url: '/images/icon.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: ['/images/shortcut-icon.png'],
    apple: [
      { url: '/images/apple-icon.png' },
      {
        url: '/images/apple-icon-x3.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/images/apple-touch-icon-precomposed.png',
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const bioCard = () => {
  return (
    <div className="text-sm leading-6 mt-3">
      <figure className="relative flex flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
        <figcaption className="flex items-center space-x-4">
          <img
            src="/images/onurtaskiran.jpg"
            alt="onurtaskiran"
            className="flex-none w-28 h-28 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="flex-auto text-[16px] ">
            <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
              <Link href="/about">
                {/* <span className="absolute inset-0 dark:text-tahiti-name"></span> */}
                <p className="dark:text-tahiti-name">Onur Taşkıran</p>
              </Link>
            </div>
            <div className="mt-0.5 dark:text-tahiti-title">Web Developer</div>

            <blockquote className="mt-2 text-slate-700 dark:text-slate-300">
              <p className="dark:text-tahiti-bio">
                Hi, I'm Onur Taşkıran👋🏼 I love coding, designing and doing
                sports. I have been working as a Web Developer and Graphic
                Designer for many years. My current focus is coding modern
                technologies using React & Node.js
              </p>
            </blockquote>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

const socialMedia = () => {
  return (
    <div className="float-right">
      <div className="text-[20px]">
        <ul className="flex mt-4 py1 space-x-1">
          <li>
            <a href="https://github.com/onurtaskirancom" target="_blank">
              <FaGithub />
            </a>
            &nbsp;
          </li>
          <li>
            <a
              href="https://tr.linkedin.com/in/onurtaskirancom"
              target="_blank"
            >
              <CiLinkedin />
            </a>
            &nbsp;
          </li>
          <li>
            <a href="https://twitter.com/onurtskrncom" target="_blank">
              <FaXTwitter />
            </a>
            &nbsp;
          </li>
          <li>
            <a href="https://instagram.com/onurtskrncom" target="_blank">
              <FaInstagram />
            </a>
            &nbsp;
          </li>
          <li>
            <a href="mailto:onurtaskirancom@gmail.com" target="_blank">
              <CiMail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      ) : null}
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-4xl mx-auto py-1 px-4 ">
            <header>
              <div>{socialMedia()}</div>
              <div>
                <Link href="/">
                  <h1 className="text-[38px] p-5 py-3 font-extrabold dark:text-tahiti-heed">
                    Onur Taskiran Blog Web Site
                  </h1>
                </Link>
                <div>{bioCard()}</div>
              </div>
              <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-3 dark:text-tahiti-menu text-[16.3px] font-black ">
                  <Link
                    className="dark:hover:text-tahiti-title dark:hover:underline "
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="dark:hover:text-tahiti-title dark:hover:underline"
                    href="/about"
                  >
                    About
                  </Link>
                  <Link
                    className="dark:hover:text-tahiti-title dark:hover:underline"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
            <div>
              <br />
              <strong className="dark:text-tahiti-footer float-left">
                onurtaskiran.com Copyright {new Date().getFullYear()} &copy; All
                rights
              </strong>
              <div className="mb-8 ml-auto text-sm font-medium space-x-6 dark:text-tahiti-title float-right">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
