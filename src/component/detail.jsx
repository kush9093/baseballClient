function Detail({cdata,position}) {

    let details;
    if (cdata && position=== "pitcher") {
        details = cdata.datas.map((elm) => {
            return <tr key={elm._id}><td>{elm.displayDate}</td><td>{elm.stadium}</td>
                <td>{elm.matchTeamName}</td><td>-</td><td>{elm.wls}</td>
                <td>{elm.innDisplay}</td><td>{elm.tugucount}</td><td>{elm.pa}</td>
                <td>{elm.ab}</td><td>{elm.hit}</td><td>{elm.hr}</td>
                <td>{elm.bb}</td><td>{elm.hp}</td><td>{elm.kk}</td><td>{elm.r}</td>
                <td>{elm.er}</td><td>{elm.era}</td></tr>
        })
    } else if (cdata && position !== "pitcher") {
        details = cdata.datas.map((elm) => {
            return <tr key={elm._id}><td>{elm.displayDate}</td><td>{elm.stadium}</td>
                <td>{elm.matchTeamName}</td>
                <td>{elm.pa}</td><td>{elm.ab}</td><td>{elm.run}</td><td>{elm.hit}</td>
                <td>{elm.h2}</td><td>{elm.h3}</td><td>{elm.hr}</td>
                <td>{elm.rbi}</td><td>{elm.sb}</td><td>{elm.bb}</td>
                <td>{elm.kk}</td> <td>{elm.gd}</td><td>{elm.hra}</td></tr>
        })
    }
    return ( <>
        {position=== "pitcher"&& 
         <div>
         <table style={{ width: "100%" }} className="pitchertable">
             <thead>
                 <tr>
                     <td>일자</td>
                     <td>구장</td>
                     <td>상대</td>
                     <td>DH</td>
                     <td>승/패</td>
                     <td>이닝</td>
                     <td>투구</td>
                     <td>타자</td>
                     <td>타수</td>
                     <td>안타</td>
                     <td>홈런</td>
                     <td>4구</td>
                     <td>사구</td>
                     <td>삼진</td>
                     <td>실점</td>
                     <td>자책</td>
                     <td>평균자책점</td>
                 </tr>
             </thead>
             <tbody>
             {details}
             </tbody>
         </table>
     </div>}
     {position !== "pitcher" && 
     <div>
     <table style={{ width: "100%" }} className="pitchertable">
         <thead>
             <tr>
                 <td>일자</td>
                 <td>구장</td>
                 <td>상대</td>
                 <td>타석</td>
                 <td>타수</td>
                 <td>득점</td>
                 <td>안타</td>
                 <td>2타</td>
                 <td>3타</td>
                 <td>홈런</td>
                 <td>타점</td>
                 <td>도루</td>
                 <td>4구</td>
                 <td>삼진</td>
                 <td>병살</td>
                 <td>타율</td>
             </tr>
         </thead>
         <tbody>
         {details}
         </tbody>
     </table>
 </div>
 }
    </> );
}

export default Detail;