# Fullstack Auth0

## API Configuration
1. Create ASP.NET Core Resource API project.
2. To be able to use different ports for API and Client you need to enable CORS in ASP.NET. You will do it adding to `Startup.cs`:
```csharp
public void ConfigureServices(IServiceCollection services){
...
services.AddCors(o =>
    o.AddPolicy("MyPolicy", builder => { builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin(); }));
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env){
...
app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
}
```
3. Create new API on Auth0 page, with `https://localhost:5001` audience (desired api link).
4. In ASP.NET Core `Startup.cs` file add the following:

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers();
services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        }
    )
    .AddJwtBearer(options =>
    {
        options.Authority = "https://your_auth0_url.auth0.com";
        options.Audience = "https://localhost:5001";
    });
}
```
5. Add [Authorize] to routes you want to limit access to.
```csharp
[Route("private")]
[HttpGet]
[Authorize]
public ActionResult GetPrivate()
{
    return StatusCode(200);
}
``` 