var World = {
    loaded: false,

    init: function initFn() {
        this.createOverlays();
    },

    createOverlays: function createOverlaysFn() {
        /*
            First an AR.ClientTracker needs to be created in order to start the recognition engine. It is initialized with a URL specific to the target collection. Optional parameters are passed as object in the last argument. In this case a callback function for the onLoaded trigger is set. Once the tracker is fully loaded the function worldLoaded() is called.

            Important: If you replace the tracker file with your own, make sure to change the target name accordingly.
            Use a specific target name to respond only to a certain target or use a wildcard to respond to any or a certain group of targets.
        */

        this.tracker = new AR.ClientTracker("assets/EdenTrailsMarkers.wtc", {
            onLoaded: this.worldLoaded
        });

        /*
            The next step is to create the augmentation. In this example an image resource is created and passed to the AR.ImageDrawable. A drawable is a visual component that can be connected to an IR target (AR.Trackable2DObject) or a geolocated object (AR.GeoObject). The AR.ImageDrawable is initialized by the image and its size. Optional parameters allow for position it relative to the recognized target.
        */

        /* Create overlay for page one
        var imgOne = new AR.ImageResource("assets/imageOne.png");
        var overlayOne = new AR.ImageDrawable(imgOne, 1, {
            offsetX: -0.15,
            offsetY: 0
        });


        // Please note that in this case the target name is a wildcard. Wildcards can be used to 
        // respond to any target defined in the target collection. If you want to respond to a certain target 
        // only for a particular AR.Trackable2DObject simply provide the target name as specified in the target collection.
        
        var pageOne = new AR.Trackable2DObject(this.tracker, "*", {
            drawables: {
                cam: overlayOne
            }
        }); */

        /* Create JadeVine Video drawable (part of Tropical Islands)
        var video = new AR.VideoDrawable("assets/JadeVine.mp4", 0.5, {
                translate: {
                x: 0.2,
                y: 0.2
            }
        });

        // Create Banana Video drawable (part of West Africa)
        var video2 = new AR.VideoDrawable("assets/Bananas.mp4", 0.5, {
                translate: {
                x: 0.2,
                y: 0.2
            }
        }); 

        // Create LilyPads ( South East Asia )Video drawable
        var video3 = new AR.VideoDrawable("assets/Lilypads.mp4", 0.5, {
                translate: {
                x: 0.2,
                y: 0.2
            }
        });
        */

        /* Create Dancing Frog Video drawable
        var videoFrog = new AR.VideoDrawable("assets/Dancing_Frog_Jeepers_Creepers.mp4", 0.5, {
                translate: {
                x: 0.2,
                y: 0.2
            }
        });
        */

        // Show video of Rhys grandfather....
        // The team have requested that I show a video of Rhys's grandfather as an AR asset instead of the Eden Project videos...
        var rhysVideo = new AR.VideoDrawable("assets/West_Africa_Video1.mp4", 0.5, {
                translate: {
                x: 0.2,
                y: 0.2
            }
        });

        // Tree Frog Widget
        var treeFrogWidget = new AR.HtmlDrawable({
            uri: "assets/tree_frog_text.html"
        }, 1, {
            viewportWidth: 690,
            viewportHeight: 400,
            backgroundColor: "#00000000",
            translate: {
                x:0.36,
                y: 0.5
            },
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.BOTTOM,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                AR.context.openInBrowser(uri);
            }
        });

        // West Africa Widget
        var westAfricaWidget = new AR.HtmlDrawable({
            uri: "assets/west_africa_text.html"
        }, 1, {
            viewportWidth: 690,
            viewportHeight: 400,
            backgroundColor: "#00000000",
            translate: {
                x:0.36,
                y: 0.5
            },
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.BOTTOM,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                AR.context.openInBrowser(uri);
            }
        });
       

        /* Tropical Island Widget
        var tropicalIslandWidget = new AR.HtmlDrawable({
            uri: "assets/tropical_island_text.html"
        }, 1, {
            viewportWidth: 690,
            viewportHeight: 400,
            backgroundColor: "#00000000",
            translate: {
                x:0.36,
                y: 0.5
            },
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.BOTTOM,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                AR.context.openInBrowser(uri);
            }
        });
        */

        /* Weather Widget
        var weatherWidget = new AR.HtmlDrawable({
            uri: "assets/weather.html"
                }, 0.25, {
            viewportWidth: 320,
            viewportHeight: 100,
            backgroundColor: "#FFFFFF",
            translate: {
                x:0.36,
                y: 0.5
            },
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
            AR.context.openInBrowser(uri);
        }
        }); */

        /* TROPICAL ISLANDS Popup
        var pageOne = new AR.ImageTrackable(this.tracker, "Tropical_Islands_Seychelles", {
            drawables: {
            cam: [video, tropicalIslandWidget]
            },

        onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
        if (this.hasVideoStarted) {
            video.resume();
        }
        else {
            this.hasVideoStarted = true;
            video.play(-1);
        }                
        },
        onExitFieldOfVision: function onExitFieldOfVisionFn() {
        video.pause();
        }
        });
        */

        /*WEST AFRICA popup
        var page2 = new AR.ImageTrackable(this.tracker, "West_Africa_Marker", {
            drawables: {
            cam: [video2, westAfricaWidget]
            },

        onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
        if (this.hasVideoStarted) {
            videoFrog.resume();
        }
        else {
            this.hasVideoStarted = true;
            videoFrog.play(-1);
        }                
        },
        onExitFieldOfVision: function onExitFieldOfVisionFn() {
        videoFrog.pause();
        }
        });
        */

        /* Correct Answer Widget
        var correctAnswerWidget = new AR.HtmlDrawable({
            uri: "assets/correct_answer_widget.html"
                }, 0.25, {
            viewportWidth: 320,
            viewportHeight: 100,
            backgroundColor: "#FFFFFF",
            translate: {
                x:0.36,
                y: 0.5
            },
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
            AR.context.openInBrowser(uri);
        }
        });

         // Incorrect Answer Widget
        var incorrectAnswerWidget = new AR.HtmlDrawable({
            uri: "assets/incorrect_answer_widget.html"
                }, 0.25, {
            viewportWidth: 640,
            viewportHeight: 200,
            backgroundColor: "#FFFFFF",
            translate: {
                x:0.36,
                y: 0.5
            },
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
            AR.context.openInBrowser(uri);
        }
        });
        */


        /* West Africa Correct Answer
        var page2 = new AR.ImageTrackable(this.tracker, "Palm_Oil_Marker_2", {
            drawables: {
            cam: [treeFrogWidget, correctAnswerWidget]
            },
        });*/

            /*
        onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
        if (this.hasVideoStarted) {
            videoFrog.resume();
        }
        else {
            this.hasVideoStarted = true;
            videoFrog.play(-1);
        }                
        },
        onExitFieldOfVision: function onExitFieldOfVisionFn() {
        videoFrog.pause();
        }

        //AR.platform.sendJSONObject( { action: 'africa_completed' });

        //document.location = "architectsdk://button?action=west_africa_ok";
        });*/


        // West Africa Intro ...... show Rhys grandfather video.... and west africa widget ....
        var page1 = new AR.ImageTrackable(this.tracker, "Rhys_Africa_Marker", {
            drawables: {
            cam: [rhysVideo, westAfricaWidget]
            },

        onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
        if (this.hasVideoStarted) {
            rhysVideo.resume();
        }
        else {
            this.hasVideoStarted = true;
            rhysVideo.play(-1);
        }                
        },
        onExitFieldOfVision: function onExitFieldOfVisionFn() {
        rhysVideo.pause();
        }
        });


        // West Africa InCorrect Answer
        var page3 = new AR.ImageTrackable(this.tracker, "Chocolate_Marker2", {
            drawables: {
            cam: [videoFrog, incorrectAnswerWidget]
            },

        onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
        if (this.hasVideoStarted) {
            videoFrog.resume();
        }
        else {
            this.hasVideoStarted = true;
            videoFrog.play(-1);
        }                
        },
        onExitFieldOfVision: function onExitFieldOfVisionFn() {
        videoFrog.pause();
        }
        });
    },

    worldLoaded: function worldLoadedFn() {
        var cssDivInstructions = " style='display: table-cell;vertical-align: middle; text-align: right; width: 50%; padding-right: 15px;'";
        var cssDivWestAfrica = " style='display: table-cell;vertical-align: middle; text-align: left; padding-right: 15px; width: 98px'";
        var cssDivChocolate = " style='display: table-cell;vertical-align: middle; text-align: left; padding-right: 15px; width: 48px'";
        document.getElementById('loadingMessage').innerHTML =
            "<div" + cssDivInstructions + ">Try and find this marker</div>" +
            "<div" + cssDivWestAfrica + "><img src='assets/Rhys_Marker_Africa_200_200.png'></img></div>";
        // Remove Scan target message after 60 sec.
        setTimeout(function() {
            var e = document.getElementById('loadingMessage');
            e.parentElement.removeChild(e);
        }, 60000);
    }
};

World.init();
