// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Doctors Dashboard',
  description: 'Your daily sessions at a glance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-gradientStart to-gradientEnd text-gray-800">
        {children}
      </body>
    </html>
  );
}
