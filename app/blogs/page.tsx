import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";

export default function BlogsPage() {
    const posts = getAllPosts();

    return (
        <main>
        <div className="max-w-5xl mx-auto w-full min-h-screen flex border-x border-border">
            {/* Left Stipe */}
            <div className="w-14 bg-background bg-stripe border-r border-border shrink-0 hidden md:block" />

            <main className="flex-1 p-6 md:p-12">
                <header className="mb-12">
                    <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
                        Blogs
                    </h1>
                    <p className="text-muted-foreground text-sm md:text-base max-w-xl">
                        Thoughts on design, engineering, and building digital products.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-8">
                    {posts.map((post) => (
                        <Link 
                            key={post.slug} 
                            href={`/blogs/${post.slug}`}
                            className="group block relative"
                        >
                            <div className="border border-border rounded-2xl p-6 bg-muted/5 hover:bg-muted/10 transition-all hover:border-primary/50">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="space-y-1">
                                        <span className="text-[10px] md:text-xs font-mono text-primary uppercase tracking-widest">
                                            {post.category} • {post.date}
                                        </span>
                                        <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                                <p className="text-sm md:text-base text-muted-foreground line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-[10px] md:text-xs text-muted-foreground font-mono">
                                    <span>{post.readingTime}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            {/* Right Stripe */}
            <div className="w-14 bg-background bg-stripe border-l border-border shrink-0 hidden md:block" />
        </div>
        </main>
    );
}
