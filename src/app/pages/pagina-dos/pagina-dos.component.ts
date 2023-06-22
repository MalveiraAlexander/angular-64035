import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-dos',
  templateUrl: './pagina-dos.component.html',
  styleUrls: ['./pagina-dos.component.scss']
})
export class PaginaDosComponent implements OnInit {

  name: string = 'Angular 13';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.name = data['n'];
      console.log(data);

    })
  }
}
