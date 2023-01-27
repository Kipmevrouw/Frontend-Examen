import NavigationHomePage from "../components/HomePageComponenten/NavigationHomePage/NavigationHomePage";
import Header from "../components/HomePageComponenten/Header/Header";
import Card from "../components/HomePageComponenten/Card/Card";
import Card2 from "../components/HomePageComponenten/Card/Card2";
import Overons from "../components/HomePageComponenten/Overons/Overons";
import Contact from "../components/HomePageComponenten/Contact/Contact";
import Abbonement from "../components/HomePageComponenten/Abbonement/Abbonement";
import Footer from "../components/HomePageComponenten/Footer/Footer";
import Features from "../components/HomePageComponenten/Features/Features";
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
                image="logo.webp"
                buttonText="Login" />
            <Header
                bigTitle="PokemonCards"
                smallTitle="Klik hier om in te loggen:"
                buttonText="Login" />

            <Overons 
            headerTitle="Over ons:"
                stukjeTekst="Pokemon-Spekky is begonnen met pokemonkaarten verkopen in 
                                  1997. Ik vond het vroeger als kind geweldig om mee te ruilen
                                  en om er mee te spelen. Nu is het een bedrijf geworden waar ik
                                  pakjes verkoop. Dit is wat je kunt doen hier: je neemt een abbonement
                                  op pokemonkaartjes en je krijgt per week een pakje pokemonkaartje opgestuurd
                                  "
                imageM="Cards.webp"  >

            </Overons>
            <Art imageA="Favo.webp">

            </Art>
            <Features 
                imageBulbasaur="bulbasaur2.webp"
                imagePoliwrath="polli.webp"
                imageGengar="gengar.webp"
                imageLapras="lap.webp"
                imageDitto="ditto.webp"
            
            >
            </Features>
            <Abbonement hoofdTitel="Abbonementen">
                <Card image="evolving.webp"
                    prijs="Per maand = €12,99"
                    extra="Ontvang per maand 2 pokemonpakjes."
                    buttonCard="Medium"
                />
                <Card2
                    image="battlestyles.webp"
                    prijs="Per maand = €21,99"
                    extra="Ontvang per maand 4 pokemonpakjes."
                    buttonCard="Premium"
                />
                <Card image="BrilliantStars.webp"
                    prijs="Per maand = €6,99"
                    extra="Ontvang per maand 1 pokemonpakje."
                    buttonCard="Basic"
                />

            </Abbonement>
            <Contact 
            imageF="ring.webp"
            >
            </Contact>    
            <Footer 
            buttonText="Login"
            />
        </>
    )
}
export default HomePage;