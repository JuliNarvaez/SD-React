function Menu(props) {
    return (
        <div className="menuItem">
            {props.children}
            <p className="menuItem_label">{props.name}</p>
        </div>
    )
}
export default Menu;