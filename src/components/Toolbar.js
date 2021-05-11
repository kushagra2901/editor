import React, { useState } from "react";
import ReactQuill,{Quill} from 'react-quill';
import  {ImageDrop}  from 'quill-image-drop-module';
import 'react-quill/dist/quill.bubble.css';

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [ 'link', 'image'],                               // add's image support
  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
]
Quill.register('modules/imageDrop',ImageDrop);

Toolbar.modules = {
    toolbar: toolbarOptions,
    imageDrop:true,
    clipboard: {
      matchVisual: false,
    }
  };
  

Toolbar.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color"
  ];
  

function Toolbar(props) {
  const [value, setValue] = useState('');

  return (
      <div className="text-editor">
        <ReactQuill
            value={value}
            onChange={setValue}
            placeholder={props.placeholder}
            modules={Toolbar.modules}
            formats={Toolbar.formats}
            theme="bubble"
        />
      </div>
  );
    
}

export default Toolbar;