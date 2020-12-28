import { Component, OnInit } from '@angular/core';
import { ScreService } from './scre.service.ts';

@Component({
  selector: 'app-scre',
  templateUrl: './scre.component.html',
  styleUrls: ['./scre.component.scss'],
})

export class ScreComponent implements OnInit {
    public email = {
        email: '',
        name: '',
    }

    constructor (
        private screService: ScreService,
    ) { }

    ngOnInit() {
    }
}