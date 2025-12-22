const DecorativeBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Blob 1 - Top left - MORE VISIBLE */}
      <div 
        className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-primary/20 to-primary/30 blur-3xl animate-float-gentle"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Blob 2 - Top right */}
      <div 
        className="absolute top-[400px] -right-32 w-[600px] h-[600px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-bl from-primary/15 to-secondary/50 blur-2xl animate-float-gentle"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Leaf SVG 1 - MORE VISIBLE */}
      <svg 
        className="absolute top-[300px] left-[5%] w-32 h-32 text-primary/25 animate-float-gentle rotate-12"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M50 5C50 5 20 30 20 60C20 80 35 95 50 95C65 95 80 80 80 60C80 30 50 5 50 5ZM50 85C40 85 30 75 30 60C30 40 50 20 50 20C50 20 70 40 70 60C70 75 60 85 50 85Z" />
      </svg>
      
      {/* Circle 1 - MORE VISIBLE */}
      <div 
        className="absolute top-[700px] left-[8%] w-48 h-48 rounded-full border-4 border-primary/20 animate-float-gentle"
        style={{ animationDelay: '3s' }}
      />
      
      {/* Blob 3 - Mid left - MUCH MORE VISIBLE */}
      <div 
        className="absolute top-[1000px] -left-40 w-[550px] h-[550px] rounded-[50%_50%_40%_60%/40%_60%_40%_60%] bg-gradient-to-tr from-secondary/60 to-primary/20 blur-2xl animate-float-gentle"
        style={{ animationDelay: '1.5s' }}
      />
      
      {/* Leaf SVG 2 - MORE VISIBLE */}
      <svg 
        className="absolute top-[850px] right-[10%] w-40 h-40 text-primary/20 animate-float-gentle -rotate-45"
        style={{ animationDelay: '2.5s' }}
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M50 5C50 5 20 30 20 60C20 80 35 95 50 95C65 95 80 80 80 60C80 30 50 5 50 5ZM50 85C40 85 30 75 30 60C30 40 50 20 50 20C50 20 70 40 70 60C70 75 60 85 50 85Z" />
      </svg>
      
      {/* Blob 4 - Right side */}
      <div 
        className="absolute top-[1500px] -right-20 w-[450px] h-[450px] rounded-[30%_70%_50%_50%/50%_40%_60%_50%] bg-gradient-to-l from-primary/25 to-secondary/40 blur-2xl animate-float-gentle"
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Circle 2 - MORE VISIBLE */}
      <div 
        className="absolute top-[1800px] right-[15%] w-36 h-36 rounded-full border-4 border-primary/25 animate-float-gentle"
        style={{ animationDelay: '4s' }}
      />
      
      {/* Blob 5 - Lower left - VERY VISIBLE */}
      <div 
        className="absolute top-[2200px] -left-32 w-[500px] h-[500px] rounded-[60%_40%_50%_50%/50%_60%_40%_50%] bg-gradient-to-br from-primary/20 to-secondary/50 blur-2xl animate-float-gentle"
        style={{ animationDelay: '3.5s' }}
      />
      
      {/* Leaf SVG 3 - MORE VISIBLE */}
      <svg 
        className="absolute top-[2500px] left-[12%] w-28 h-28 text-primary/30 animate-float-gentle rotate-45"
        style={{ animationDelay: '2s' }}
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M50 5C50 5 20 30 20 60C20 80 35 95 50 95C65 95 80 80 80 60C80 30 50 5 50 5ZM50 85C40 85 30 75 30 60C30 40 50 20 50 20C50 20 70 40 70 60C70 75 60 85 50 85Z" />
      </svg>
      
      {/* Blob 6 - Bottom right - MORE VISIBLE */}
      <div 
        className="absolute top-[2800px] -right-40 w-[520px] h-[520px] rounded-[45%_55%_60%_40%/55%_45%_55%_45%] bg-gradient-to-tl from-secondary/50 to-primary/20 blur-2xl animate-float-gentle"
        style={{ animationDelay: '1s' }}
      />
      
      {/* Circle 3 - MORE VISIBLE */}
      <div 
        className="absolute top-[3200px] left-[5%] w-44 h-44 rounded-full border-4 border-primary/20 animate-float-gentle"
        style={{ animationDelay: '2.5s' }}
      />
      
      {/* Blob 7 - Very bottom - VISIBLE */}
      <div 
        className="absolute top-[3600px] -left-20 w-[400px] h-[400px] rounded-[50%_50%_45%_55%/45%_55%_45%_55%] bg-gradient-to-r from-primary/20 to-secondary/40 blur-2xl animate-float-gentle"
        style={{ animationDelay: '4s' }}
      />
      
      {/* Leaf SVG 4 - MORE VISIBLE */}
      <svg 
        className="absolute top-[3400px] right-[8%] w-36 h-36 text-primary/25 animate-float-gentle -rotate-12"
        style={{ animationDelay: '3s' }}
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M50 5C50 5 20 30 20 60C20 80 35 95 50 95C65 95 80 80 80 60C80 30 50 5 50 5ZM50 85C40 85 30 75 30 60C30 40 50 20 50 20C50 20 70 40 70 60C70 75 60 85 50 85Z" />
      </svg>

      {/* Extra Blob 8 - Mid page */}
      <div 
        className="absolute top-[4000px] -right-32 w-[480px] h-[480px] rounded-[55%_45%_50%_50%/45%_55%_45%_55%] bg-gradient-to-bl from-primary/15 to-secondary/45 blur-2xl animate-float-gentle"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Extra leaf at 4200 */}
      <svg 
        className="absolute top-[4500px] left-[15%] w-24 h-24 text-primary/20 animate-float-gentle rotate-[30deg]"
        style={{ animationDelay: '3.5s' }}
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M50 5C50 5 20 30 20 60C20 80 35 95 50 95C65 95 80 80 80 60C80 30 50 5 50 5ZM50 85C40 85 30 75 30 60C30 40 50 20 50 20C50 20 70 40 70 60C70 75 60 85 50 85Z" />
      </svg>

      {/* Blob 9 - Near bottom */}
      <div 
        className="absolute top-[4800px] -left-40 w-[450px] h-[450px] rounded-[40%_60%_55%_45%/50%_40%_60%_50%] bg-gradient-to-tr from-secondary/55 to-primary/15 blur-2xl animate-float-gentle"
        style={{ animationDelay: '2s' }}
      />
    </div>
  );
};

export { DecorativeBackground };
