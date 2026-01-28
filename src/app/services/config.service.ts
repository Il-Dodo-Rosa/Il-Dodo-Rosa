import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { SiteConfig, Corso, Insegnante, Progetto, Contatti } from '../models/site-config.model';
import { catchError, of } from 'rxjs';

/**
 * ConfigService - Loads and provides access to site configuration data
 * Uses Angular signals for reactive state management
 */
@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    private http = inject(HttpClient);

    // Load configuration from JSON file
    private config$ = this.http.get<SiteConfig>('/assets/data/site-config.json').pipe(
        catchError(error => {
            console.error('Error loading site configuration:', error);
            return of(null);
        })
    );

    // Convert observable to signal for reactive access
    private configSignal = toSignal(this.config$, { initialValue: null });

    // Computed signals for each section
    corso = computed<Corso | null>(() => this.configSignal()?.corso ?? null);
    insegnanti = computed<Insegnante[]>(() => this.configSignal()?.insegnanti ?? []);
    progetti = computed<Progetto[]>(() => this.configSignal()?.progetti ?? []);
    contatti = computed<Contatti | null>(() => this.configSignal()?.contatti ?? null);

    // Loading state
    isLoading = computed(() => this.configSignal() === null);

    // Full config access if needed
    fullConfig = this.configSignal;
}
