import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MinionsService } from '../../services/minions.service';

@Component({
  selector: 'app-minion',
  templateUrl: './minion.component.html',
  styleUrls: ['./minion.component.css']
})
export class MinionComponent implements OnInit {

  minion: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private minionsService: MinionsService) {
    this.activatedRoute.params.subscribe( params => {
      this.minion = this.minionsService.getMinion(params["id"]);
    })
    
   }

  ngOnInit(): void {
  }

}
