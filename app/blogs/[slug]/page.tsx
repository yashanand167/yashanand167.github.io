import { getPostData, getAllPosts } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

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
            <div className="max-w-5xl mx-auto w-full min-h-screen flex border-x border-border">
                {/* Left Stripe */}
                <div className="w-6 md:w-14 bg-background bg-stripe border-r border-border shrink-0 hidden md:block" />

                <main className="flex-1 p-6 md:p-12">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Blogs
                    </Link>

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
                <div className="w-6 md:w-14 bg-background bg-stripe border-l border-border shrink-0 hidden md:block" />
            </div>
        );
    } catch (e) {
        notFound();
    }
}
