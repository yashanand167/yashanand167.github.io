"use client";

import React, { useEffect, useRef } from "react";

interface Dot {
    x0: number; // original grid x
    y0: number; // original grid y
    x: number;  // current animated x
    y: number;  // current animated y
    vx: number; // velocity x
    vy: number; // velocity y
}

export function FluidDotGrid() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mouseRef = useRef({ x: 0, y: 0, isHovered: false });
    const dotsRef = useRef<Dot[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        // Attach event listeners to the parent section to capture mouse movement anywhere over it
        const parent = container.parentElement;
        if (!parent) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const gridSpacing = 24;
        const dotRadius = 1.25;

        const initGrid = () => {
            const rect = parent.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;

            const dots: Dot[] = [];
            const cols = Math.ceil(rect.width / gridSpacing) + 1;
            const rows = Math.ceil(rect.height / gridSpacing) + 1;

            // Offset to center the grid perfectly inside the section bounds
            const offsetX = (rect.width - (cols - 1) * gridSpacing) / 2;
            const offsetY = (rect.height - (rows - 1) * gridSpacing) / 2;

            for (let c = 0; c < cols; c++) {
                for (let r = 0; r < rows; r++) {
                    const x0 = offsetX + c * gridSpacing;
                    const y0 = offsetY + r * gridSpacing;
                    dots.push({
                        x0,
                        y0,
                        x: x0,
                        y: y0,
                        vx: 0,
                        vy: 0,
                    });
                }
            }
            dotsRef.current = dots;
        };

        initGrid();

        const handleMouseMove = (e: MouseEvent) => {
            const rect = parent.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;
            mouseRef.current.isHovered = true;
        };

        const handleMouseEnter = () => {
            mouseRef.current.isHovered = true;
        };

        const handleMouseLeave = () => {
            mouseRef.current.isHovered = false;
        };

        parent.addEventListener("mousemove", handleMouseMove);
        parent.addEventListener("mouseenter", handleMouseEnter);
        parent.addEventListener("mouseleave", handleMouseLeave);

        const resizeObserver = new ResizeObserver(() => {
            initGrid();
        });
        resizeObserver.observe(parent);

        const stiffness = 0.08;
        const damping = 0.82;
        const influenceRadius = 110;
        const maxPush = 22;

        const draw = () => {
            const rect = parent.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);

            // Read the CSS pattern-color variable so we automatically match theme mode (light/dark)
            const patternColor = getComputedStyle(canvas).getPropertyValue("--pattern-color") || "rgba(0, 0, 0, 0.15)";
            ctx.fillStyle = patternColor;

            const dots = dotsRef.current;
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const isHovered = mouseRef.current.isHovered;

            for (let i = 0; i < dots.length; i++) {
                const dot = dots[i];
                let targetX = dot.x0;
                let targetY = dot.y0;

                if (isHovered) {
                    const dx = dot.x0 - mx;
                    const dy = dot.y0 - my;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < influenceRadius) {
                        const force = (influenceRadius - dist) / influenceRadius;
                        const angle = Math.atan2(dy, dx);

                        // Push the dots away from the cursor
                        targetX = dot.x0 + Math.cos(angle) * force * maxPush;
                        targetY = dot.y0 + Math.sin(angle) * force * maxPush;
                    }
                }

                // Spring physics calculation
                const ax = (targetX - dot.x) * stiffness;
                const ay = (targetY - dot.y) * stiffness;
                dot.vx = (dot.vx + ax) * damping;
                dot.vy = (dot.vy + ay) * damping;
                dot.x += dot.vx;
                dot.y += dot.vy;

                // Draw the dot
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            parent.removeEventListener("mousemove", handleMouseMove);
            parent.removeEventListener("mouseenter", handleMouseEnter);
            parent.removeEventListener("mouseleave", handleMouseLeave);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <canvas ref={canvasRef} className="block pointer-events-none" />
        </div>
    );
}
