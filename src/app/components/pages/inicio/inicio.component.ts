import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../../interface/products';
import { HttpProdutcsService } from '../../../services/http-produtcs.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  listproducts: Iproducts[] = [];
  time: number = 0;

  constructor(private httpProdutcsService: HttpProdutcsService) {
    this.getAll();
    this.setTime();
  }

  ngOnInit(): void {}

  getAll(): void {
    this.httpProdutcsService
      .getAllProducts()
      .subscribe((items) => (this.listproducts = items));
  }

  teste(thiss: any): void {
    alert(thiss);
  }

  setTime(): void {
    setInterval(() => {
      this.time = this.time + 1;
    }, 1000);
  }
}
