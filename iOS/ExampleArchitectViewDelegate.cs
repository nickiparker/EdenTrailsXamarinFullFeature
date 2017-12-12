using System;
using Foundation;
using Wikitude.Architect;
using UIKit;

namespace XamarinExample.iOS
{
	public class ExampleArchitectViewDelegate : WTArchitectViewDelegate
	{
		public override void InvokedURL(WTArchitectView architectView, NSUrl url)
		{
            UIKit.UIImage test = architectView.Capture();

			Console.WriteLine("architect view invoked url: " + url);


            // SEND EMAIL WITH PHOTO or TWEET PHOTO HERE....

           // Button emailButton = new Button { Text = "Email" };
           // emailButton.Clicked += (sender, e) =>
           // {
               // Device.OpenUri(new Uri("mailto:edenproject@test.com"));
           // };

           
		}

       

		public override void DidFinishLoadNavigation(WTArchitectView architectView, WTNavigation navigation)
		{
			Console.WriteLine("architect view loaded navigation: " + navigation.OriginalURL);
		}

		public override void DidFailToLoadNavigation(WTArchitectView architectView, WTNavigation navigation, NSError error)
		{
			Console.WriteLine("architect view failed to load navigation. " + error.LocalizedDescription);
		}
	}
}
