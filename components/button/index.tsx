const Button = ({
  children,
  className,
}: {
  children: any;
  className: string;
}) => {
  return (
    <button className={`${className} py-3 px-5 bg-black text-white`}>
      {children}
    </button>
  );
};

export default Button;
