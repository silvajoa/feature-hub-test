class CountManager {
    plus() {
        this.__proto__.count += 1;
        this.notifyListeners();
    }

    minus() {
        this.__proto__.count -= 1;
        this.notifyListeners();
    }

    getCount() {
        return this.__proto__.count;
    }

    subscribe(listener) {
        this.__proto__.listeners.add(listener);

        return () => this.__proto__.listeners.delete(listener);
    }

    notifyListeners() {
        this.__proto__.listeners.forEach((listener) => listener());
    }
}

CountManager.prototype.count = 0;
CountManager.prototype.listeners = new Set();

export const countManagerDefinition = {
    id: 'test:countmvc-count-manager',

    create: (env) => {
        const v1 = (consumerId) => ({
            featureService: new CountManager(),
        });

        return {
            '1.0.0': v1,
        };
    },
};
