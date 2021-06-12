import '../../component/card/card.css'
function Card(props) {

    return (
        
        props.data&&props.data.map((e,index) => <div key={index} className="card">
                <span>{e.id}</span>
                <span>{e.name}</span>
                <span>{e.address}</span>
            </div>
        )
          

    )
}
export default Card;
