"use client";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Sidebar />
          <main className="content">{children}</main>
        </div>

        <style jsx>{`
          .layout {
            display: flex;   
          }
          .content {
            padding: 20px;
            flex-grow: 1;
            min-height: 100vh;
          }
        `}</style>
      </body>
    </html>
  );
}
