import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pagina-uno',
  templateUrl: './pagina-uno.component.html',
  styleUrls: ['./pagina-uno.component.scss']
})
export class PaginaUnoComponent implements OnInit {

  name: string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query) => {
      this.name = query['n'];
      console.log(this.name);

      this.activatedRoute.data.subscribe((data) => {
        if (!this.name) {
          this.name = data['defaultName'];
        }
        console.log(data);
      });
    });

  }




}
