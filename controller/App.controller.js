sap.ui.define(
  ["directors/movies/controller/BaseController", "sap/base/Log"],
  function (BaseController, Log) {
    "use strict";
    return BaseController.extend("directors.movies.controller.App", {
      onInit: function () {
        const oRouter = this.getRouter();
        oRouter.attachBypassed(function (oEvent) {
          const sHash = oEvent.getParameter("hash");
          // do something here, i.e. send logging data to the back end for analysis
          // telling what resource the user tried to access...
          Log.info(
            "Sorry, but the hash '" + sHash + "' is invalid.",
            "The resource was not found."
          );
        });
        oRouter.attachRouteMatched(function (oEvent) {
          const sRouteName = oEvent.getParameter("name");
          // do something, i.e. send usage statistics to back end
          // in order to improve our app and the user experience (Build-Measure-Learn cycle)
          Log.info(
            "User accessed route " +
              sRouteName +
              ", timestamp = " +
              new Date().getTime()
          );
        });
      },

      navToDirectors(oEvent) {
        this.getRouter().navTo("directorList");
      },
    });
  }
);
