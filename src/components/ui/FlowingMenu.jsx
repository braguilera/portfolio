import React from 'react';
import { gsap } from 'gsap';

function FlowingMenu({ items = [], onSelect }) {
  return (
    <div className="w-full h-full overflow-y-auto custom-scrollbar">
      <nav className="flex flex-col h-full m-0 p-0 gap-px">
        {items.map((item, idx) => (
          <MenuItem 
            key={idx} 
            text={item.text}
            image={item.image}
            onClick={() => onSelect(item.text)}
          />
        ))}
      </nav>
    </div>
  )
}

function MenuItem({ text, image, onClick }) { 
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' });
  };

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="text-violet-600 uppercase font-semibold text-xl lg:text-2xl leading-tight px-4">
        {text}
      </span>
      <div
        className="w-32 h-20 lg:w-40 lg:h-24 my-2 mx-4 rounded-xl bg-cover bg-center shadow-lg border border-purple-100"
        style={{ backgroundImage: `url(${image})` }}
      />
    </React.Fragment>
  ));

  return (
    <div 
      className="group relative h-24 lg:h-28 overflow-hidden text-center bg-white/5 hover:bg-purple-50 transition-colors"
      ref={itemRef}
    >
      <p
        className="flex items-center justify-center h-full relative cursor-pointer uppercase font-bold text-violet-600 text-lg lg:text-xl tracking-wide hover:text-purple-900 transition-colors px-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {text}
        <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent group-hover:via-purple-300 transition-all" />
      </p>
      
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-gradient-to-b from-purple-50 to-white translate-y-[101%]"
        ref={marqueeRef}
      >
        <div className="h-full w-[300%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
