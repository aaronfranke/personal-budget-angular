import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'pb-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

	@Input() title = "Untitled";
	@Input() id = "error";

	constructor() { }

	ngOnInit(): void {
	}

}
