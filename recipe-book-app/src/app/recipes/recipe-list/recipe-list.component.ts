import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply a test',
      'https://static.toiimg.com/thumb/95140230.cms?width=800&height=533&imgsize=115036'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a simply a test',
      'https://static.toiimg.com/thumb/95140230.cms?width=800&height=533&imgsize=115036'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
