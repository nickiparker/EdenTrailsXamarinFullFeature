var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

    



	createOverlays: function createOverlaysFn() {
		/*
			First an AR.ClientTracker needs to be created in order to start the recognition engine. It is initialized with a URL specific to the target collection. Optional parameters are passed as object in the last argument. In this case a callback function for the onLoaded trigger is set. Once the tracker is fully loaded the function worldLoaded() is called.

			Important: If you replace the tracker file with your own, make sure to change the target name accordingly.
			Use a specific target name to respond only 
            to a certain target or use a wildcard to respond to any or a certain group of targets.
		*/

        

        this.tracker = new AR.ClientTracker("assets/EdenTrailsMarker_v2.wtc", {
            onLoaded: this.worldLoaded
        });

		/*
			The next step is to create the augmentation. In this example an image resource is created and passed to the AR.ImageDrawable. A drawable is a visual component that can be connected to an IR target (AR.Trackable2DObject) or a geolocated object (AR.GeoObject). The AR.ImageDrawable is initialized by the image and its size. Optional parameters allow for position it relative to the recognized target.
		*/

        this.imgButton = new AR.ImageResource("assets/roul-roul-correct-answer.png");
        this.imgButton2 = new AR.ImageResource("assets/gecko-wrong-answer.png");

		// Create overlay for ASIA quiz question
		var imgOne = new AR.ImageResource("assets/southeast-asia-quiz-question.png");
        
		var overlayOne = new AR.ImageDrawable(imgOne, 1, {
			offsetX: 1.55, //-0.15,
			offsetY: 1.00
		});

        var pageOneButton = this.createWwwButton1("https://mapmycrush.com/EdenTrails/Islands/congratulations.png", 0.5, {
            translate: {
                x: 1.25,
                y: 0.25
            },
            zOrder:1
        });

        /*
        var imgTwo = new AR.ImageResource("assets/imageTwo.png");
        var overlayTwo = new AR.ImageDrawable(imgTwo, 0.5, {
            translate: {
                x: 0.12,
                y: -0.01
            }
        });

        */

        var pageTwoButton = this.createWwwButton2("https://mapmycrush.com/EdenTrails/Islands/error.png", 0.5, {
            translate: {
                x: 1.85,
                y: 0.25
            }//,
            //zOrder:1
        });



        /*
        var pageOne = new AR.ImageTrackable(this.tracker, "", {
            drawables: 
            {
                cam: [overlayOne, pageOneButton]
            }
        });
        */



		// Please note that in this case the target name is a wildcard. Wildcards can be used to 
        // respond to any target defined in the target collection. If you want to respond to a certain target 
        // only for a particular AR.Trackable2DObject simply provide the target name as specified in the target collection.
		/*
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
        }); */

        /* Team decided not to show these educational videos from Eden Project ...
        // Create LilyPads ( South East Asia )Video drawable
        var video3 = new AR.VideoDrawable("assets/Lilypads.mp4", 0.5, {
                translate: {
                x: 0.2,
                y: 0.2
            }
        });
        */

        /* Create Dancing Frog Video drawable
        var videoFrog = new AR.VideoDrawable("assets/Dancing_Frog_music.mp4", 0.5, {
                translate: {
                x: 0.2,
                y: 0.2
            }
        });*/

        // Tree Frog Info Widget
        var treeFrogWidget = new AR.HtmlDrawable({
            uri: "assets/tree_frog_text.html"
        }, 1, {
            viewportWidth: 690,
            viewportHeight: 400,
            backgroundColor: "#00000000",
            translate: {
                x: 0.0, //x:0.36,
                y: 0.0
            },
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.LEFT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.BOTTOM,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                AR.context.openInBrowser(uri);
            }
        });


        // Sam Tree Frog Widget
        var samsFrogWidget = new AR.HtmlDrawable({
            uri: "assets/Sams_Frog_Widget.html"
        }, 1, {
            viewportWidth: 800,
            viewportHeight: 800,
            backgroundColor: "#00000000",
            translate: {
                x: 0.2,
                y: 1.5
            },
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.LEFT,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
            clickThroughEnabled: true,
            allowDocumentLocationChanges: false,
            onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                AR.context.openInBrowser(uri);
            }
        });

        /* West Africa Widget
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
        */

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

        // RHYS SOUTH EAST ASIA PAINTING MARKER - show Sams frog....
        var page1 = new AR.ImageTrackable(this.tracker, "Rhys_Asia_Marker", {
            drawables: {
            cam: [overlayOne, treeFrogWidget, samsFrogWidget, pageOneButton, pageTwoButton]
            //cam: [overlayOne, pageOneButton, pageTwoButton]
            },
        });

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
        });*/
	},

    createWwwButton1: function createWwwButtonFn(url, size, options) {
            options.onClick = function() {
            AR.context.openInBrowser(url);
        };
        return new AR.ImageDrawable(this.imgButton, size, options);
    },

    createWwwButton2: function createWwwButtonFn(url, size, options) {
            options.onClick = function() {
            AR.context.openInBrowser(url);
        };
        return new AR.ImageDrawable(this.imgButton2, size, options);
    },

	worldLoaded: function worldLoadedFn() {
		var cssDivInstructions = " style='display: table-cell;vertical-align: middle; text-align: right; width: 50%; padding-right: 15px;'";       
        var cssDivAsiaMarker = " style='display: table-cell;vertical-align: middle; text-align: left; padding-right: 15px; width: 53px'";
        document.getElementById('loadingMessage').innerHTML =
            "<div" + cssDivInstructions + ">Look for this marker:</div>" +
            "<div" + cssDivAsiaMarker + "><img src='assets/Rhys_Asia_Marker_200_200.png'></img></div>";
		// Remove Scan target message after 60 sec.
		setTimeout(function() {
			var e = document.getElementById('loadingMessage');
			e.parentElement.removeChild(e);
		}, 60000);
	}
};

World.init();
