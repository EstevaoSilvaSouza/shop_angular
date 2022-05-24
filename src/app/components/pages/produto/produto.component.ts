import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../../interface/products';
import { HttpProdutcsService } from '../../../services/http-produtcs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {
  //parametro para receber o objeto que vai ser devolvido pelo meu service.

  objData?: Iproducts;

  constructor(
    private httpProdutcsService: HttpProdutcsService,
    private router: ActivatedRoute
  ) {
    this.getProduct();
  }

  ngOnInit(): void {}

  getProduct() {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    console.log(id);
    this.httpProdutcsService
      .getProduct(id)
      .subscribe((item) => (this.objData = item));
  }
}
