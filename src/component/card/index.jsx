import '../../component/card/card.css'
function Card({ data, isHighlighted, onSelect }) {

    return (
        <div onClick={() => onSelect(data)} className={`card ${isHighlighted ? 'active-highlighted' : ''}`}>
            <span>{data.id}</span>
            <span>{data.name}</span>
            <span>{data.address}</span>
        </div>
    )
}
export default Card;
