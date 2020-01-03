import * as React from 'react';

export const TubularRowComponent = (props: any) => {
    const { row, columns } = props;

    return (
        <tr>
            {columns
                .filter(col => col.visible)
                .map(col => {
                    return (
                        <td role="cell" key={col.name}>
                            {row[col.name]}
                        </td>
                    );
                })}
        </tr>
    );
};
