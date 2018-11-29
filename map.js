import { Subscriber } from 'rxjs';

class MSuscriber extends Subscriber{
    constructor(sub, fn){
        super(sub);

        this.fn = fn;
    }
    _next(value){
        this.destination.next(this.fn(value))
    }
}

export const map = fn => source => source.lift({
    call(subscriber, source){
        source.subscribe(new MSuscriber(subscriber, fn))
    }
})