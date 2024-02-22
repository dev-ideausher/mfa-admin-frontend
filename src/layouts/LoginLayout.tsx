export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            backgroundImage: `url("/images/login.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
          }}
          className="h-screen w-screen flex justify-center items-center"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
