import React, { useState } from "react";
import LayoutDefault from "@/layouts/LayoutDefault";

const Xss = () => {
  const [html, setHtml] = useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtml(evt.target.value);
  };

  return (
    <LayoutDefault>
      <h1>XSS TESTING</h1>

      <div>
        <h2>INPUT</h2>
        <textarea value={html} onChange={handleChange}></textarea>
      </div>

      <div>
        <h2>SAFETY PREVIEW</h2>
        <div>{html}</div>
      </div>

      <div>
        <h2>DANGEROUS PREVIEW</h2>
        {/* <div dangerouslySetInnerHTML={{ __html: html }}></div> */}
      </div>
    </LayoutDefault>
  );
};

export default Xss;
