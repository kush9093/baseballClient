import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PlayerHeader from "./playerheader";

function PlayerDetail({ playerAPI, recordAPI }) {

    const { position, pcode } = useParams();
    const [data, setData] = useState();
    const [cdata, setCdata] = useState();
    const [btn, setBtn] = useState("p");

    const fotmatfn = (elm) => {
        if (elm.length > 5) {
            return elm.slice(0, elm.length - 5) + "," + elm.slice(-5)
        }
        return elm
    }

    useEffect(() => {
        playerAPI.detail(pcode).then(recv => {
            setData(recv.datas)
        })
        if (position === "pitcher") {
            recordAPI.pitching(pcode).then(recv => {
                setCdata(recv)
            })
        } else {
            recordAPI.hitting(pcode).then(recv => {
                setCdata(recv)
            })
        }
    }, [])
    let details;
    if (cdata && position === "pitcher") {
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




    return (<>
        <PlayerHeader />

        {data && cdata && <><div> <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }} className="mt-5 ms-5">

                <h5>{data.position} / {data.hittype}</h5>
                <h1><b>{data.backnum}</b> {data.playerName}</h1>
                <table className="mt-5">
                    <tbody>
                        <tr>
                            <th>생년월일</th>
                            <td>{data.birth.slice(0, 4)}년 {data.birth.slice(4, 6)}월 {data.birth.slice(6, 8)}일</td>
                            <th>계약금/연봉</th>
                            <td>{fotmatfn(data.promise)}</td>
                        </tr>
                        <tr>
                            <th>프로입단</th>
                            <td>{data.indate.slice(0, 4)}년 {data.indate.slice(4, 6) ?? ""}월</td>
                            <th></th>
                            <td> /{fotmatfn(data.money)}</td>
                        </tr>
                        <tr>
                            <th>신장/체중</th>
                            <td>{data.height}cm/{data.weight}kg</td>

                        </tr>
                        <tr>
                            <th>출신학교</th>
                            <td>{data.career}</td>
                        </tr>

                    </tbody>
                </table>
                {data && cdata && position === "pitcher" && <>
                    <div className="d-flex justify-content-around mt-5">
                        <span><b>ERA</b></span>
                        <span><b>승</b></span>
                        <span><b>패</b></span>
                        <span><b>세이브</b></span>
                        <span><b>탈삼진</b></span>
                    </div>
                    <div className="d-flex justify-content-around">
                        <span><h1>{cdata.summary.era !== "NaN" ? cdata.summary.era : "0"}</h1></span>
                        <span><h1>{cdata.summary.w}</h1></span>
                        <span><h1>{cdata.summary.l}</h1></span>
                        <span><h1>{cdata.summary.sv}</h1></span>
                        <span><h1>{cdata.summary.kk}</h1></span>
                    </div>

                </>
                }
                {data && cdata && position !== "pitcher" && <>
                    <div className="d-flex justify-content-around mt-5">
                        <span><b>경기</b></span>
                        <span><b>안타</b></span>
                        <span><b>홈런</b></span>
                        <span><b>타점</b></span>
                        <span><b>타율</b></span>
                    </div>
                    <div className="d-flex justify-content-around">
                        <span><h1>{cdata.summary.gamenum}</h1></span>
                        <span><h1>{cdata.summary.hit}</h1></span>
                        <span><h1>{cdata.summary.hr}</h1></span>
                        <span><h1>{cdata.summary.rbi}</h1></span>
                        <span><h1>{cdata.summary.hra !== "NaN" && cdata.summary.hra}</h1></span>
                    </div>
                </>}
            </div>
            <div style={{ backgroundImage: "url(" + data.playerProfileImg + ")", backgroundRepeat: "no-repeat", width: "40%", height: "500px" }}>
                <div>

                </div>
            </div>

        </div>
            <div className="d-flex justify-content-around mt-5 btn-group">
                <input type="radio" class="btn-check" name="options-outlined" id="p-outlined" onClick={() => { setBtn("p") }} autocomplete="off" defaultChecked="checked"/>
                <label class="btn btn-outline-secondary" for="p-outlined"><b>상세프로필</b></label>
                <input type="radio" class="btn-check" name="options-outlined" id="r-outlined" onClick={() => { setBtn("r") }} autocomplete="off" />
                <label class="btn btn-outline-secondary" for="r-outlined"><b>상세기록</b></label>
            </div>
            {data && cdata && btn === "p" && <>
                <div>

                    <table style={{ width: "100%" }} className="m-4 detailtable">
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
            </>
            }
            {data && cdata && position === "pitcher" && btn === "r" && <>
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
                </div>
            </>
            }
            {data && cdata && position !== "pitcher" && btn === "r" && <>
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
            </>}
        </div>
        </>
        }
    </>);
}

export default PlayerDetail;