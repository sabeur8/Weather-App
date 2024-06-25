
const Weatherdetail = (props) => {
    
    return (
    
    <div className='col'>
        <img src={`images/${props.data}.png`}/>
        <div>
        <p className={props.data}>{props.info} {props.symbole}</p>
        <p>{props.parag}</p>
        </div>
    </div>

    )
}
export default Weatherdetail;