import { getPostData, getAllPosts } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ThemeToggle from "@/components/theme-toggle";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    try {
        const post = await getPostData(slug);

        return (
            <main>
                <div className="w-full min-h-screen relative">
                    <div className="absolute inset-0 bg-grid opacity-10 mask-radial-faded pointer-events-none" />
                    <div className="relative z-10 max-w-5xl mx-auto w-full min-h-screen flex">
                        {/* Left Stripe */}
                        <div className="w-6 md:w-14 border-r border-border shrink-0 hidden md:block" />

                        <main className="flex-1 p-6 md:p-12">
                            <div className="flex items-center justify-between border-b border-border pb-6 mb-12">
                                <Link
                                    href="/blogs"
                                    className="inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors group"
                                >
                                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                    Back to Blogs
                                </Link>
                                <ThemeToggle />
                            </div>

                            <article>
                                <header className="mb-12">
                                    <div className="flex items-center gap-3 text-[10px] md:text-xs font-mono text-primary uppercase tracking-widest mb-4">
                                        <span>{post.category}</span>
                                        <span className="text-border">•</span>
                                        <span>{post.date}</span>
                                        <span className="text-border">•</span>
                                        <span>{post.readingTime}</span>
                                    </div>
                                    <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground leading-tight">
                                        {post.title}
                                    </h1>
                                </header>

                                {/* Blog Content */}
                                <div
                                    className="blog-content text-muted-foreground leading-relaxed md:text-lg space-y-6"
                                    dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
                                />
                            </article>
                        </main>

                        {/* Right Stripe */}
                        <div className="w-6 md:w-14 border-l border-border shrink-0 hidden md:block" />
                    </div>
                </div>
                <footer className="w-full relative h-48 md:h-80 flex items-center justify-center border-t border-border overflow-hidden bg-background group">
                    <div className="absolute inset-0 bg-dot opacity-[0.5] pointer-events-none" />

                    <h2
                        className="relative z-10 text-[7vw] md:text-[7vw] lg:text-[6vw] font-bold tracking-tighter whitespace-nowrap opacity-20 group-hover:opacity-100 transition-all duration-1000 uppercase text-foreground [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_currentColor] md:[-webkit-text-stroke:2px_currentColor] cursor-default select-none group-hover:scale-105"
                    >
                        Written With Intent
                    </h2>
                </footer>
            </main>
        );
    } catch (e) {
        notFound();
    }
}
