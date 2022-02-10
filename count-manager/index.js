export const countManagerDefinition = {
    id: 'test:countmvc-count-manager',

    create: (env) => {
        let count = 0;

        const listeners = new Set();

        const v1 = (consumerId) => {
            return ({
                featureService: {
                    plus() {
                        count += 1;
                    },

                    minus() {
                        count -= 1;
                    },

                    getCount() {
                        return count;
                    },

                    subscribe(listener) {
                        listeners.add(listener);

                        return () => listeners.delete(listener);
                    },

                    notifyListeners() {
                        listeners.forEach((listener) => listener());
                    }
                },
            })
        };

        return {
            '1.0.0': v1,
        };
    },
};
