import '../../component/card/card.css'
function Card(props) {
    console.log(props.data)
    return (
        
            <div className="card">
                <span>{props.data.id}</span>
                <span>{props.data.name}</span>
                <span>{props.data.address}</span>
            </div>

    )
}
export default Card;