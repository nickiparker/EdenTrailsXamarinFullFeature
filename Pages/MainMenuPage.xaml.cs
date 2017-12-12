using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace XamarinExample
{
    public partial class MainMenuPage : ContentPage
    {
        public MainMenuPage()
        {
            InitializeComponent();
        }

        async void Islands_Handle_Clicked(object sender, System.EventArgs e)
        {           
            OceanicIslandsMapPage islandsPage = new OceanicIslandsMapPage();
            await Navigation.PushAsync(islandsPage);
        }

        async void Asia_Handle_Clicked(object sender, System.EventArgs e)
        {
            SouthEastAsiaMapPage asiaPage = new SouthEastAsiaMapPage();
            await Navigation.PushAsync(asiaPage);
        }

        async void Africa_Handle_Clicked(object sender, System.EventArgs e)
        {
            WestAfricaMapPage africaPage = new WestAfricaMapPage();
            await Navigation.PushAsync(africaPage);
        }

        async void Photo_Handle_Clicked(object sender, System.EventArgs e)
        {
            ARPage arPage = new ARPage("Photo_Competition");
            await Navigation.PushAsync(arPage);
        }
    }
}
