import { Subscriber } from "rxjs";


class Multiply extends Subscriber {
	constructor(number, subscriber){
		super(subscriber)

		this.number = number;
	}
	_next(value) {

		this.destination.next(value * this.number);
	}
}

export const multiply = number => source =>	source.lift({
		call(scrib, source) {
			source.subscribe(new Multiply(number, scrib));
		}
	})
