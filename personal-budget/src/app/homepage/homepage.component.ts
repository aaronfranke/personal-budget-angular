import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
	selector: 'pb-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get("http://localhost:3000/budget").subscribe((res: any) => {
			// Empty template data structure.
			const dataSource = {
				datasets: [{
					data: [],
					backgroundColor: [
						"#324cdd",
						"#ff6384",
						"#36a2eb",
						"#ff0500",
						"#ffcd56",
						"#fd6b19",
						"#83c57a",
						"#96113a"
					]
				}],
				labels: []
			};
			// Populate the data structure with received values.
			for (let i = 0; i < res.myBudget.length; i++) {
				dataSource.datasets[0].data[i] = res.myBudget[i].budget;
				dataSource.labels[i] = res.myBudget[i].title;
			}
			this.createChart(dataSource);
		});
	}

	createChart(dataSource): void {
		const context = document.getElementById("myChart");
		// tslint:disable: no-unused-expression
		new Chart(context, {
			type: "pie",
			data: dataSource
		});
	}
}
