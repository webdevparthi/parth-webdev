"use client";

import { AiOutlineCloudDownload } from 'react-icons/ai';

export default function DownloadCV() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/parthiban_ramachandran_cv.pdf';  // Path to the PDF file
    link.download = 'parthiban_ramachandran_cv.pdf';     // Name the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("called");
  };

  return (
    <button onClick={handleDownload} className="btn-red shadow w-100 rounded-5 border-0 py-2">
      <AiOutlineCloudDownload size={22} />
      Download CV
    </button>
  )
}
