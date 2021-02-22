import { formatCurrency } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css'],
})
export class Search1Component implements OnInit {
  @Output() searchEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  // let noDietForm = {
  //     this.form.value.cookTime,
  //     this.form.value.searchQuery,
  //   }
  //   let noTimeForm = {
  //     this.form.value.searchQuery,
  //     this.form.value.dietType
  //   }
  //   let noTimeOrDietForm = {
  //     this.form.value.searchQuery
  //   }

  emitSearchTerm = (form: NgForm) => {
    this.searchEvent.emit(form);
  };

  // emitSearchTerm = (form: NgForm) => {
  //   console.log(form);
  //   this.searchEvent.emit(form);
  // };
}
