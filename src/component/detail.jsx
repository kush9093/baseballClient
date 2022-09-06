import Ndetail from "./ndetail";

function Detail({cdata,position}) {

    let details;
    if (cdata) {
        details = cdata.datas.map((elm) => {
            return <Ndetail key={elm._id} elm={elm} position={position}/>
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