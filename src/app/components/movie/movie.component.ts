import {Component, computed, OnInit, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{
  movies:WritableSignal<any>= signal([])
  categories = computed(()=>{
    if (this.movies().length){
      console.log("this is true")
      return Array.from(new Set(this.movies().map((movie:any) => movie.category)))
    }
    return []
  })
  category = signal("-1")
  filterMovies= computed(() =>{
    if (this.category() == "-1"){
      return this.movies()
    }else {
      return this.movies().filter((movie:any ) => movie.category == this.category())
    }
  })




  ngOnInit(): void {



    fetch("https://v1.slashapi.com/java-team/google-sheets/PK1gimkQMB/tete")
      .then(data => data.json())
      .then(data => {
        this.movies.set(data.data)
        console.log(this.movies())
      })
  }


  onChangeHandler({target:{value}}:any) {
    this.category.set(value);
  }
}
