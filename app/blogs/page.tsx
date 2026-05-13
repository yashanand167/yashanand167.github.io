import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";

export default function BlogsPage() {
    const posts = getAllPosts();

    return (
        <main className="w-full mx-auto">
            <Header />
            <div className="max-w-5xl mx-auto w-full min-h-screen flex border-x border-border">
                {/* Left Stipe */}
                <div className="w-14 bg-background  border-r border-border shrink-0 hidden md:block" />

                <main className="flex-1 min-w-0">
                    <div className="p-4 md:px-8 md:py-6 border-b border-border">
                        <h1 className="text-xl md:text-2xl font-medium tracking-tight">Thoughts and learnings</h1>
                        <p>Explore product design, development and intersection of both</p>
                    </div>

                    <div className="p-4 md:p-12 space-y-12">
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
                                        <p className="text-sm md:text-base text-muted-foreground line-clamp-2 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-6 flex items-center gap-2 text-[10px] md:text-xs text-muted-foreground font-mono">
                                            <span>{post.readingTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Right Stripe */}
                <div className="w-14 bg-background  border-l border-border shrink-0 hidden md:block" />
            </div>
        </main>
    );
}
