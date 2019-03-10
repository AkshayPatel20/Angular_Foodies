import { Component, OnInit } from '@angular/core';

import { Recipes } from '../recipes.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipes[] = [
    new Recipes('Ground Beef Recipes',
                 'Feed your family fast (and cheap!) with one of our 500 ground beef and hamburger recipes',
                 'https://www.justataste.com/wp-content/uploads/2018/01/easy-beef-and-broccoli-recipe-580x875.jpg'),
    new Recipes('Ground Beef Recipes',
    'Feed your family fast (and cheap!) with one of our 500 ground beef and hamburger recipes',
    'https://www.justataste.com/wp-content/uploads/2018/01/easy-beef-and-broccoli-recipe-580x875.jpg'),

                ];

  constructor() { }

  ngOnInit() {
  }

}
