type BoxProps = {
  children: React.ReactNode;
};

const Box = (props: BoxProps) => {
  return <div className="border border-dashed p-4">{props.children}</div>;
};

export default Box;
