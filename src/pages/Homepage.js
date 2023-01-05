import NavigationHomePage from "../components/HomePageComponenten/NavigationHomePage/NavigationHomePage";
import Header from "../components/HomePageComponenten/Header/Header";
import Card from "../components/HomePageComponenten/Card/Card";
import Card2 from "../components/HomePageComponenten/Card/Card2";
import Ons from "../components/HomePageComponenten/Ons/Ons";
import Contact from "../components/HomePageComponenten/Contact/Contact";
import Abbonement from "../components/HomePageComponenten/Abbonement/Abbonement";
import Footer from "../components/Footer/Footer";
import Favo from "../components/HomePageComponenten/Favo/Favo";
import Art from "../components/HomePageComponenten/Art/Art";
import React from "react";
const HomePage = () => {
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
            <Header
                bigTitle="PokemonCards"
                smallTitle="Klik hier om in te loggen:"
                buttonText="Login" />

            <Ons 
            headerTitle="Over ons:"
                stukjeTekst="Pokemon-Spekky is begonnen met pokemonkaarten verkopen in 
                                  1997. Ik vond het vroeger als kind geweldig om mee te ruilen
                                  en om er mee te spelen. Nu is het een bedrijf geworden waar ik
                                  pakjes verkoop. Dit is wat je kunt doen hier: je neemt een abbonement
                                  op pokemonkaartjes en je krijgt per week een pakje pokemonkaartje opgestuurd
                                  "
                imageM="Cards.jpg"  >

            </Ons>
            <Favo 
                imageBulbasaur="bulbasaur.png"
                imagePoliwrath="polli.png"
                imageGengar="gengar.png"
                imageLapras="lap.png"
                imageDitto="ditto.png"
            
            >
            </Favo>
            <Art imageA="Favo.png">

            </Art>
            <Abbonement hoofdTitel="Abbonementen">
                <Card image="evolving.png"
                    prijs="Per maand = €12,99"
                    extra="Ontvang per maand 2 pokemonpakjes."
                    buttonCard="Medium"
                />
                <Card2
                    image="battlestyles.png"
                    prijs="Per maand = €21,99"
                    extra="Ontvang per maand 4 pokemonpakjes."
                    buttonCard="Premium"
                />
                <Card image="Brilliant stars.png"
                    prijs="Per maand = €6,99"
                    extra="Ontvang per maand 1 pokemonpakje."
                    buttonCard="Basic"
                />

            </Abbonement>
            <Contact 
            imageF="ring.jpg"
            >
            </Contact>    
            <Footer 
            buttonText="Login"
            />
        </>
    )
}
export default HomePage;