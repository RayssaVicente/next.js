import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Theme appearance="dark">
          {children}
        </Theme>
      </body>
    </html>
  );
}
