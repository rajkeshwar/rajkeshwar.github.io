import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'pfl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slide', [
      state('true', style({ left: '0px' })),
      state('false', style({ left: '-200px' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class AppComponent {
  title = 'pfl';

  public isNavOpen = false;

  public routes = [
    { path: 'about', icon: 'mdi-social-person', theme: 'teal-text', label: 'About' },
    { path: 'experience', icon: 'mdi-action-trending-up', theme: 'cyan-text', label: 'Experience' },
    { path: 'projects', icon: 'mdi-av-web', theme: 'indigo-text', label: 'Projects' },
    { path: 'skills', icon: 'mdi-av-equalizer', theme: 'purple-text', label: 'Skills' },
    { path: 'awards', icon: 'mdi-action-grade', theme: 'red-text', label: 'Awards' },
    { path: 'education', icon: 'mdi-social-school', theme: 'orange-text', label: 'Education' },
    { path: 'contact', icon: 'mdi-content-mail', theme: 'brown-text', label: 'Contact' }
  ];

  @ViewChild('sidenav') sidenav: ElementRef;

  constructor(private _el : ElementRef) {}

  public openNav( isOpen ) {
    this.isNavOpen = isOpen;
  }

  @HostListener('document:click', ['$event.target'])
  public clickOutside(targetElement) {
    const clickedInside = targetElement.contains(this.sidenav.nativeElement);
    if ( !clickedInside ) {
      // this.isNavOpen = false;
    }
  }
}
