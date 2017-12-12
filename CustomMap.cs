using System;
using System.Collections.Generic;
using Xamarin.Forms.Maps;

namespace XamarinExample
{
    public class CustomMap : Map
    {
        public CustomMap()
        {
        }

        public List<CustomPin> CustomPins { get; set; }
    }
}
