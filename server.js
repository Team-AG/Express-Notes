/*=====================================================================================================================
                            Variables for Express
=====================================================================================================================*/

const express = require("express");
requiredFunction();

const routeVariables = requiredFunction();
/*=====================================================================================================================
                            Require Routes
=====================================================================================================================*/

const {
  htmlRoutes,
  apiRoutes
} = routeVariables;

const {
  app,
  PORT
} = appPortFunction();

appUsedFunction();
appListenPortFunction();

/*=====================================================================================================================
                            App Port Functions Direction with Express
=====================================================================================================================*/
function appPortFunction() {
  const app = express();
  const PORT = setUpPort();
  return {
    app,
    PORT
  };
}

/*=====================================================================================================================
                            Setting up port function
=====================================================================================================================*/
function setUpPort() {
  return process.env.PORT || 3000;
};


function requiredFunction() {
  const htmlRoutes = require("./routes/htmlRoutes");
  const apiRoutes = require("./routes/apiRoutes");
  return {
    htmlRoutes,
    apiRoutes
  };
};


/*=====================================================================================================================
                            Command Functions For App
=====================================================================================================================*/
function appUsedFunction() {
  expressJson();
  expressUrlencoded();
  expressStatic();
  expressApiRoutes();
  expressHtmlRoutes();
}


/*=====================================================================================================================
                            App use Functions
=====================================================================================================================*/
function expressHtmlRoutes() {
  app.use("/", htmlRoutes);
}

function expressApiRoutes() {
  app.use("/api", apiRoutes);
}

function expressStatic() {
  app.use(express.static("public"));
}

function expressUrlencoded() {
  app.use(express.urlencoded({
    extended: true
  }));
}

function expressJson() {
  app.use(express.json());
}

/*=====================================================================================================================
                            App Listen Function
=====================================================================================================================*/
function appListenPortFunction() {
  insideAppErrFunction();

  function insideAppErrFunction() {
    app.listen(PORT, function (error) {
      errFunction(error);
    });
  }

  function errFunction(error) {
    if (error) {
      console.log("Problem --->", error);
    } else {
      console.log(`App listening on PORT: ${PORT}`);
    }
  }
};