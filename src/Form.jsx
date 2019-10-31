import React from 'react';
import './Form.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      formValue: '',
      taskList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    this.setState({
      formValue: evt.target.value,
    });
  }

  handleClick() {
    const { taskList, formValue } = this.state;
    this.setState({
      taskList: [...taskList, formValue],
      formValue: '',
    });
  }

  render() {
    const { taskList, formValue } = this.state;
    return (
      <div>
        <div className="task-box border border-dark w-50">
          {taskList.map((task, index) => {
            const k = `task_${index}`;
            return (
              <div>
                <div className="card">
                  <p className="card-text">{task}</p>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <input type="text" value={formValue} onChange={this.handleChange} />
        <br />
        <button type="submit" onClick={this.handleClick}>
          Submit
        </button>
      </div>
    );
  }
}

export default Form;
