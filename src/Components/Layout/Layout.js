import Header from "../Header/Header";
const Layout = (props) => {
    return (
        <div className="container todo-layout my-3">
            <Header />
            {props.children}
        </div>
    );
}
 
export default Layout;