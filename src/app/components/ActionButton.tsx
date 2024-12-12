interface ActionButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ActionButton = ({ children, ...props }: ActionButtonProps) => {
  return (
    <button
      {...props}
      className="border-2 border-dotted bg-white/0 px-6 py-1 font-mono uppercase text-white/100 transition-all hover:bg-white/10 active:text-white/80"
    >
      {children}
    </button>
  );
};

export default ActionButton;
