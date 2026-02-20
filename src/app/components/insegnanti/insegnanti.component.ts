import { Component, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';
import { ConfigService } from '../../services/config.service';

@Component({
    selector: 'app-insegnanti',
    standalone: true,
    imports: [CommonModule, MarkdownComponent],
    templateUrl: './insegnanti.component.html',
    styleUrl: './insegnanti.component.css'
})
export class InsegnantiComponent {
    config = inject(ConfigService);

    constructor() {}
}

