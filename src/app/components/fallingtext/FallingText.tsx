"use client";

import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";

interface FallingTextProps {
  text?: string;
  highlightWords?: string[];
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  mouseConstraintStiffness?: number;
  fontSize?: string;
  highlightClass?: string;
}

const FallingText: React.FC<FallingTextProps> = ({
  text = "",
  highlightWords = [],
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = "1.5rem",
  highlightClass = "text-purple-700 font-bold",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const [effectStarted, setEffectStarted] = useState(false);

  useEffect(() => {
    if (!effectStarted) return;
    if (
      !containerRef.current ||
      !canvasContainerRef.current ||
      !textRef.current
    )
      return;

    const containerEl = containerRef.current;
    const canvasEl = canvasContainerRef.current;
    const textEl = textRef.current;

    const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } =
      Matter;

    const width = containerEl.offsetWidth;
    const height = containerEl.offsetHeight;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasEl,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes,
        pixelRatio: window.devicePixelRatio,
      },
    });

    const boundaries = [
      Bodies.rectangle(width / 2, height + 30, width, 50, { isStatic: true }),
      Bodies.rectangle(-30, height / 2, 60, height, { isStatic: true }),
      Bodies.rectangle(width + 30, height / 2, 60, height, { isStatic: true }),
    ];

    const words = text.split(" ");
    const spans = words.map((word) => {
      const span = document.createElement("span");
      span.innerText = word;
      span.style.position = "absolute";
      span.style.fontSize = fontSize;
      span.style.whiteSpace = "nowrap";
      span.style.transition = "all 0.3s";
      span.style.fontWeight = highlightWords.some((hw) => word.includes(hw))
        ? "bold"
        : "normal";
      span.className = highlightWords.some((hw) => word.includes(hw))
        ? highlightClass
        : "text-gray-800";

      textEl.appendChild(span);
      return span;
    });

    let offsetX =
      (width - spans.reduce((acc, s) => acc + s.offsetWidth + 10, 0)) / 2;
    const yStart = 100;

    spans.forEach((span) => {
      span.style.left = `${offsetX}px`;
      span.style.top = `${yStart}px`;
      offsetX += span.offsetWidth + 10;
    });

    const wordBodies = spans.map((span) => {
      const rect = span.getBoundingClientRect();
      const x = width / 2 + (Math.random() - 0.5) * 50;
      const y = 50 + Math.random() * 20;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: "transparent" },
        restitution: 0.9,
        frictionAir: 0.01,
        friction: 0.05,
        density: 0.002,
      });

      return { body, span };
    });

    const runner = Runner.create();
    const mouse = Mouse.create(containerEl);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });

    World.add(engine.world, [
      ...boundaries,
      mouseConstraint,
      ...wordBodies.map((wb) => wb.body),
    ]);

    render.mouse = mouse;
    Render.run(render);
    Runner.run(runner, engine);

    const update = () => {
      wordBodies.forEach(({ body, span }) => {
        const { x, y } = body.position;
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        span.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });

      requestAnimationFrame(update);
    };
    update();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);

      if (render.canvas && canvasEl.contains(render.canvas)) {
        canvasEl.removeChild(render.canvas);
      }

      textEl.innerHTML = "";
    };
  }, [
    effectStarted,
    backgroundColor,
    gravity,
    mouseConstraintStiffness,
    text,
    wireframes,
    fontSize,
    highlightWords,
    highlightClass,
  ]);

  const handleClick = () => {
    if (!effectStarted) {
      textRef.current?.replaceChildren(); // Clear existing text before animation
      setEffectStarted(true);
    }
  };

  return (
    <div className="relative w-full">
      <p className="absolute -top-7 md:-top-6 right-[-1.7rem] md:right-[-1.6rem] text-sm md:text-base text-white bg-[#5e17eb] font-semibold animate-rumble border-b-2 border-x-2 p-2 rounded-lg">
        Click Box To Rumble
      </p>

      <div
        ref={containerRef}
        onClick={handleClick}
        className="w-full max-h-[500px] h-[400px] cursor-pointer bg-transparent overflow-hidden rounded-t-xl border-b-0 border-purple-600"
      >
        {!effectStarted && (
          <p className="text-center text-gray-800 px-2 md:px-4 text-lg md:text-xl leading-relaxed py-6 mt-1 md:mt-4 font-medium text-[13.5px] sm:text-[15px] md:text-[0.8rem] lg:text-[1rem]">
            {text}
          </p>
        )}

        <div
          ref={textRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />

        <div
          ref={canvasContainerRef}
          className="absolute top-0 left-0 w-full h-full z-[-1]"
        />
      </div>
    </div>
  );
};

export default FallingText;
