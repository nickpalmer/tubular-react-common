import * as React from 'react';
import { DummyRowComponent } from './dummyRowComponent';

export class DummyComponent extends React.Component<any, any> {
    /**
     *
     */
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    // public componentDidMount() {
    //     setTimeout(() => {
    //         this.loadNextPage();
    //     }, 1000 * 2);
    // }

    private loadNextPage() {
        const newData = [];

        for (let i = 0; i < 10; i++) {
            newData.push('Row number: ' + (this.state.data.length + i));
        }

        this.setState({ data: newData });
    }

    public render() {
        return (
            <div>
                <h2>Dummy Component</h2>
                <button id="next-page" onClick={() => this.loadNextPage()}>
                    Load another page
                </button>
                <table>
                    <thead>
                        <tr>
                            <th>Simple Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((row, index) => {
                            return <DummyRowComponent key={index} content={row} />;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
