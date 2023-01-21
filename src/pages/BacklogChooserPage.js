import FilterPage from "../components/BacklogComponenten/Backlog/FilterPage/FilterPage"
import NavigationCollectiePage from "../components/CollectiePageComponenten/NavigationCollectiePage/NavigationCollectiePage"
import React from "react";
const BacklogChooserPage = () => {

  return (
    <>
      <NavigationCollectiePage
        nav1="Collectie"
        nav2="Backlog"
        nav3="Contact"
        nav4="Uitloggen"
        image="logo.png"
        buttonText="Delen"
      />

      <FilterPage/>
    </>
  );
}

export default BacklogChooserPage;
