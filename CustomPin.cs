using System;
using Xamarin.Forms.Maps;

namespace XamarinExample
{
    public class CustomPin : Pin
    {
        public CustomPin()
        {
        }

        public string Id { get; set; }
        public string Url { get; set; }
    }
}
