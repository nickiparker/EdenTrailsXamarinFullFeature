﻿using System;
using System.Collections.Generic;

using Xamarin.Forms;
using Xamarin.Forms.Maps;

namespace XamarinExample
{
    public partial class OceanicIslandsMapPage : ContentPage
    {
        public OceanicIslandsMapPage()
        {
            InitializeComponent();
            //SamsMap = new Image { Source = "Rainforest.png" };

            /* Team decided they don't want a map after all..
             * 
             * Using an image now instead ...
            var EdenLatitude = 50.360134;
            var EdenLongitude = -4.744718;

            var pin = new CustomPin
            {
                Type = PinType.Place,
                Position = new Position(EdenLatitude, EdenLongitude),
                Label = "Eden Project",
                Address = "Bodelva, St Austell, Cornwall, PL24 2SG, UK",
                Id = "Xamarin",
                Url = "http://edenproject.com/"
            };

            customMap.WidthRequest = App.ScreenWidth;
            customMap.HeightRequest = App.ScreenHeight - 400;

            customMap.CustomPins = new List<CustomPin> { pin };
            customMap.Pins.Add(pin);
            customMap.MoveToRegion(MapSpan.FromCenterAndRadius(new Position(EdenLatitude, EdenLongitude), Distance.FromMiles(0.1)));
            */


        }

        async void Handle_Clicked(object sender, System.EventArgs e)
        {
            ARPage arPage = new ARPage("Oceanic_Islands");
            await Navigation.PushAsync(arPage);
        }
    }
}
