import React from 'react';
import {toWords} from '../../helpers';

export default props => {
    const {details} = props;
    const additionalInfo = Object.keys(details).map(key=>{
        let values = details[key];
        values = Array.isArray(values) ? values.join(', ') : values;
        return (
            <tr key={key}>
                <td>{toWords(key)}</td>
                <td>{values}</td>
            </tr>
        )
    })
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Additional Information</th>
                </tr>
            </thead>
            <tbody>
                {additionalInfo}
            </tbody>
        </table>
    )
}