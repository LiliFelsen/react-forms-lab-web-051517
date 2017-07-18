import React from 'react';

const wordCount = (line) => {
  return line.trim().split(' ').length
}

const isPoemValid = (textarea) => {
  if (textarea) {
    const lines = textarea.split('\n')
    const hasThreeLines = lines.length === 3
    const hasRightAmountOfWords = wordCount(lines[0]) === 5 && wordCount(lines[1]) === 3 && wordCount(lines[2]) === 5
    return hasThreeLines && hasRightAmountOfWords
  } else {
    return false
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textarea: '',
      isValid: true
    };
  }

  handleTextareaChange = (event) => {
    let text = event.target.value
    this.setState({
      textarea: text,
      isValid: isPoemValid(text)
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.textarea}
          onChange={this.handleTextareaChange}
        />
        {!this.state.isValid &&
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
