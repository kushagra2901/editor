import React, { useState } from "react";
import ReactQuill,{Quill}from 'react-quill';
import  {ImageDrop}  from 'quill-image-drop-module';
import ImageUploader from "quill-image-uploader";
import ImageResize  from 'quill-image-resize-module';



var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],     
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
Quill.register("modules/imageUploader", ImageUploader);
Quill.register('modules/imageResize', ImageResize);

Toolbar.modules = {
    toolbar: toolbarOptions,
    imageDrop:true,
    imageUploader: {
      upload: file => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("image", file);

          fetch(
            "https://api.imgbb.com/1/upload?key=d36eb6591370ae7f9089d85875e56b22",
            {
              method: "POST",
              body: formData
            }
          )
            .then(response => response.json())
            .then(result => {
              console.log(result);
              resolve(result.data.url);
            })
            .catch(error => {
              reject("Upload failed");
              console.error("Error:", error);
            });
        });
      }
    },
    imageResize: {
      displaySize: true
    },
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
  console.log(value);

  return (
      <div className="text-editor">
        <ReactQuill
            value={value}
            onChange={setValue}
            placeholder={props.placeholder}
            modules={Toolbar.modules}
            formats={Toolbar.formats}
            theme="snow"
        />
      </div>
  );
    
}

export default Toolbar;