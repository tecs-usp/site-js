'use client'

import ReactMarkdown from 'react-markdown'

import React, { useEffect, useState } from 'react';
import path from 'path';

interface TextReaderProps {
  fileName: string;
}

const TextReader: React.FC<TextReaderProps> = ({ fileName }) => {
  const [fileContent, setFileContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch(`/api/readFile?fileName=${fileName}`);
        const data = await response.json();
        setFileContent(data.content);
      } catch (error) {
        console.error("Error fetching file content:", error);
      }
    };

    fetchFileContent();
  }, [fileName]);

  return (
    <ReactMarkdown>
      {fileContent}
    </ReactMarkdown>
  );
};

export default TextReader;
