# Oliver Space Tests Description

This document is to describe the way of thinking behind the decisions taken about what to automate for the purchase flow inside  [Oliver Space](https://oliver.space)

## Test Analysis
As part of the testing process the fist thing I did was to analyze the web app and specifically the purchase flow.

Based on that the next constraints were found:
```
1. User should not be able to move to the delivery page if there is no items in the cart.
2. The user should set a location when trying to add something to the cart.
3. The user should select a plan after adding the first product to the cart if the are not logged in the app.
4. To proceed to the delivery page the user should add at least one product to the cart.
5. To move to the payment page, the user should add at least the information for the required fields.
6. To complete the payment the user should add valid payment information.
```

### Test Cases
Based on the constraints above, I tried to cover the main scenarios without going very deep into edge cases, so the test cases below reflect and cover the main flows that a user can find while trying to buy a product from Oliver Space WebApp.

The test cases I decided to automate were:

```
1. Verify that an empty state is shown in the cart when the user has not added any product.
2. Verify that the user is able to add products to the cart but also remove them from the cart.
3. Verify the user is able to move to the delivery page when the cart has at least one product.
4. Verify that the user is asked for the required fields in the delivery page before moving to the payment page.
5. Verify the user can complete a purchase by adding one or more elements to the cart.
```

With these test cases I think the main flow for the purchase are covered at least for an initial smoke/regression suite. There are other cases that can be covered for future iterations like:

```
1. Verify the user can add and remove several products from the cart.
2. Verify the filters work properly and the user can use them to select products and add them to the cart.
3. Verify the purchase flow by logging into a valid account at the beginning of the purchase flow.
4. Verify invalid locations and that the user is asked to add a valid location.
5. Verify restrictions in terms of the address in the delivery process.
6. Verify different payments and card types to complete the purchase.
```