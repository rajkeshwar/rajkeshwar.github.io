import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pfl-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public experiences = [
    { 
      name: 'CST UI Framework', 
      expLogo: 'assets/img/wespire-logo.jpg',
      expLink: '',
      duration: 'June 2017 - Present | Hyderabad, Telangana',
      role: 'UI Architect',
      description: `
        Common **UI Framework** accross all the apps and teams to maintain consistency and avoid rework.
      `,
      markdown: `
        ###### Project Description
        **CST UI Framework** – We as group of 8 people were responsible to develop and 
        support UI Framework **(CST UI Framework)** with best practices and 
        best options available in open sources community. Since each project from 
        DBS should have consistency. So we build the UI Components and created its 
        documentation and **plunker** for live example. We configured all pain point 
        on a fresh project creation one face. We build **cstui-cli** which will 
        generate **scaffolding** app which includes 
        1. PCF/AWS deployment 
        2. SonarQ test configuration 
        3. Unit & e2e test configuration 
        4. cst-components library included 
        5. Few example with login screen (Option to select basic or rich login on cli). 
         (Login was integrated with LDAP authentication).
        ###### Accomplishments
        -	Researching the latest technology stack for UI application
        -	Setting up the UI Angular5 build with angular-cli, Sass and material design
        -	Analyzing and proposing the best user experience with enriched CSS3 features like 
          Transition, box-shadow and less click, simple intuitive UI experience.
        -	Developing the custom components which are not present in Angular material design.
      `
    },
    { 
      name: 'OWB (Workbench)', 
      expLogo: 'assets/img/wespire-logo.jpg',
      expLink: '',
      duration: 'June 2016 - June 2017 | Hyderabad, Telangana',
      role: 'UI Architect',
      description: `
        Multiple projects in **Angularjs, Angular, NodeJs and Web Components**. 
        Finding and providing the best **UI technology** as per requirement.
      `,
      markdown: `
        ###### Project Description
        **OWB** application is to monitor the state of the currier of various brands like 
        **Nike, Oasis, Reebok**. It clearly shown their state in 360 degree view, 
        like **Input, In-progress, Closed** etc. It represents how many are in error 
        state and type of error. It also has graph like sparkline and bar chart. 
        It provides one place solution to monitor the entire currier delivery flow
        
        ###### Accomplishments
        -	Deciding the latest technology stack for **UI Apps**
        -	Setting up the **UI Angular4** build with **angular-cli, Sass** and **material design**
        -	Analyzing and proposing the best user experience with enriched CSS3 features like 
          Transition, box-shadow and less click, simple intuitive UI experience.
        -	Developing the custom components which are not present in Angular4 material design.
        -	Managing a team of 10 people and assigning the task for them in JIRA
        .
      `
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
