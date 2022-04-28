import React from 'react';
import Editor from './components/Editor';
import { Remarkable } from 'remarkable';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.state = {
      input: placeholder,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event){
    this.setState({ input: event.target.value});
  }

  getRawMarkup() {
    return {__html: this.md.render(this.state.input)}
  }
  
  render() { 
    // console.log(markText)
    return(
      <div className="container-fluid bg-gradient-to-r from-indigo-600 to-cyan-200 h-screen w-full pt-12">
        <Editor 
          text={this.state.input} 
          handleInputChange={this.handleInputChange}
        />

        <div 
        className="container mt-10 rounded-md bg-white/70 mx-auto w-11/12 h-1/2 overflow-auto shadow-lg p-2 border-2 hover:overflow-scroll" 
        Id="preview"
        dangerouslySetInnerHTML={this.getRawMarkup()}
        />
        

      </div>
    )
  }
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App