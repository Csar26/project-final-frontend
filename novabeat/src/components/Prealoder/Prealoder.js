import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="body">
      <div className="circle-preloader"></div>
    </div>
  );
};

export default Preloader;
