import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  searchItem:string='';
  constructor(private route:ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params['searchItem']){
        this.searchItem =params['searchItem'];
      }    
  })
}
search(item:string):void{
  if(item)this.router.navigateByUrl('/search/'+item);
}
}

