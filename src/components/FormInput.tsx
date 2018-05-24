import React from 'react';
import { observer } from 'mobx-react';

interface Props {
  appState: any;
  form: any;
}

@observer
export default class FormInput extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props)
    this.updateProperty = this.updateProperty.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  updateProperty(key: any, value: any) {
    this.props.form[key] = value
  }

  onChange(event: any) {
    this.updateProperty(event.target.name, event.target.value)
  }

  render() {
    const { form } = this.props
    return (
      <div>
        <h1>My Person Form</h1>
        <form>
          <input type="text" name="fullName" value={form.fullName} onChange={this.onChange} />
          <p>{form}</p>
        </form>
      </div>
    )
  }
}
