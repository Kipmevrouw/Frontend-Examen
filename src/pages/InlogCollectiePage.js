import Footer from "../components/Footer/Footer";
import LoginForm from "../components/LoginForm/LoginForm";
import Navigation from "../components/Navigation/Navigation";

const InlogCollectiePage = () => {
    return (
        <>
            <Navigation
                nav1="Home"
                nav2="Over"
                nav3="Features"
                nav4="Abbonementen"
                nav5="Contact"
                image="logo.png"
                buttonText="Login" />
            <LoginForm 
            imageForm="InlogFoto.jpg"
            />
            <Footer
            buttonText="Login"
            />
        </>
    );
  }

export default InlogCollectiePage;