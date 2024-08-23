import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [TagModule, DialogModule, InputTextModule, ButtonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  @Input() visible: boolean = false;
  @Output() dismiss = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDismissClick() {
    this.visible = false;
    this.dismiss.emit();
  }
}
