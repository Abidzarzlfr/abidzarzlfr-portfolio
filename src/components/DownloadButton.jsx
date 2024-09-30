import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const DownloadButton = ({ url, text, style, fileName }) => {
  return (
    <a href={url} download={fileName} className={style}>
      {text} <MdOutlineFileDownload className="text-xl" />
    </a>
  );
};

export default DownloadButton;
