type UglyButtonProps = {
  children: React.ReactNode;
};

const UglyButton = ({ children }: UglyButtonProps) => {
  return (
    <button className="bg-size-200 bg-pos-0 hover:bg-pos-100 active:text-white/3 border bg-gradient-to-b from-zinc-700 via-slate-950 to-zinc-800 p-4 text-white/100 transition-all duration-200 hover:text-white/80 active:from-zinc-700 active:via-slate-950 active:to-zinc-950 active:text-white/60">
      {children}
    </button>
  );
};

export default UglyButton;
