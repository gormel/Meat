import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { Record } from './connector';

export interface RowProps {
    record: Record;
    remove: (id: number) => void;
}

interface RowState {}

export class Row extends React.Component<RowProps, RowState>
{  
    constructor(props: RowProps, context: any) {
        super(props, context);
        this.state = {};
    }

    render() {
        const n: number = 30;
        const f: number = 70;
        return (
            <div style={{ display: 'flex', flexDirection: "row", borderRadius: 5, margin: 3, padding: 3, backgroundColor: "MediumPurple", color: "white" }}>
                <div>{this.props.record.time}</div>
                <div style={{ flexGrow: 1, marginLeft: 3 }}>{this.props.record.text}</div>
                <svg onClick={e => this.props.remove(this.props.record.id)} viewBox="0 0 100 100" width="20" height="20">
                    <circle cx="50" cy="50" r="50" style={{ fill: "FireBrick" }}/>
                    <line x1={n} y1={n} x2={f} y2={f} style={{stroke: "white", strokeWidth: 10}} />
                    <line x1={n} y1={f} x2={f} y2={n} style={{stroke: "white", strokeWidth: 10}} />
                </svg>
            </div>
        )
    }
}