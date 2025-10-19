import './index.css';

function GreetingsCard({ name, message, color, featured }) {
    return (
        <>
            <div id="GreetingsCard">
                <h2>{name}</h2>
                <p>{message}</p>
                <p className="color">{color}</p>
            </div>
            {featured && <div className="featured-badge">Featured</div>}
        </>
    );
}
export default GreetingsCard;
    