interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`container px-4 pt-10 mx-auto xl:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
