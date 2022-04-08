import React from "react";

interface TruHelpProps {
  title: String;
  children: React.ReactNode;
}

const TrueHelp = (props: TruHelpProps) => {
  const { title, children } = props;
  return (
    <div className="bg-primary text-center py-5 text-white mt-5">
      <h1 className="fw-normal fs-2 sm-fs-4">{title}</h1>
      <div className="d-flex justify-content-center mt-5">{children}</div>
    </div>
  );
};

export default TrueHelp;
