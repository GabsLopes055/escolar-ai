import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../../../../../../shared/button/button.component";
import { Router } from '@angular/router';
import { VoosService } from '../../voos.service';

@Component({
  selector: 'voo-confirmado',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './voo-confirmado.component.html',
  styleUrl: './voo-confirmado.component.scss'
})
export class VooConfirmadoComponent implements OnInit, OnDestroy{

  constructor(
    private readonly router: Router,
    private readonly vooService: VoosService
  ){

  }
  ngOnDestroy(): void {
    this.vooService.confirmarVoo.next(null);
  }
  ngOnInit(): void {
  }

  acompanharReservas() {
    this.vooService.confirmarVoo.next(null);
    this.router.navigate(['admin/reservas']);
  }
}