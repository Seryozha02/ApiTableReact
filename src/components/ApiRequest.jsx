import { useState } from "react";

function Request() {
    const [value, setValue] = useState([])
    let api = `https://api.covidtracking.com/v1/states/ca/daily.json`;

    fetch(api).then(response => response.json()).then(request => request.slice(0, 20)).then(resp => {
        setValue(resp)
    })
    const array = value.map(obj => {
        return(
            <tr key={obj.date}>
                <td>{obj.dateChecked.slice(0, 10).replaceAll("-", ".") ?? "-"}</td>
                <td>{obj.positive ?? "-"}</td>
                <td>{obj.negative ?? "-"}</td>
                <td>{obj.death ?? "-"}</td>
                <td>{obj.total ?? "-"}</td>
            </tr>
        )
    })

    return(
        <tbody>
            {array}
        </tbody>
    )
}


export default Request;