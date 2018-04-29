import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pfl-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills = [
    { category: 'HTML', skills: [
      { label: 'Haml', icon: 'assets/img/haml.png', alt: 'Haml' },
      { label: 'Jade', icon: 'assets/img/jade.png', alt: 'Jade' },
      { label: 'Jakyll', icon: 'assets/img/jakyll.png', alt: 'Jakyll' }
    ]},
    { category: 'CSS', skills: [
      { label: 'CSS3', icon: 'assets/img/css3.png', alt: 'CSS3' },
      { label: 'SASS', icon: 'assets/img/sass.png', alt: 'SASS' },
      { label: 'Bootstrap', icon: 'assets/img/bootstrap.png', alt: 'Bootstrap' },
      { label: 'Foundation', icon: 'assets/img/foundation.png', alt: 'Foundation' },
      { label: 'Materialize', icon: 'assets/img/materialize.png', alt: 'Materialize' }
    ]},
    { category: 'Frameworks', skills: [
      { label: 'Angular', icon: 'assets/img/angular.png', alt: 'Angular' },
      { label: 'Meanstack', icon: 'assets/img/sass.png', alt: 'Meanstack' },
      { label: 'Spring Boot', icon: 'assets/img/bootstrap.png', alt: 'Spring Boot' },
      { label: 'ELK Stack', icon: 'assets/img/foundation.png', alt: 'ELK Stack' }
    ]},
    { category: 'Back-End', skills: [
      { label: 'Java', icon: 'assets/img/java.png', alt: 'Java' },
      { label: 'Spring Boot', icon: 'assets/img/nodejs.png', alt: 'Spring Boot' },
      { label: 'PHP', icon: 'assets/img/ionic.png', alt: 'PHP' },
      { label: 'Laravel', icon: 'assets/img/ionic.png', alt: 'Laravel' },
      { label: 'Postgresql', icon: 'assets/img/postgresql.png', alt: 'Postgresql' },
      { label: 'Mongodb', icon: 'assets/img/mongodb.png', alt: 'Mongodb' }
    ]},
    { category: 'Build Tools', skills: [
      { label: 'Gulp', icon: 'assets/img/java.png', alt: 'Gulp' },
      { label: 'Grunt', icon: 'assets/img/nodejs.png', alt: 'Grunt' },
      { label: 'Webpack', icon: 'assets/img/ionic.png', alt: 'Webpack' },
      { label: 'Maven', icon: 'assets/img/postgresql.png', alt: 'Maven' },
      { label: 'Gradle', icon: 'assets/img/mongodb.png', alt: 'Gradle' }
    ]},
    { category: 'Other', skills: [
      { label: 'Github', icon: 'assets/img/java.png', alt: 'Github' },
      { label: 'Heroku', icon: 'assets/img/nodejs.png', alt: 'Heroku' },
      { label: 'CPanel', icon: 'assets/img/ionic.png', alt: 'CPanel' },
      { label: 'Wordpress', icon: 'assets/img/postgresql.png', alt: 'Wordpress' }
    ]}
  ];

  constructor() { }

  ngOnInit() {
  }

}
