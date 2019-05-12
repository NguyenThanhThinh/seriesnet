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
### What is the Code First Model?
> Code First means to write the .NET classes and let EF Core create the database from the mappings

### Why Use Code First?
- Define objects in C# format
- Enables database persistence with no configuration
- Changes to code can be reflected (migrated) in the schema
- Data Annotations or Fluent API describe properties **Key, Required, MinLength, etc.**

### Code First with EF Core: Setup
- Install it from Package Manager Console
```
Install-Package Microsoft.EntityFrameworkCore

```
```
Install-Package Microsoft.EntityFrameworkCore.SqlServer

```
### What are Database Migrations?

- Updating database schema without losing data

- Migrations in EF Core keep their history 

> To use migrations in EF Core, we use the Add-Migration command from the **Package Manager Console**
```
Add-Migration {MigrationName}

```
> To undo a migration, we use **Remove-Migration**
> Commit changes to the database, using **Update-Database**






      




