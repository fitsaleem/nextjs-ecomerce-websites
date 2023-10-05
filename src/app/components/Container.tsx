interface ContainerProps {
    children: React.ReactNode;
    className?: string;
  }
  
  const Container: React.FC<ContainerProps> = ({
    children ,className
  }:ContainerProps) => {
    return ( 
      <div className={`${className}  max-w-screen-xl mx-auto px-4 xl:px-0 py-10`}>
        {children}
      </div>
     );
  };
  
  export default Container;