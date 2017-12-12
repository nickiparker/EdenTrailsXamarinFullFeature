using System;
using System.Collections.Generic;
using Xamarin.Forms;
using Xamarin.Forms.Maps;

namespace XamarinExample
{
    public class MapPageCS : ContentPage
    {
        double EdenLat = 50.360134;
        double EdenLong = -4.744718;

        Button floraButton;
        Button faunaButton;
        Button peopleButton;
        Button mythsButton;

        Button enterButton;

        CustomMap customMap;

        public MapPageCS()
        {
            var layout = new StackLayout();

            customMap = new CustomMap
            {
                MapType = MapType.Hybrid,
                WidthRequest = 200, //App.ScreenWidth,
                HeightRequest = 200 //App.ScreenHeight
            };

            var pin = new CustomPin
            {
                Type = PinType.Place,
                Position = new Position(EdenLat, EdenLong),
                Label = "Eden Project",
                Address = "Bodelva, Cornwall, PL24 2SG",
                Id = "EdenProject",
                Url = "http://edenproject.com"

            };

            //pin.Clicked += Pin_Clicked;

            customMap.CustomPins = new List<CustomPin> { pin };
            customMap.Pins.Add(pin);
            customMap.MoveToRegion(MapSpan.FromCenterAndRadius(new Position(EdenLat, EdenLong), Distance.FromMiles(1.0)));

            floraButton = new Button { Text = "Flora Trail", VerticalOptions = LayoutOptions.Start, HorizontalOptions = LayoutOptions.FillAndExpand, HeightRequest = 10 };
            faunaButton = new Button { Text = "Fauna Trail", VerticalOptions = LayoutOptions.FillAndExpand, HorizontalOptions = LayoutOptions.FillAndExpand, HeightRequest = 10 };
            peopleButton = new Button { Text = "People Trail", VerticalOptions = LayoutOptions.FillAndExpand, HorizontalOptions = LayoutOptions.FillAndExpand, HeightRequest = 10 };
            mythsButton = new Button { Text = "Myths and Folklore Trail", VerticalOptions = LayoutOptions.FillAndExpand, HorizontalOptions = LayoutOptions.FillAndExpand, HeightRequest = 10 };

            enterButton = new Button { Text = "Start your trail", VerticalOptions = LayoutOptions.FillAndExpand, HorizontalOptions = LayoutOptions.FillAndExpand, HeightRequest = 10 };


            floraButton.Clicked += FloraButton_Clicked;
            faunaButton.Clicked += FaunaButton_Clicked;
            peopleButton.Clicked += PeopleButton_Clicked;
            mythsButton.Clicked += MythsButton_Clicked;
            enterButton.Clicked += EnterButton_Clicked;

            layout.Children.Add(customMap);
            layout.Children.Add(floraButton);
            layout.Children.Add(faunaButton);
            layout.Children.Add(peopleButton);
            layout.Children.Add(mythsButton);

            layout.Children.Add(enterButton);

            layout.Spacing = 5;

            //Content = customMap;

            Content = layout;
        }

        void FloraButton_Clicked(object sender, EventArgs e)
        {
            customMap.CustomPins.Clear();

            customMap.Pins.Clear();

            var floraPin = new CustomPin
            {
                Type = PinType.Place,
                Position = new Position(EdenLat + 0.000001, EdenLong + 0.000001),
                Label = "Flora Pin",
                Address = "Special Flower",
                Id = "EdenProject",
                Url = "http://edenproject.com"

            };
            customMap.CustomPins = new List<CustomPin> { floraPin };
            customMap.Pins.Add(floraPin);
            customMap.MoveToRegion(MapSpan.FromCenterAndRadius(new Position(EdenLat + 0.000001, EdenLong + 0.000001), Distance.FromMiles(1.0)));


        }

        void FaunaButton_Clicked(object sender, EventArgs e)
        {
            customMap.CustomPins.Clear();
            customMap.Pins.Clear();

            var faunaPin = new CustomPin
            {
                Type = PinType.Place,
                Position = new Position(EdenLat + 0.000002, EdenLong + 0.000002),
                Label = "Fauna Pin",
                Address = "Special Animal",
                Id = "EdenProject",
                Url = "http://edenproject.com"

            };

            customMap.CustomPins = new List<CustomPin> { faunaPin };
            customMap.Pins.Add(faunaPin);
            customMap.MoveToRegion(MapSpan.FromCenterAndRadius(new Position(EdenLat + 0.000002, EdenLong + 0.000002), Distance.FromMiles(1.0)));


        }

        async void PeopleButton_Clicked(object sender, EventArgs e)
        {

            ARPage arPage = new ARPage("01_ImageRecognition_1_ImageOnTarget");
            await Navigation.PushAsync(arPage);
        }

        async void MythsButton_Clicked(object sender, EventArgs e)
        {
            ARPage arPage = new ARPage("01_ImageRecognition_1_ImageOnTarget");
            await Navigation.PushAsync(arPage);
        }

        async void Pin_Clicked(object sender, EventArgs e)
        {
            ARPage arPage = new ARPage("01_ImageRecognition_1_ImageOnTarget");
            await Navigation.PushAsync(arPage);
        }

        async void EnterButton_Clicked(object sender, EventArgs e)
        {
            ARPage arPage = new ARPage("01_ImageRecognition_1_ImageOnTarget");
            await Navigation.PushAsync(arPage);
        }
    }
}

