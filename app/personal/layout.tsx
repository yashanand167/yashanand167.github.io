import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal | Yash Anand",
  description: "A journey through my experiences, side projects, and current explorations.",
};

export default function PersonalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
