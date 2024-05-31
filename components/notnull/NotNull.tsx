import React from "react";

type NotNullProps = {
  children: React.ReactNode;
  notnull: string | null;
};

const NotNull = ({ children, notnull }: NotNullProps) => {
  return <>{notnull !== null &&  children }</>;
};

export default NotNull;
