using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace XamarinExample
{
    public partial class MainMenuPage : ContentPage
    {
        public static object GetApplicationCurrentProperty(string propertyKey)
        {
            object retValue = null;
            IDictionary<string, object> properties = Application.Current.Properties;
            if (properties.ContainsKey(propertyKey))
            {
                retValue = properties[propertyKey];
            }
            return retValue;
        }

        public static void SetApplicationCurrentProperty(string propertyKey, object obj)
        {
            IDictionary<string, object> properties = Application.Current.Properties;
            if (properties.ContainsKey(propertyKey))
            {
                properties[propertyKey] = obj;
            }
            else
            {
                properties.Add(propertyKey, obj);
            }
        }

        public MainMenuPage()
        {           
            InitializeComponent();

            L3_WestAfrica.IsEnabled = true;
            //Application.Current.Properties.Add("WestAfrica", false);

            L2_SouthEastAsia.IsEnabled = true;
            //Application.Current.Properties.Add("Asia", false);

            L1_OceanicIslands.IsEnabled = true;
            //Application.Current.Properties.Add("Islands", false);

            L4_PhotoComp.IsEnabled = true;
            //Application.Current.Properties.Add("Photo", false);

        }

        async void Islands_Handle_Clicked(object sender, System.EventArgs e)
        {
            // Islands button clicked .. show Islands Map page...

            var oceanicValid = GetApplicationCurrentProperty("Islands");
            // test here .......
            OceanicIslandsMapPage islandsPage = new OceanicIslandsMapPage();
            await Navigation.PushAsync(islandsPage);
        }

        async void Asia_Handle_Clicked(object sender, System.EventArgs e)
        {
            // Asia button clicked .. show Asia Map Page...
            SouthEastAsiaMapPage asiaPage = new SouthEastAsiaMapPage();
            await Navigation.PushAsync(asiaPage);
        }

        async void Africa_Handle_Clicked(object sender, System.EventArgs e)
        {
            // Africa button clicked... you get the pattern ...
            WestAfricaMapPage africaPage = new WestAfricaMapPage();
            await Navigation.PushAsync(africaPage);
        }

       

    }
}
