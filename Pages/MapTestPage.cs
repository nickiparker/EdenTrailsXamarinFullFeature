using System;

using Xamarin.Forms;

namespace XamarinExample
{
    public class MapTestPage : ContentPage
    {
        public MapTestPage()
        {
            Content = new StackLayout
            {
                Children = {
                    new Label { Text = "Hello ContentPage" }
                }
            };
        }
    }
}

