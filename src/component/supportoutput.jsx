
function Supportoutput({elm,dated}) {
    return ( <>
    <div style={{marginLeft:"5%",marginRight:"5%"}}>
            <div style={{color:"gray"}}>{dated.slice(0,10)} {dated.slice(11,16)}</div>
            <div><b>{elm.comment}</b></div>
            <hr />
        </div>
    </> );
}

export default Supportoutput;