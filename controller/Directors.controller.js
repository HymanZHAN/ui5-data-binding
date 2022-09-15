sap.ui.define(
  ["directors/movies/controller/BaseController"],
  function (BaseController) {
    "use strict";

    return BaseController.extend("directors.movies.controller.Directors", {
      // show list of movies for specific director
      onItemPressed: function (oEvent) {
        const oItem = oEvent.getParameter("listItem");
        const oCtx = oItem.getBindingContext();
        this.getRouter().navTo("moviesList", {
          DirectorID: oCtx.getProperty("DirectorID"),
        });
      },
    });
  }
);
