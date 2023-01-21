import Footer from "../components/HomePageComponenten/Footer/Footer";
import LoginForm from "../components/LoginForm/LoginForm";
import NavigationHomePage from "../components/HomePageComponenten/NavigationHomePage/NavigationHomePage";

const InlogCollectiePage = () => {
    return (
        <>
            <NavigationHomePage
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