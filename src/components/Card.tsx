interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={`bg-stone-900 w-fit h-fit px-10 py-8 text-white border-2 rounded-md flex items-center justify-center ${className}`} {...props} >
      {children}
    </div>
  );
};

export default Card;