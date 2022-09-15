sap.ui.define(
  ["directors/movies/controller/BaseController"],
  function (BaseController) {
    "use strict";

    return BaseController.extend("directors.movies.controller.Home", {
      onNavToDirectorsList(oEvent) {
        console.log("Home.onNavTodirectosList clicked...");
        this.getRouter().navTo("directorList", {}, undefined, false);
      },
    });
  }
);
