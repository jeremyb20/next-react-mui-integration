'use client';

import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';
import { EditorProps } from './types';
import Toolbar from './toolbar';

export default function ClientEditor({
  id,
  simple,
  value,
  onChange,
  ...other
}: EditorProps) {
  const modules = {
    toolbar: {
      container: `#${id}`,
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <>
      <Toolbar id={id} simple={simple} />
      <ReactQuill
        modules={modules}
        value={value}
        onChange={onChange}
        placeholder="Write something awesome..."
        {...other}
      />
    </>
  );
}
