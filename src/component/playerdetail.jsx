import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayerHeader from "./playerheader";

function PlayerDetail({ playerAPI, recordAPI }) {

    const { position, pcode } = useParams();
    const [data, setData] = useState();
    const [cdata, setCdata] = useState();

    useEffect(() => {
        playerAPI.detail(pcode).then(recv => {
            setData(recv.datas)
        })
        if (position === "pitcher") {
            recordAPI.pitching(pcode).then(recv => {
                setCdata(recv)
                console.log("recv", recv)
            })
        } else {
            recordAPI.hitting(pcode).then(recv => {
                setCdata(recv)
                console.log("recv", recv)
            })
        }
    }, [])
    let details;
    if (cdata && position === "pitcher") {
        details = cdata.datas.map((elm) => {
            return <tr><td>{elm.displayDate}</td><td>{elm.stadium}</td>
                <td>{elm.matchTeamName}</td><td>-</td><td>{elm.wls}</td>
                <td>{elm.innDispaly}</td><td>{elm.tugucount}</td><td>{elm.pa}</td>
                <td>{elm.ab}</td><td>{elm.hit}</td><td>{elm.hr}</td>
                <td>{elm.bb}</td><td>{elm.hp}</td><td>{elm.kk}</td><td>{elm.r}</td>
                <td>{elm.er}</td><td>{elm.era}</td></tr>
        })
    } else if(cdata && position !== "pitcher") {
        details = cdata.datas.map((elm) => {
            return <tr><td>{elm.displayDate}</td><td>{elm.stadium}</td>
                <td>{elm.pa}</td><td>{elm.ab}</td><td>{elm.run}</td><td>{elm.hit}</td>
                <td>{elm.h2}</td><td>{elm.h3}</td><td>{elm.hr}</td>
                <td>{elm.rbi}</td><td>{elm.sb}</td><td>{elm.bb}</td>
                <td>{elm.hra}</td></tr>
        })
    }
    console.log(data);




    return (<>
        <PlayerHeader />

        {data && cdata && <><div> <div style={{ display: "flex" }}>
            <div style={{ width: "60%" }}>
                <div>{data.position} / {data.hittype}</div>
                <div>{data.backnum} {data.playerName}</div>
                <div><b>생년월일</b> {data.birth}         <b>계약금/연봉</b> {data.promise}/{data.money}</div>
                <div><b>프로입단</b>{data.indate}</div>
                <div><b>신장/체중</b> {data.height}cm/{data.weight}kg</div>
                <div><b>출신학교</b> {data.career}</div>
                {data && cdata && position === "pitcher" && <>
                    <table>
                        <thead>
                            <tr>
                                <th>ERA</th>
                                <th>승</th>
                                <th>패</th>
                                <th>세이브</th>
                                <th>탈삼진</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{cdata.summary.era !== "NaN" ? cdata.summary.era : "0"}</td>
                                <td>{cdata.summary.w}</td>
                                <td>{cdata.summary.l}</td>
                                <td>{cdata.summary.sv}</td>
                                <td>{cdata.summary.kk}</td>
                            </tr>
                        </tbody>
                    </table>
                </>
                }
                {data && cdata && position !== "pitcher" && <>
                    <table>
                        <thead>
                            <tr>
                                <th>경기</th>
                                <th>안타</th>
                                <th>홈런</th>
                                <th>타점</th>
                                <th>타율</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{cdata.summary.gamenum}</td>
                                <td>{cdata.summary.hit}</td>
                                <td>{cdata.summary.hr}</td>
                                <td>{cdata.summary.rbi}</td>
                                <td>{cdata.summary.hra}</td>
                            </tr>
                        </tbody>
                    </table>
                </>}
            </div>
            <div style={{ backgroundImage: "url(" + data.playerProfileImg + ")", backgroundRepeat: "no-repeat", width: "40%", height: "500px" }}>
                <div>

                </div>
            </div>

        </div>
            {data && cdata && position === "pitcher" && <>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>상세프로필</th>
                                <th></th>
                                <th>상세기록</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>생년월일</th>
                                <td>{data.birth}</td>
                                <th>경력사항</th>
                                <td>{data.mainCareer}</td>
                            </tr>
                            <tr>
                                <th>신장/체중</th>
                                <td>{data.height}cm / {data.weight}kg</td>
                            </tr>
                            <tr>
                                <th>투타</th>
                                <td>{data.hittype}</td>
                            </tr>
                            <tr>
                                <th>출신학교</th>
                                <td>{data.career}</td>
                            </tr>
                            <tr>
                                <th>프로입단</th>
                                <td>{data.indate}</td>
                            </tr>
                            <tr>
                                <th>연봉</th>
                                <td>{data.money}</td>
                            </tr>
                            <tr>
                                <th>입대/제대</th>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>상세프로필</th>
                                <th>상세기록</th>
                            </tr>
                        </thead>
                        <tbody>
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
                            {details}
                        </tbody>
                    </table>
                </div>
            </>
            }
            {data && cdata && position !== "pitcher" && <>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>상세프로필</th>
                                <th>상세기록</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>일자</td>
                                <td>구장</td>
                                <td>상대</td>
                                <td>승/패</td>
                                <td>이닝</td>
                                <td>투구</td>
                                <td>타자</td>
                                <td>타수</td>
                                <td>안타</td>
                                <td>홈런</td>
                                <td>4구</td>
                                <td>삼진</td>
                                <td>실점</td>
                                <td>자책</td>
                                <td>평균자책점</td>
                            </tr>
                            {details}
                        </tbody>
                    </table>
                </div>
            </>}
        </div>
        </>
        }
    </>);
}

export default PlayerDetail;