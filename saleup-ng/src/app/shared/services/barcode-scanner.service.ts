import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BarcodeScannerService {
  private buffer = '';
  private scanSubject = new Subject<string>();
  scan$ = this.scanSubject.asObservable();

  constructor(private ngZone: NgZone) {
    this.listenForScanner();
  }

  private listenForScanner() {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      this.ngZone.run(() => {
        if ((e.target as HTMLElement).tagName === 'INPUT' || 
            (e.target as HTMLElement).tagName === 'TEXTAREA') {
            return;
        }
        if (e.key === 'Enter') {
          if (this.buffer.length > 0) {
            this.scanSubject.next(this.buffer);
            this.buffer = '';
          }
        } 
        else {
          if (e.key.length === 1) {
            this.buffer += e.key;
          }
        }
      });
    });
  }
}