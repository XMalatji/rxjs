import { from } from 'rxjs';
import { multiply } from './multiply';

const obs$ = from([ 1, 2, 3, 4, 5 ]);

const subscriber = {
	next: (val) => {
		console.log('val:', val);
	},
	complete: () => {
		console.log('done');
	},
	error: (val) => {
		console.log('error', val);
	}
};


obs$.pipe(
		//pipe takes a source var and returns a source obs
		multiply(3)
	)
	.subscribe(subscriber);

	obs$.pipe(multiply(10)).subscribe(subscriber)
