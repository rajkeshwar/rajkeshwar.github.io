import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'pfl-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideUp', [
      state('true', style({ transform: 'translateY(-400px)' })),
      state('false', style({ transform: 'translateY(0px)' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  public projects = [
    {
      name: '**CST** (Multiple Projects)', icon: 'assets/img/blogspire.jpg', 
      description: `
        **CST (Core System Technology):** Build framework to support 
        multiple projects with common components
      `,
      projectLink: '',
      githubLink: '',
      accomplishments: `
      - Researching the latest technology stack for UI application
      - Setting up the **UI Angular5 build** with **angular-cli, Sass and material design**
      - Analyzing and proposing the best user experience with enriched **CSS3** features like 
        **Transition, box-shadow** and less click, simple intuitive UI experience.
      - Developing the **custom components** which are not present in **Angular material design**
      `
    },
    {
      name: '**OWB** (Operational Workbench) ', icon: 'assets/img/blogspire.jpg', 
      description: `
        This application is for monitor the state of the currier of various brands like **Nike, Oasis, Reebok**,
        It clearly shown their state in 360 degree view, like **Input, In-progress, Closed** etc.
      `,
      accomplishments: `
      - Deciding the latest technology stack for **UI Apps**
      - Setting up the **UI Angular4** build with **angular-cli**, Sass and material design
      - Closely working with the F1Studio **UX Team** and implement the design proposed by them.
      -	Developing the **Custom UI Components** according to companies brand and specification.
      - Dealt with huge data-sets with pagination and lazy loading for optimum performance.
      - Worked extensively with **D3/C3 Charts** with **Angular**.
      `
    },
    {
      name: '**Check Services**', icon: 'assets/img/blogspire.jpg', 
      description: `
        This application is for **Bank of America's** wholesale customer. This is a web app by which 
        the customer can perform **Positive pay, Reverse Positive Pay, Reconciliation** etc.
      `,
      accomplishments: `
      -	Developed Angularjs **directives** for **custom ui widgets**.
      -	Developed **REST** services that can be consumed by client.
      -	Involved in **angular framework** development as per the bank standard.
      -	Code refactoring in CheckServices and Data Configurator Tool **(DCT)**. 
      -	Building presentation **tree component with JSF**
      `
    }
  ];

  constructor() { 
    this.projects = this.projects.map((project:any) => {
      project.isRevel = false;
      return project;
    })
  }

  ngOnInit() {
    
  }

  public stringConcat(markdown) {
    return markdown.replace(/^\s+|\s+$/gm, '');
  }

  public setRevel( item ) {
    item.isReveled = true;
  }

}
