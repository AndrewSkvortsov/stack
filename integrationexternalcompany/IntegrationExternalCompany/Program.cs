using IntegrationExternalCompany.Declarations;
using IntegrationExternalCompany.Implementations;
using IntegrationExternalCompany.Service;

var WebRootPath = "client/build";
var builder = WebApplication.CreateBuilder(new WebApplicationOptions { WebRootPath = WebRootPath });
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IInitScriptCompany, InitScriptCompany>();
builder.Services.AddScoped(typeof(IDbService<>), typeof(DbService<>));
builder.Services.AddSpaStaticFiles(configuration => configuration.RootPath = WebRootPath);
var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseRouting();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseSpaStaticFiles();
app.UseSpa(spa =>
    {
        spa.Options.SourcePath = WebRootPath;
        app.UseSpaStaticFiles();
    });
app.Urls.Add("http://*:1320");
app.Run();
