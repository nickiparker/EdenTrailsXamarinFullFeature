using System;

using Xamarin.Forms;

namespace XamarinExample
{    
	public class App : Application
	{
        public static double ScreenHeight;
        public static double ScreenWidth;

		public App()
		{
            //MainPage = new NavigationPage(new MainPage());
            MainPage = new NavigationPage(new MainMenuPage());
		}

		protected override void OnStart()
		{
			// Handle when your app starts
		}

		protected override void OnSleep()
		{
			// Handle when your app sleeps
		}

		protected override void OnResume()
		{
			// Handle when your app resumes
		}
	}
}
