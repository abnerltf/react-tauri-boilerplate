import React from "react";

export default ({ children, ...props }: { children: any; props: any }) => (
  <div style={{ padding: 20, backgroundColor: "red" }}>{children}</div>
);
