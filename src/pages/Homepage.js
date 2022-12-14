import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import Card2 from "../components/Card/Card2";
import Section from "../components/Section/Section";
import Contact from "../components/Contact/Contact";
import CardSection from "../components/CardSection/CardSection";
import Footer from "../components/Footer/Footer";
import Favo from "../components/Favo/Favo";
import Art from "../components/Art/Art";
import React from "react";
const HomePage = () => {
    return (
        <>
            <Navigation
                image="logo.png"
                buttonText="Login" />
            <Header
                bigTitle="PokemonCards"
                smallTitle="Klik hier om in te loggen:"
                buttonText="Login" />

            <Section headerTitle="Over ons:"
                stukjeTekst="Pokemon-Spekky is begonnen met pokemonkaarten verkopen in 
                                  1997. Ik vond het vroeger als kind geweldig om mee te ruilen
                                  en om er mee te spelen. Nu is het een bedrijf geworden waar ik
                                  pakjes verkoop. Dit is wat je kunt doen hier: je neemt een abbonement
                                  op pokemonkaartjes en je krijgt per week een pakje pokemonkaartje opgestuurd
                                  "
                imageM="Cards.jpg"  >

            </Section>
            <Art imageA="Favo.png">

            </Art>
            <Favo imageBulbasaur="bulbasaur.png"
                imagePoliwrath="polli.png"
                imageGengar="gengar.png"
                imageLapras="lap.png"
                imageDitto="ditto.png"
            
            >
            </Favo>
            <CardSection hoofdTitel="Abbonementen">
                <Card image="evolving.png"
                    prijs="Per maand = €12,99"
                    extra="Ontvang per maand 2 pokemonpakjes."
                    buttonCard="Medium"
                />
                <Card2
                    top="Meeste gekozen" 
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

            </CardSection>
            <Contact 
            imageF="ring.jpg"
            />
            <Footer 
            buttonText="Login"
            />
        </>
    )
}
export default HomePage;