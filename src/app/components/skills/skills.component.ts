import { Component, ElementRef, ViewChild } from '@angular/core';

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

  @ViewChild("pointer") pointer: ElementRef;

  onChangeList(newList: string) {
    this.currentList = newList;

    let transformAmount;

    switch(this.currentList) {
      case "B":
        transformAmount = "100%";
        break;
      case "T":
        transformAmount = "200%";
        break;
      case "O":
        transformAmount = "300%";
        break;
      default:
        transformAmount = "0";
    }

    let transformQuery;

    if(getComputedStyle(this.pointer.nativeElement).top === "0px") {
      transformQuery = `translateY(${transformAmount})`;
    } else {
      transformQuery = `translateX(${transformAmount})`;
    }

    this.pointer.nativeElement.style.transform = transformQuery;
  }
}
