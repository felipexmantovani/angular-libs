import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib-b',
  template: `
    <p>
      lib-b works!
    </p>
  `,
  styles: [
  ]
})
export class LibBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
