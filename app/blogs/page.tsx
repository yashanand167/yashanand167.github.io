import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Image from "next/image";

export default function BlogsPage() {
    const posts = getAllPosts();

    return (
        <main className="w-full mx-auto">
            <Header />
            <div className="max-w-5xl mx-auto w-full min-h-screen flex border-x border-border">
                {/* Left Stipe */}
                <div className="w-8 md:w-14 bg-background border-r border-border shrink-0" />

                <main className="flex-1 min-w-0">
                    <div className="p-4 md:px-8 md:py-6">
                        <p className="text-sm text-neutral-500">
                            My Work Process
                        </p>
                        <p className="mt-2 text-lg md:text-lg">Explore product design, development and intersection of both</p>
                    </div>

                    <section className="relative w-full h-12 md:h-16 bg-stripe-horizontal">
                        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent pointer-events-none" />
                    </section>



                    <div className="p-4 md:p-12 space-y-12">
                        <div className="grid grid-cols-1 gap-8">
                            {posts.map((post, index) => (
                                <Link
                                    key={post.slug}
                                    href={`/blogs/${post.slug}`}
                                    className="group block relative"
                                >
                                    <div className="flex flex-col md:flex-row border border-border rounded-2xl overflow-hidden bg-muted/5 hover:bg-muted/10 transition-all hover:border-primary/50">

                                        {/* Image Container */}
                                        <div className="w-full md:w-[40%] aspect-[16/10] md:aspect-[16/10] relative overflow-hidden shrink-0">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 40vw"
                                                priority={index === 0}
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Content Container */}
                                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-center mb-4">
                                                    <span className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                                        {post.category} <span className="text-primary">•</span> {post.date}
                                                    </span>
                                                </div>

                                                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors mb-4">
                                                    {post.title}
                                                </h2>

                                                <p className="text-sm md:text-base text-muted-foreground line-clamp-2 leading-relaxed">
                                                    {post.excerpt}
                                                </p>
                                            </div>

                                            <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-6">
                                                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{post.readingTime}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-xs md:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                                    Read now
                                                    <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                                        <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-6 mt-12 mb-16 opacity-70">
                        <div className="h-px bg-gradient-to-r from-transparent to-border flex-1 max-w-[100px]" />
                        <p className="text-center text-lg md:text-xl font-medium text-muted-foreground tracking-wide">
                            More to come soon!
                        </p>
                        <div className="h-px bg-gradient-to-l from-transparent to-border flex-1 max-w-[100px]" />
                    </div>
                </main>


                {/* Right Stripe */}
                <div className="w-8 md:w-14 bg-background border-l border-border shrink-0" />
            </div>
        </main>
    );
}
