import "@/styles/globals.css";
import GlassPane from "@/components/GlassPane";

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
