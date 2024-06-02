import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  frontendSkills = ["HTML", "JavaScript", "CSS", "TypeScript", "SCSS", "Angular", "Bootstrap"];
  backendSkills = ["ASP.NET Core", "C#", "Entity Framework", "Fluent API", "Identity", "SQL", "SQL Server", "Swagger", "Postman"];
  testingSkills = ["xUnit", "Moq", "AutoFixture", "Fluent Assertions"];
  otherSkills = ["CORS", "Swagger", "Git", "GitHub", "Visual Studio", "Visual Studio Core"];

  currentList = "F";

  onChangeList(newList: string) {
    this.currentList = newList;
  }
}
