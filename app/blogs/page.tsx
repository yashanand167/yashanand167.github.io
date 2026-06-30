import { getAllPosts } from "@/lib/blog";
import Header from "@/components/Header";
import BlogListClient from "@/components/blog-list-client";

export default function BlogsPage() {
    const posts = getAllPosts();

    return (
        <main className="w-full mx-auto">
            <Header />
            <div className="max-w-5xl mx-auto w-full min-h-screen flex border-x border-border">
                {/* Left Stipe */}
                <div className="w-6 md:w-14 bg-background border-r border-border shrink-0" />

                <main className="flex-1 min-w-0">
                    <div className="p-4 md:px-8 md:py-6">
                        <p className="text-sm text-neutral-500">
                            Blogs & Thoughts
                        </p>
                        <p className="mt-2 text-lg md:text-lg">Reflections on design, technology, and personal stories.</p>
                    </div>

                    <BlogListClient posts={posts} />

                    <div className="flex items-center justify-center gap-6 mt-12 mb-16 opacity-70">
                        <div className="h-px bg-gradient-to-r from-transparent to-border flex-1 max-w-[100px]" />
                        <p className="text-center text-lg md:text-xl font-medium text-muted-foreground tracking-wide">
                            More to come soon!
                        </p>
                        <div className="h-px bg-gradient-to-l from-transparent to-border flex-1 max-w-[100px]" />
                    </div>
                </main>


                {/* Right Stripe */}
                <div className="w-6 md:w-14 bg-background border-l border-border shrink-0" />
            </div>
        </main>
    );
}
