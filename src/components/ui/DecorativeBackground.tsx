const DecorativeBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Blob 1 - Top left - Optimized */}
      <div 
        className="absolute top-20 -left-20 w-[450px] h-[450px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-primary/15 to-primary/25 blur-2xl will-change-transform animate-float-gentle"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Blob 2 - Mid right */}
      <div 
        className="absolute top-[800px] -right-32 w-[500px] h-[500px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-bl from-primary/10 to-secondary/40 blur-2xl will-change-transform animate-float-gentle"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Leaf SVG 1 - Optimized */}
      <svg 
        className="absolute top-[400px] left-[5%] w-24 h-24 text-primary/20 will-change-transform animate-float-gentle rotate-12"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M50 5C50 5 20 30 20 60C20 80 35 95 50 95C65 95 80 80 80 60C80 30 50 5 50 5ZM50 85C40 85 30 75 30 60C30 40 50 20 50 20C50 20 70 40 70 60C70 75 60 85 50 85Z" />
      </svg>
      
      {/* Blob 3 - Lower left */}
      <div 
        className="absolute top-[1600px] -left-40 w-[450px] h-[450px] rounded-[50%_50%_40%_60%/40%_60%_40%_60%] bg-gradient-to-tr from-secondary/50 to-primary/15 blur-2xl will-change-transform animate-float-gentle"
        style={{ animationDelay: '1.5s' }}
      />
      
      {/* Leaf SVG 2 */}
      <svg 
        className="absolute top-[2200px] right-[10%] w-28 h-28 text-primary/15 will-change-transform animate-float-gentle -rotate-45"
        style={{ animationDelay: '2.5s' }}
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M50 5C50 5 20 30 20 60C20 80 35 95 50 95C65 95 80 80 80 60C80 30 50 5 50 5ZM50 85C40 85 30 75 30 60C30 40 50 20 50 20C50 20 70 40 70 60C70 75 60 85 50 85Z" />
      </svg>
      
      {/* Blob 4 - Bottom right */}
      <div 
        className="absolute top-[3000px] -right-20 w-[400px] h-[400px] rounded-[30%_70%_50%_50%/50%_40%_60%_50%] bg-gradient-to-l from-primary/20 to-secondary/35 blur-2xl will-change-transform animate-float-gentle"
        style={{ animationDelay: '0.5s' }}
      />
    </div>
  );
};

export { DecorativeBackground };
