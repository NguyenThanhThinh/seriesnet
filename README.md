# about seriesnet

### Entity Framework Core: Setup
- Install it from Package Manager Console
```
  Install-Package Microsoft.EntityFrameworkCore

```
- EF Core is modular – any data providers must be installed too:
```
Install-Package Microsoft.EntityFrameworkCore.SqlServer

```
### Database First Model: Setup
- Scaffolding DbContext from DB with Scaffold-DbContext use command in **Package Manager Console**:

```
Scaffold-DbContext 
  -Connection "Server=.;Database=…;Integrated Security=True" 
  -Provider Microsoft.EntityFrameworkCore.SqlServer 
  -OutputDir Data

```
- Scaffolding requires the following packages beforehand:

```
Install-Package Microsoft.EntityFrameworkCore.Tools
Install-Package Microsoft.EntityFrameworkCore.SqlServer.Design

```

      




