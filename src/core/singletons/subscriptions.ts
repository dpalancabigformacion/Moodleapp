// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

/**
 * Subscribable object.
 */
type Subscribable<T> = EventEmitter<T> | Observable<T>;

/**
 * Singleton with helpers to work with subscriptions.
 */
export class CoreSubscriptions {

    /**
     * Listen once to a subscribable object.
     *
     * @param subscribable Subscribable to listen to.
     * @param onSuccess Callback to run when the subscription is updated.
     * @param onError Callback to run when the an error happens.
     * @return A function to unsubscribe.
     */
    static once<T>(
        subscribable: Subscribable<T>,
        onSuccess: (value: T) => unknown,
        onError?: (error: unknown) => unknown,
    ): () => void {
        let unsubscribe = false;
        let subscription: Subscription | null = null;

        subscription = subscribable.subscribe(
            value => {
                // Subscription variable might not be set because we can receive a value immediately.
                unsubscribe = true;
                subscription?.unsubscribe();

                onSuccess(value);
            },
            error => {
                // Subscription variable might not be set because we can receive a value immediately.
                unsubscribe = true;
                subscription?.unsubscribe();

                onError && onError(error);
            },
        );

        if (unsubscribe) {
            subscription.unsubscribe();
        }

        return () => subscription?.unsubscribe();
    }

}