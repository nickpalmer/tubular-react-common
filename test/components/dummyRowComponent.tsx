import * as React from 'react';

export class DummyRowComponent extends React.Component<any, any> {
    /**
     *
     */
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <tr>
                <td>{this.props.content}</td>
            </tr>
        );
    }
}
