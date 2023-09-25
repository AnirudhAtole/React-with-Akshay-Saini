import NavIcons from "./navIcons";

const ImageContainer = () => <img alt="Logo" width={"50px"} src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201711/zomato-fact-sheet_660_052417055850_111517063712.jpg?size=948:533"/>

const Header = () =>{
    return(
        <div className="header">
            <ImageContainer />
            <NavIcons />
        </div>
    )
}

export default Header;