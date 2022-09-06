
function Ndetail({ elm, position }) {
    return (<>
        {position === "pitcher" &&
            <tr><td>{elm.displayDate}</td><td>{elm.stadium}</td>
                <td>{elm.matchTeamName}</td><td>-</td><td>{elm.wls}</td>
                <td>{elm.innDisplay}</td><td>{elm.tugucount}</td><td>{elm.pa}</td>
                <td>{elm.ab}</td><td>{elm.hit}</td><td>{elm.hr}</td>
                <td>{elm.bb}</td><td>{elm.hp}</td><td>{elm.kk}</td><td>{elm.r}</td>
                <td>{elm.er}</td><td>{elm.era}</td></tr>
        }
        {position !== "pitcher" &&
            <tr><td>{elm.displayDate}</td><td>{elm.stadium}</td>
                <td>{elm.matchTeamName}</td>
                <td>{elm.pa}</td><td>{elm.ab}</td><td>{elm.run}</td><td>{elm.hit}</td>
                <td>{elm.h2}</td><td>{elm.h3}</td><td>{elm.hr}</td>
                <td>{elm.rbi}</td><td>{elm.sb}</td><td>{elm.bb}</td>
                <td>{elm.kk}</td> <td>{elm.gd}</td><td>{elm.hra}</td></tr>
        }
    </>);

    }
export default Ndetail;