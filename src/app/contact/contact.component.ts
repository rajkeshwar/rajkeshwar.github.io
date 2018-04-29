import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pfl-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contacts = [
    { 
      tooltip:'Email Rajkeshwar', 
      icon: 'fa fa-envelope',
      label: 'rajkeshwar83@gmail.com', 
      href: 'mailto:rajkeshwar83@gmail.com' 
    },
    { 
      tooltip:'View Rajkeshwar on Github', 
      icon: 'fa fa-github',
      label: 'http://github.com/rajkeshwar', 
      href: 'http://github.com/rajkeshwar' 
    },
    { 
      tooltip:'View Rajkeshwar on LinkedIn', 
      icon: 'fa fa-linkedin',
      label: 'https://www.linkedin.com/in/rajkeshwar', 
      href: 'https://www.linkedin.com/in/rajkeshwar' 
    }
  ];

  constructor() { 

  }

  ngOnInit() {
  }

}
