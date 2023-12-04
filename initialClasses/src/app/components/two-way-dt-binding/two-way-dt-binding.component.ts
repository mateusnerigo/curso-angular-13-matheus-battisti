import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-dt-binding',
  templateUrl: './two-way-dt-binding.component.html',
  styleUrls: ['./two-way-dt-binding.component.css']
})
export class TwoWayDtBindingComponent implements OnInit {
  username!: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleRemoveFormData() {
    this.username = '';
  }
}
