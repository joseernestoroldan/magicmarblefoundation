"use client"
import { useState, useEffect } from 'react';

export default function TestListener() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const response = await fetch('/api/sanity-webhook');
      const data = await response.json();
      setDocuments(data);
    };

    fetchDocuments();
  }, []);

  return (
    <div>
      hola {documents}
    </div>
  );
}

