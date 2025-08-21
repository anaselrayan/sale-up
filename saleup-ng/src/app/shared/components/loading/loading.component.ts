import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  template: `
    <div class="loading-container">
      <div class="dot-loader">
        <span></span><span></span><span></span>
      </div>
      <!-- <div class="logos text-muted-color">
        BY ANAS ELRAYAN
      </div> -->
    </div>
  `,
  styles: [`
    .loading-container {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9000;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
      background-color: var(--surface-ground);
    }

    .dot-loader {
      display: flex;
      gap: 10px;
    }

    .dot-loader span {
      width: 12px;
      height: 12px;
      background-color: var(--primary-color);
      border-radius: 50%;
      animation: bounce 0.6s infinite ease-in-out;
    }

    .dot-loader span:nth-child(2) {
      animation-delay: 0.2s;
      background-color: var(--surface-overlay);
    }

    .dot-loader span:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes bounce {
      0%, 80%, 100% {
        transform: scale(0.6);
        opacity: 0.7;
      }
      40% {
        transform: scale(1.2);
        opacity: 1;
      }
    }
  `]
})
export class LoadingComponent {}
