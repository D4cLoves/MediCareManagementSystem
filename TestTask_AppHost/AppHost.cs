var builder = DistributedApplication.CreateBuilder(args);

var api = builder.AddProject<Projects.TestTask_API>("api");

// Frontend запускается отдельно через npm run dev
// Запустите фронтенд вручную: cd TestTask_Client && npm run dev

builder.Build().Run();