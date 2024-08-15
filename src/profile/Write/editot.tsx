import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const fonts = [
  'serif',
  'monospace',
  'New Amsterdam',
 
];

const fontNames = fonts.map((font) => font.toLowerCase().replace(/\s/g, '-'));

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { Headers: '3' }, ],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ['link', 'image'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'list',
  'bullet',
  'blockquote',
  'link',
  'image',
  'color',
  'background',
  'align',
];

const TextEditor: React.FC = () => {
  const [content, setContent] = useState<string>('');

  const handleChange = (value: string) => {
    console.log(content)
    setContent(value);
  };

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        style={{
          fontFamily: 'Arial', // Set a default font for the editor
        }}
        theme='snow'
      />
      <div style={{ marginTop: '20px' }}>
        <h3>Editor Content:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default TextEditor;
