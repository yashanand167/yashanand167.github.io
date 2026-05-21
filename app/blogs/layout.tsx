import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Yash Anand",
  description: "Explore product design, development and the intersection of both.",
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
