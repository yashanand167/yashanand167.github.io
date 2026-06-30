import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs & Thoughts | Yash Anand",
  description: "Reflections on design, technology, and personal stories.",
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
