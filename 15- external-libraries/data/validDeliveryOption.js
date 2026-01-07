import { deliveryOptions } from "./deliveryOptions";

export function validDeliveryOption(deliveryOptionId) {
    let found = false;

    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            found = true;
        }
    });
    return found;
}