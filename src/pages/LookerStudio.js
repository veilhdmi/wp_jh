import React from 'react';

export default function LookerStudio() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Looker Studio Project</h1>
      <iframe 
        width="600" 
        height="450" 
        src="https://lookerstudio.google.com/embed/reporting/40333cb3-0f25-4e65-9255-17f14045db54/page/gv5EE" 
        frameBorder="0" 
        style={{ border: 0 }} 
        allowFullScreen 
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox">
      </iframe>
    </div>
  );
}
