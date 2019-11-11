import React from 'react';

export default function Table(props){
    const tableRows =props.data.map((item, index)=>{
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.grade}</td>
            </tr>
        )
    });
    return(
        <table className="table">
            <thead className="thead-inverse">
                <th>Name</th>
                <th>Course</th>
                <th>Grade</th>
            </thead>
            {tableRows}
        </table>
    );
}