import { Poppins } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata = {
  title: 'Parthiban Ramachandran Portfolio',
  description: 'I’m Parthiban Ramachandran, an experienced Web Developer with 2 years of hands-on experience building responsive and dynamic web applications using HTML, CSS, Bootstrap, JavaScript, React.js, and Next.js. I’m proficient in version control with Git and GitHub, and skilled in collaborating using tools like ChatGPT to streamline development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
