export default function HeroWithScale() {
    return (
        <section className="relative h-screen w-full overflow-hidden border-b border-border">
            {/* <HorizontalStripes /> */}
            <div className="relative z-10 h-14 bg-stripe" />
        </section>
    );
}

const HorizontalStripes = () => {
    return (
        <div className="absolute inset-0 bg-stripe-horizontal opacity-20 pointer-events-none" />
    )
}