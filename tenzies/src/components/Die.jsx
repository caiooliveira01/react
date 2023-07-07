/* eslint-disable react/prop-types */
export default function Die(props) {
    const styles = {
        backgroundColor: props.held ? '#59E391' : '#FFF',
    }

    return (
        <div 
            className="die-face" 
            style={styles} 
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}