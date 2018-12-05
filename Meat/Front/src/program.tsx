import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { Record } from './connector';
import { Row } from './row';
import * as Connector from './connector';

interface State {
    records?: Record[];
    inputText?: string;
}

export class Program extends React.Component<{}, State>
{
    constructor(props: {}, context: any) {
        super(props, context);
        this.state = {};
    }

    async componentWillMount() {
        this.setState({ records: await Connector.loadRecords() });
    }
    
    async onRecordRemove(id: number) {
        await Connector.removeRecord(id);
        this.setState({ records: await Connector.loadRecords() });
    }

    async onAddRecord(text: string) {
        await Connector.addRecord(text);
        this.setState({ records: await Connector.loadRecords(), inputText: "" });
    }

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                { this.state.records ? this.state.records.map(record => <Row record={record} remove={this.onRecordRemove.bind(this)} />) : null }
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <input type="text" onChange={(e) => this.setState({ inputText: e.target.value }) } 
                           value={this.state.inputText} style={{ flexGrow: 1, marginRight: 3 }}/>
                    <button onClick={(e) => this.state.inputText ? this.onAddRecord(this.state.inputText) : null }>
                        Add
                    </button>
                </div>
            </div>
        );
    }
}