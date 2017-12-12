using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace XamarinExample
{
    public partial class MapPage : ContentPage
    {
        async void Handle_Clicked(object sender, System.EventArgs e)
        {
            //throw new NotImplementedException();
            await Navigation.PushAsync(new MainPage());
        }

        public MapPage()
        {
            InitializeComponent();
        }
    }
}
