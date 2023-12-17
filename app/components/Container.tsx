"use client"

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
  return (
    <div
     className="mx-auto xl:px-28 md:px-16 sm:px-6 px-4" 
    >
      {children}
    </div>
  )
}

export default Container
