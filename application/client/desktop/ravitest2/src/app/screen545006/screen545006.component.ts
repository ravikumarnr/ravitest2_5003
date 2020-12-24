import { Component, OnInit } from '@angular/core';
import { Screen545006Service } from './screen545006.service.ts';

@Component({
  selector: 'app-screen545006',
  templateUrl: './screen545006.component.html',
  styleUrls: ['./screen545006.component.scss'],
})

export class Screen545006Component implements OnInit {
    public email = {
        email: '',
    }

    constructor (
        private screen545006Service: Screen545006Service,
    ) { }

    ngOnInit() {
    }
}