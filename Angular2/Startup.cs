using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Angular2.Startup))]
namespace Angular2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
