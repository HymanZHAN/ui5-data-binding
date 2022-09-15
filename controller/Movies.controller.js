sap.ui.define(
  ["directors/movies/controller/BaseController", "sap/ui/model/json/JSONModel"],
  function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("directors.movies.controller.Movies", {
      onInit: function () {
        const oRouter = this.getRouter();
        oRouter
          .getRoute("moviesList")
          .attachMatched(this._onRouteMatched, this);
      },

      _onRouteMatched: function (oEvent) {
        // save the current query state
        let oArgs, oView;
        oArgs = oEvent.getParameter("arguments");
        oView = this.getView();

        oView.getModel().read("/Movies", {
          method: "GET",
          success: function (oData) {
            console.log("Read success!");
            console.log("oData.results:", oData.results);
            const oJsonModel = new JSONModel();
            const movies = oData.results.filter(
              (m) => m.DirectorID == oArgs.DirectorID
            );
            console.log("movies: ", movies);
            oJsonModel.setData({ movies });
            oView.setModel(oJsonModel, "viewModel");
          },
        });
      },
    });
  }
);
