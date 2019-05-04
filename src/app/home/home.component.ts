import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	strings: string[];
	newString: string;

	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.apiService.getStrings()
		.subscribe(data => {
			this.strings = data;
		});
	}

	submit(): void {
		this.apiService.sendString(this.newString)
		.subscribe(data => {
			this.strings = data;
		});
	}
}
