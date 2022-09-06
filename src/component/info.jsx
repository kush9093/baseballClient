
function Info({data}) {
         
    return (<> 
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
     </>);
}

export default Info;