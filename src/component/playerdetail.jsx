import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./detail";
import Info from "./info";
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
                        <span><h1>{cdata.summary.hra !== "NaN" && cdata.summary.hra !== ""?cdata.summary.hra:"0.000"}</h1></span>
                    </div>
                </>}
            </div>
            <div style={{ backgroundImage: "url(" + data.playerProfileImg + ")", backgroundRepeat: "no-repeat", width: "40%", height: "500px" }}>
                <div>

                </div>
            </div>

        </div>
            <div className="d-flex justify-content-around mt-5 btn-group">
                <input type="radio" className="btn-check" name="options-outlined" id="p-outlined" onClick={() => { setBtn("p") }} autoComplete="off" defaultChecked="checked"/>
                <label className="btn btn-outline-secondary" htmlFor="p-outlined"><b>상세프로필</b></label>
                <input type="radio" className="btn-check" name="options-outlined" id="r-outlined" onClick={() => { setBtn("r") }} autoComplete="off" />
                <label className="btn btn-outline-secondary" htmlFor="r-outlined"><b>상세기록</b></label>
            </div>
           {data && cdata && btn === "p" && <Info data={data} cdata={cdata} btn={btn} />}
            {data && cdata && btn === "r" && <Detail position={position} cdata={cdata}/> }
        </div>
        
        </>
        }
    </>);
}

export default PlayerDetail;