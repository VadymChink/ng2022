import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {CarService} from "../../services";
import {ICar} from "../../interfaces";
import {regEx} from "../../constants";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[];
  form: FormGroup;
  carForUpdate: ICar | null;

  constructor(private carService: CarService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(car => this.cars = car)
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl('bmw', [Validators.pattern(regEx.model)]),
      price: new FormControl(1000, [Validators.min(1990), Validators.max(new Date().getFullYear())]),
      year: new FormControl(2020, [Validators.min(0), Validators.max(1000000)])
    })
  }

  save(): void {
    if (!this.carForUpdate) {
      this.carService.create(this.form.getRawValue()).subscribe(value => {
        this.cars.push(value)
      })
    } else {
      this.carService.updateById(this.carForUpdate.id, this.form.value).subscribe(value => {
        let updateCar = this.cars.find(f => f.id === this.carForUpdate?.id);
        Object.assign(updateCar, value);
        this.carForUpdate = null
      })
    }
  }

  update(car: ICar): void {
    this.carForUpdate = car
    this.form.setValue({model: car.model, price: car.price, year: car.year})
  }

  delete(car: ICar) {
    this.carService.deleteById(car.id).subscribe(() => {
      let index = this.cars.findIndex(value => value.id === car.id);
      this.cars.splice(index, 1);
    })
  }
}
