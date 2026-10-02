const Menu = ({ menu }: any) => {
    return (
        <div className="menu">
            <img className="menuImg" src={menu.image} alt="" />
            <h1 className="menuName">{menu.name}</h1>
            <span className="rating">{menu.rating} ⭐ </span>
            <span className="cuisine">{menu.cuisine}</span>
            <span className={`difficultlyLevel ${menu.difficulty == 'Easy' ? 'easy' : menu.difficulty == 'Medium' ? 'medium' : 'hard'}`} >{menu.difficulty}</span>
            <button className="addToCart">Add to favorites</button>

        </div>
    )
}
export default Menu;