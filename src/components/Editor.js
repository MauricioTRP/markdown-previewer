import React from 'react';

const Editor = function(props) {
  const {text, handleInputChange} = props;
    return (
<div className="p-3 mx-10 min-w-xl bg-white/40 rounded-md shadow-lg  flex items-center space-x-4">
  <div className="mx-auto w-full d-flex justify-content-center">
    <div className="text-xl font-medium text-black pb-3">Editor</div>
    <textarea 
    className="bg-slate-100/60 rounded-md border w-full  pl-1 shadow-inner" 
    Id="editor" 
    type="texbox" 
    defaultValue={text}
    onChange={handleInputChange}
    />
  </div>
</div>
        
    )
}

export default Editor;

