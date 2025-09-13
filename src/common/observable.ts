export class Observable {
    private observers: Array<(data: any) => void> = []

    subscribe(fn: (data: any) => void) {
        this.observers.push(fn)
    }

    unsubscribe(fn: (data: any) => void) {
        this.observers = this.observers.filter(subscriber => subscriber !== fn)
    }

    notify(data: any) {
        this.observers.forEach(subscriber => subscriber(data))
    }
}